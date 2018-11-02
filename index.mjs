import server from './server.mjs'
import logger from './lib/logger.mjs'

const start = async () => {
  await server.start()
}

start()

process.on('SIGINT', () => {
  logger.fatal('Shutting down...')
  process.exit()
})
