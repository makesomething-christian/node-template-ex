import fields from '../defs/fields'

export default {
  up: async queryInterface => queryInterface.createTable('user', fields.user ),
  down: async queryInterface => queryInterface.dropTable('user')
}
