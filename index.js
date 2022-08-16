
// const server = http.createServer((request, response) => {
    //     const { url, method } = request
    //     console.log("method", method)
    //     console.log("url", url)

//     if(method === "GET" && url === "/") {
//         response.write("Bienvenido estas en el get, en home estas leyendo")
//     }else if (method === "POST" && url === "/") {
    //         response.write("Bienvenido estas en el POST en la ruta /, estas creando")
    //     }else if (method === "PATCH" && url === "/") {
//         response.write("Bienvenido estas en el PATCH en la ruta /, estas creando")
//     }else if (method === "PUT" && url === "/") {
//         response.write("Bienvenido estas en el PUT en la ruta /, estas creando")
//     }else if (method === "DELETE" && url === "/") {
//         response.write("Bienvenido estas en el DELETE en la ruta /, estas creando")
//     }else if (method === "GET" && url === "/profile") {
    //         response.write("Bienvenido estas en el GET en la ruta /profile")
    //     }
    //     else {
        //         response.write("Esta ruta no existe")
        //     }
        //     response.write("Hola, bienvenido a mi servidor, modifique algo")
        //     response.end()
        // })

        // server.listen(8080, () => {
            //     console.log("server listening ......")
            // })

const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.write("Hola Bienvenido al get de Home")
    response.end()
})

app.get("/", (request, response) => {
    response.write("Hola, Bienvenido al GET de Home");
    response.end();
});

app.get("/profile", (request, response) => {
    response.write("Hola Bienvenido al GET de Profile");
    response.end();
  });

app.post("/", (request, response) => {
    response.write("Hola, Bienvenido al POST de Home");
    response.end();
});

app.patch("/", (request, response) => {
    response.write("Hola, Bienvenido al PATCH de Home");
    response.end();
});

app.put("/", (request, response) => {
    response.write("Hola, Bienvenido al PUT de Home");
    response.end();
});

app.delete("/", (request, response) => {
    response.write("Hola, Bienvenido al DELETE de Home");
    response.end();
});


app.listen("8080", () => {
    console.log("Servidor escuchando");
});