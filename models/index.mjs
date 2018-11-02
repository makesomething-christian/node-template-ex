import sequelize from '../db'
import User from './user.mjs'
import Business from './Business'

export default { 
  user: User.init(sequelize),
  business: Business.init(sequelize),
  sequelize 
}