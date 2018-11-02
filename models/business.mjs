
import Sequelize from 'sequelize'
import fields from '../sequelize/defs/fields.mjs'

export default class Business extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      fields.business,
      { 
        tableName: 'business',
        sequelize
      }
    )
  }
}