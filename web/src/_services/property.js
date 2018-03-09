import {
  PROPERTIES_ENDPOINT
} from '../_constants/endpoints'

const getProperties = () => {
  return fetch(PROPERTIES_ENDPOINT)
    .then((res) => res.json())
    .then((json) => json.properties)
}

export default {
  getProperties
}
