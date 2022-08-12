/**
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * 
 * Sintaxis:
 */


// Sintaxis
// Arrow function

// const funcionAsincrona = async () => {

//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }

// // Funcion normal
// async function asincronidadFuncion() {
//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }

// const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false,
//   };

//   const darInformes = (koderAInformar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAInformar.seDieronInformes = true;

//             if (!koderAInformar.seDieronInformes) {
//                 reject("No se pudo dar informes");
//             }

//             // Si se resuelve
//             resolve(koderAInformar);
//         }, 3000);
//     });
//   };

//   const entrevistar = (koderAEntrevistar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAEntrevistar.seEntrevisto = true;

//             if (!koderAEntrevistar.seEntrevisto) {
//                 reject("No se pudo entrevistar");
//             }

//             // Si se resuelve
//             resolve(koderAEntrevistar);
//         }, 3000);
//     });
//   };

//   const pagar = (koderAPagar) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAPagar.sePago = true;

//             if (!koderAPagar.sePago) {
//                 reject("No se pudo pagar");
//             }

//             // Si se resuelve
//             resolve(koderAPagar);
//         }, 3000);
//     });
//   };

//   const inscribir = (koderAInscribir) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             koderAInscribir.seInscribio = true;

//             if (!koderAInscribir.seInscribio) {
//                 reject("No se pudo inscribir");
//             }

//             // Si se resuelve
//             resolve(koderAInscribir);
//         }, 3000);
//     });
//   };

//   // Async - Await
//   const recibiendoInformes = async () => {
//     const koderInformar = await darInformes({...koder})
//     // Awaits
//     // Se esta esperando
//     console.log("koderInformar", koderInformar)
//   }
//   recibiendoInformes()



/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leiReceta = (recetaLaLei) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recetaLaLei.recetaLeida = true;

            if(!recetaLaLei.recetaLeida) {
                reject(", no leyó receta!");
            }
            resolve(recetaLaLei);
        }, 2000);
    })
}

const ingredientesListos = (ingredientesTotal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesTotal.ingredientesConseguidos = true;

            if(!ingredientesTotal.ingredientesConseguidos) {
                reject(", faltan ingredientes!");
            }
            resolve(ingredientesTotal);
        }, 2000);
    })
}

const amasar = (masaLista) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaLista.masaPreparada = true;

            if(!masaLista.masaPreparada) {
                reject(", no haz amasado!");
            }
            resolve(masaLista);
        }, 2000);
    })
}

const horneado = (horneadoListo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            horneadoListo.pastelHorneado= true;

            if(!horneadoListo.pastelHorneado) {
                reject(", pastel crudo!");
            }
            resolve(horneadoListo);
        }, 2000);
    })
}

const decorado = (decoraPastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            decoraPastel.pastelDecorado = true;

            if(!decoraPastel.pastelDecorado) {
                reject(", no esta decorado!");
            }
            resolve(decoraPastel);
        }, 2000);
    })
}

const leiRecetaCompleta = async () => {
    try {
        const recetaLeida = await leiReceta({...pastel})
        console.log("Leiste receta", recetaLeida);
        const completasteIngredientes = await ingredientesListos({...recetaLeida})
        console.log("Tienes todos los ingredientes", completasteIngredientes);
        const masaCompleta = await amasar({...completasteIngredientes})
        console.log("La masa esta lista", masaCompleta);
        const hornoPrecalentado = await horneado({...masaCompleta})
        console.log("El pastel esta horneado", hornoPrecalentado);
        const decoracionPastel = await decorado({...hornoPrecalentado})
        console.log("A comer!, el pastel esta listo", decoracionPastel)
    } catch (err) {
        console.log("fallo un paso", err);
    }
}
leiRecetaCompleta()
