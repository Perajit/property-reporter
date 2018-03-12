import {
  PROPERTIES_ENDPOINT
} from 'constants/endpoints'

const getProperties = () => {
  return fetch(PROPERTIES_ENDPOINT)
    .then((res) => res.json())
    .then((json) => json.properties)
}

export default {
  getProperties
}
