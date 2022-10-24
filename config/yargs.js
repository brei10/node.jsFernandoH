
const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe : 'digita el comando seguido de un numero para tomarlo como base de la multiplicacion'
})
.option('l',{
    alias : 'listar',
    type : 'boolean',
    demandOption : false,
    default : false,
    describe : 'escribe el comando -l si quieres que se muestre por consola la multiplicacion'
})
.option('h',{
    alias: 'hasta',
    type : 'number',
    demandOption : false,
    default : 10,
    describe : 'escribe el comando seguido del numero, hasta que multiplicar la base'
})
.check ((argv,options) => {
    if (isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }
    return true;
})
.argv;
module.exports = argv;