const empleados = [
    {  id: 1,   nombre : "fernando",  }, {   id: 2,  nombre : "Linda",   },
    {    id: 3, nombre : "karen",    },
]

const salarios = [ {  id: 1,  salario : 1000, },
 { id: 2, salario : 1500, },
]

// buscar id
let id = 3;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)
        if (empleado){
             callback(null , empleado.nombre );
        } else {
            /* este texto sera el parametro err, no se le pasa el segundo ya que 
            al igual no se ejecturaria, ya que hay un return en el if .  */
            callback(`el empleado con id ${id} no existe`)
        }  
}

const getSalario = (id, callback) => {
    /* si no es null salario, ? se asigna el .salario para acceder especificamente
     a esa propiedad y no tener que escribir .salario en el console.log.
    si es undefined no se asigna el .salario ya que tendriamos error con el 
    parametro null al ejecutarse */
    const salario = salarios.find((s)=> s.id === id)?.salario;
    if (salario){
        callback(null,salario);
    }
    else {
        callback("el id no existe",salario);
    }
}

    /* llamamos la funcion para buscar el empleado. el err se ejecuta solo cuando 
    no se encontra ese valor en el arreglo , si no existe el error, en el if se le 
    asigna un false,undefined, null, en el parametro cuando se llame la funcion
     para que no se ejecute en este if. */
    getEmpleado(id, (err,empleado) => {
        if (err){
            return console.log(err);  
        } 
       /*  si no hay error se llama la funcion de obtener salario y se escribe 
        en consola los dos datos, nombre y su respectivo salario..
        aprovechando de que estan en el mismo scope y por ende hay alcanze de variable */

        getSalario(id,(err,salario)=>{
            if (err) {
                return console.log("no existe esto")
            }
            else {
                console.log(`el empleado ${empleado} tiene un salario de ${salario}`);
            }
        })
    
    });