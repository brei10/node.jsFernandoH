/* en este archivo es donde hacemos el writeFyleSync */
let fs = require('fs');
const colors = require('colors')
let salida,consola = ``;
const tablas = async(base=5,listar,hasta) => {
        try {
                for (let i = 1;i<=hasta;i++){
                    salida += `${base} x ${i} = ${base*i}\n`;
                    consola += `${colors.yellow(base)} ${'x'.green} ${colors.red(i)} = ${base*i}\n`;
                    
                    /* ya que los colores tienen caracteres especiales, almacenamos en otra variable 
                    el resultado, pero solo para mostrar en consola */
                }
                if (listar) {
                    
                    console.log(consola);
                }
                
                fs.writeFileSync(`./salida/tabladel${base}.txt` , salida);
                    return `tabladel${base}.txt`;

        } catch (err) {

                 throw err;
        } 
    
}
    module.exports = {
        tablas,
    }
