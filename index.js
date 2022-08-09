// console.log("hola mundo")
// console.log("nombre"process.argv[2])
// console.log("apellido"process.argv[3])
// Función que reciba de parametro un nombre de process.argv y si existe que me imprima "Bienvenido y el nombre"
//SI NO, imprimir "Afuera de aqui"
// let name = process.argv[2]
const nombre = process.argv[2]
const printName = (nombre) => {
    if (nombre) {
        console.log(`Bienvenido ${nombre}`)
        return
    }
    console.log('Afuera de aqui') 
}

printName(nombre)