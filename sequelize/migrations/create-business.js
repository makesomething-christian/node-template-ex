import fields from '../defs/fields'

export default {
  up: async queryInterface => queryInterface.createTable('business', fields.business ),
  down: async queryInterface => queryInterface.dropTable('business')
}
