
import env from './local.json'

export default {
  getServerConfig: () => env.server,
  getDbConfig: () => env.db,
  getMailConfig: () => env.mail,
  getApiConfig: () => env.api
}
