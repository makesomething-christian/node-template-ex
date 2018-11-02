
import config from './config'
import log from './lib/logger'
import Debug from 'debug'
import Hapi from 'hapi'

import plugins from './plugins'
import routes from './plugins/routes'


const debug = Debug('server:hapi')
const serverConfig = config.getServerConfig()
const server = Hapi.server({
  host: serverConfig.HOST,
  port: serverConfig.PORT
})

const prefix = config.getApiConfig().PREFIX
const routeOptions = {
  routes: {
    prefix
  }
}

export default {
  start: async () => {
    try {
      debug('[init] registering plugins')

      try {
        await server.register(plugins)
        log.info('[init] plugins registered')

        await server.register(routes, routeOptions)
        log.info('[init] plugins registered')

      }
      catch (err){
        log.error(err)
      }
      
      debug('[init] Starting server')
      await server.start()
      log.info('[init] Server running at:', server.info.uri)
    }
    catch (err) {
      log.error(err)
    }
  }
}