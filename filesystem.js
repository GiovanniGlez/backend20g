const fs = require("fs")

console.log("fs write", fs.writeFile)

fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) =>{
    //Logica negativa
    if (err) {
        console.log("err", err)
        return //Salte
    }
    //Si no, todo lo demas
    console.log("el archivo fue un exito")
})