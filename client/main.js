const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/example1', require('./pages/example-1'))
app.addRoute('/example1#about', require('./pages/example-1'))
app.addRoute('/example2', require('./pages/example-2'))
app.addRoute('/example3', require('./pages/example-3'))

app.addRoute('/404', require('./pages/404'))
app.start('.main')
