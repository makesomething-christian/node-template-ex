import Debug from 'debug'
import log from '../../../lib/logger'
import config from '../../../config'
import models from '../../../models'

const Business = models.business

const debug = Debug('hapi:plugins:business')
const apiConfig = config.getApiConfig()
const plugin = {
  name: 'business',
  version: apiConfig.VERSION,

  async register(server, options) {
    debug(`[init] registering route:${ plugin.name }. options =`, options)

    server.route([
      {
        method: 'GET',
        path: '/business',
        options: {
          description: 'Return list of all business',
          handler: async () => {
            return Business.findAll()
          }
        }
      }
    ])
   
    log.info(`[routes] routes:${plugin.name} registered`)
  }
}
export default plugin