import Debug from 'debug'
import log from '../../../lib/logger'
import config from '../../../config'
import models from '../../../models'

const debug = Debug('hapi:plugins:users')
const apiConfig = config.getApiConfig()
const User = models.user

const plugin = {
  name: 'users',
  version: apiConfig.VERSION,
  register: async (server, options) => {
    debug(`[init] registering route:${ plugin.name }. options =`, options)
    
    server.route([
      {
        method: 'GET',
        path: '/users',
        options: {
          description: 'Return list of all users',
  
          handler: async req => {
            debug('[get]', req.url.path)
            return await User.findAll()
          }
        }
      }
    ])
    log.info(`[routes] routes:${plugin.name} registered`)
  }
}
export default plugin