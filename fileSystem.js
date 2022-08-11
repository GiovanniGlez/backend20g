// const { clear } = require("console");
const fs = require("fs")

// console.log("fs write", fs.writeFile, "fs read", fs.readFile)

// fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) =>{
//     //Logica negativa
//     if (err) {
//         console.log("err", err)
//         return //Salte
//     }
//     //Si no, todo lo demas
//     console.log("el archivo fue un exito")
// })

// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     //negando el error
//     if(!err){
//         console.log(data);
//         //Error
//     } else {
//         console.log("Error", err);
//     }
// })


//Put -> reemplaza
//Pathc -> actualiza
// fs.appendFile("text1.txt", "Esto es NUEVO", "utf-8", (err) => {
//     if(err) {
//         console.log("Error", err);
//         return
//     }
//     console.log("tú archivo fue actulizado con exito")
// })

// fs.unlink('text1.txt', (err) => {
//     if(!err){
//         console.log("Este archivo ah sido eliminado")
//     } else {
//         console.log(err)
//     }
// })

// fs.readdir("directorio", "utf-8", (err, files) => {
//     if(err) throw err
//     console.log("files", files)
// })

// const files = fs.readdirSync("directorio1", "utf-8")
// console.log("files", files)

// const directory = "directory1";
// fs.readdir(directory, (err, data) => {
//     if(err) throw err;
//     if(data.length > 0) {
//         data.forEach((cv) => {
//             fs.unlink(directorio + "/" + cv, (err) => {
//                 if (err) {
//                     return
//                 }
//                 console.log(`Se elimino el archivo ${cv}` .red)
//             })
//         })
//         console.log("Se eliminaron todos los archivos".red)
//     }
// })

const path = "dir1"
fs.readdir(path, "utf-8", (err, files) => {
  if(err) throw err

  // Validar que cuanto no tenga archivos me imprima que no hay archivos.
  if(files.length === 0) {
    console.log("No hay archivos")
    return
  }
  // La callback es una funcion
  // A las funciones le podemos en los paramet=ros

  // Continuar con que si tenemos archivos
  files.forEach(file => {
    fs.unlink(`${path}/${file}`, (err) => {
      if(err) throw err

      console.log(`La eliminacion del ${file} fue exitosa`)
    })
  })

})