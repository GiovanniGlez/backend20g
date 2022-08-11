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
fs.appendFile("text1.txt", "Esto es NUEVO", "utf-8", (err) => {
    if(err) {
        console.log("Error", err);
        return
    }
    console.log("tú archivo fue actulizado con exito")
})

fs.unlink('text1.txt', (err) => {
    if(!err){
        console.log("Este archivo ah sido eliminado")
    } else {
        console.log(err)
    }
})
