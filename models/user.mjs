
import Sequelize from 'sequelize'
import fields from '../sequelize/defs/fields.mjs'

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      fields.user,
      { 
        tableName: 'user',
        sequelize
      }
    )
  }
}