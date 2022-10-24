const empleados = [{id:1,nombre:"fernando",},{id:2,nombre:"Linda",},{id:3,nombre:"karen",},]
const salarios = [{id:1, salario:1000,}, { id:2, salario:1500,},]
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


const getInfoUsuario = async(id)=>{

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `el salario del empleado ${empleado} es ${salario}`
    }
        catch (error) {
            throw error; 
        }
}

const id = 1;