import {
  PROPERTIES_ENDPOINT
} from 'constants/endpoints'

const getProperties = () => {
  return fetch(PROPERTIES_ENDPOINT)
    .then((res) => res.json())
    .then((json) => json.properties)
}

const getPropertySummary = () => {
  return fetch(`${PROPERTIES_ENDPOINT}/summary`)
    .then((res) => res.json())
    .then((json) => json.propertySummary)
}

const deleteProperties = (ids) => {
  const requestOptions = {
    method: 'DELETE'
  }

  return fetch(PROPERTIES_ENDPOINT, requestOptions)
    .then((res) => res.json())
    .then((json) => json.deletedProperties)
}

export default {
  getProperties,
  getPropertySummary,
  deleteProperties
}
