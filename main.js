const Tram = require('tram-one')
const showModalActions = require('./actions/showModalActions')

const app = new Tram()
app.addRoute('/example1', require('./pages/example-1'))
app.addRoute('/example2', require('./pages/example-2'))
app.addRoute('/example3', require('./pages/example-3'))

app.addRoute('/404', require('./pages/404'))
console.log(showModalActions)
// app.addActions({showModal: showModalActions})
app.start('.main')

window.app = app;
