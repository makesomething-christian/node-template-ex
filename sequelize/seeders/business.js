
export default {
  up: async queryInterface  => {
    return queryInterface.bulkInsert('business', [{
      name: 'makesomething.io',
      email: 'support@makesomething.io'
    }], {})
  },

  down: async queryInterface => queryInterface.bulkDelete('business', null, {})
}