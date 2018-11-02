import Sequelize from 'sequelize'
import config from './config'
//import log from './lib/logger'
//import Debug from 'debug'

//const debug = Debug('db:sequelize')
const dbConfig = config.getDbConfig()
const sequelize = new Sequelize(dbConfig.NAME, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

export default sequelize