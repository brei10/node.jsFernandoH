const empleados = [
    {id:1,nombre:"fernando",}, {id:2,nombre:"Linda",},
    {id:3,nombre:"karen",},
]

const salarios = [
     {
        id:1,
        salario:1000,
    },
    {
         id:2,
         salario:1500,
    },
    {
        id:6,
        salario:800,
   },
]

let id = 6;

const getEmpleado = (id) => {
    return new Promise((resolve,reject)=>{
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`no se encontro el id : ${id}`);
            /* si, se ejecuta esto */      /*  si no, se ejecuta lo que hay despues de : */ 
    })
}
   const getSalario = (id) => {
        return new Promise((resolve,reject)=>{
            const salario = salarios.find(s => s.id===id)?.salario;
           (salario) ? resolve(salario) : reject(`no se encontro el id : ${id}`)
        });
    }

    getEmpleado(id)
        .then(empleado=>{
            getSalario(id)
                .then(salario=>{
                    console.log(`el empleado ${empleado} tiene un salario de ${salario}`)
                .catch(err=>console.log(err));
                })
        })
        .catch(err=>console.log(err));
