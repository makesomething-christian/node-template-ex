import Debug from 'debug'
import log from '../../lib/logger'
import config from '../../config'

const debug = Debug('hapi:plugins:general')
const apiConfig = config.getApiConfig()
  
const plugin = {
  name: 'general',
  version: apiConfig.VERSION,
  register: async (server, options) => {

    debug(`[init] registering route:${ plugin.name }. options =`, options)
    
    server.route([
      {
        method: 'GET',
        path: '/',
        options: {
          description: 'API Version',
  
          handler: async () =>  {
            return {
              status:'OK',
              version: apiConfig.VERSION
            }
          }
        }
      }
    ])
    log.info(`[routes] routes:${plugin.name} registered`)

    server.ext('onPreResponse', (req, h) => {
      const res = req.response

      if (res && res.isBoom) {
        debug(res.output)
    
        return 'INVALID REQUEST'
      }
      return h.continue
    })
  }
}

export default plugin