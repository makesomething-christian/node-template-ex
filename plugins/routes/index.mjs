import Routes from './v1'

const routes = Routes.map(plugin => {
  return {
    plugin: plugin,
    options: {
      routes: {
        prefix:'/' + plugin.name
      }
    }
  }
})
export default routes


