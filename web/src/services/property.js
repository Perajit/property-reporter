import {
  PROPERTIES_ENDPOINT
} from 'constants/endpoints'

const request = (url, requestOptions, extract) => {
  return fetch(url, requestOptions)
    .then((res) => res.json())
}

const getProperties = () => {
  return request(PROPERTIES_ENDPOINT)
    .then((json) => json.properties)
}

const saveProperty = (property, isNew) => {
  if (isNew) {
    return addProperty(property)
  }
  else {
    return updateProperty(property)
  }
}

const addProperty = (property) => {
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([property])
  }

  return request(PROPERTIES_ENDPOINT, requestOptions)
    .then((json) => json.savedProperties[0])
}

const updateProperty = (property) => {
  let requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(property)
  }

  return request(`${PROPERTIES_ENDPOINT}/${property.id}`, requestOptions)
    .then((json) => json.savedProperty)
}

const deleteProperties = (ids) => {
  let requestOptions = {
    method: 'DELETE',
    body: JSON.stringify(ids)
  }

  return request(`${PROPERTIES_ENDPOINT}?ids=${ids}`, requestOptions)
    .then((json) => json.deletedProperties)
}

const getPropertySummary = () => {
  return request(`${PROPERTIES_ENDPOINT}/summary`)
    .then((json) => json.propertySummary)
}

export default {
  getProperties,
  getPropertySummary,
  saveProperty,
  deleteProperties
}
