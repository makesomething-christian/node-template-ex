export default {
  up: async queryInterface => {
    return queryInterface.bulkInsert('user', [{
      firstName: 'Mark',
      lastName: 'Moultrie',
      username: 'mmoultrie1272',
      email: 'mmoultrie@gmail.com'
    }], {})
  },

  down: queryInterface => queryInterface.bulkDelete('user', null, {})
}