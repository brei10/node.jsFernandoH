const empleados = [{id:1,nombre:"fernando",},{id:2,nombre:"Linda",},{id:3,nombre:"karen",},]
const salarios = [{id:1, salario:1000,}, { id:7, salario:1500,},]
let id = 1;
let nombre;

const getEmpleado = (id) => {
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`no se encontro el USUARIO : ${id}`);
            /* si, se ejecuta esto */      /*  si no, se ejecuta lo que hay despues de : */ 
    })
}
const getSalario = (id) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        (salario) ? resolve(salario) : reject(`no se encontro el SALARIO : ${id}`) 
    });
}

getEmpleado(id)
    .then( empleado => {
         nombre = empleado;
         return getSalario(id)
    })
    .then( salario => console.log(`el empleado ${nombre} tiene un salario de ${salario}`) )
    /* cuando se utiliza en cadena el then, se puede manejar un solo catch en general. */
    .catch( err => console.log( err ) );

          





