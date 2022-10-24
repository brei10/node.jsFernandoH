const { tablas } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

            
tablas(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(`archivo ${nombreArchivo} creado`))
    .catch(err => console.log(err));