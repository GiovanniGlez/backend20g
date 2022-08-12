/**
 * 1 - Pedir informes
 * 2 - Entrevista
 * 3 - Pagar (becado)
 * 4 - Inscripcion
 */

/**
 * 1 - Con callbacks
 */

//  const koder = {
//     seDieronInformes: false,
//     seEntrevisto: false,
//     sePago: false,
//     seInscribio: false,
// };

// const darInformes = (koderADarInformes, callback) => {
//     let error = null;
//     setTimeout(() => {
//         // Voy a darle informes al koder
//         koderADarInformes.seDieronInformes = true;

//         // Si el koder no fue informado, lanzar un error
//         if (!koderADarInformes.seDieronInformes) {
//             error = "No ha sido informado";
//         }
//         callback(error, koderADarInformes);
//     }, 3000);
// };

// const entrevistar = (koderAEntrevistar, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderAEntrevistar.seEntrevisto = true;

//         if (!koderAEntrevistar.seEntrevisto) {
//             error = "No se pudo entrevistar";
//         }

//         callback(error, koderAEntrevistar);
//     }, 2000);
// };

// const pagar = (koderAPagar, callback) => {
//     let error = null;
//     setTimeout(() => {
//         koderAPagar.sePago = false;

//         if (!koderAPagar.sePago) {
//             error = "No se ha pagado";
//         }

//         callback(error, koderAPagar);
//     }, 5000);
// };

// const inscribir = (koderAInscribir, callback) => {
//    let error = null;

//    setTimeout(() => {
//        koderAInscribir.seInscribio = true

//        if(!koderAInscribir.seInscribio) {
//            error = "No se pudo inscribir"
//        }

//        callback(error, koderAInscribir)

//    }, 1000)
// };

// /**
//  * Asincronidad -> cuando se hacian varias cosas al mismo tiempo
//  */

// darInformes({ ...koder }, (error, koderConInformes) => {
//     if (error) {
//         console.log("error:", error);
//         return; // Salte
//     }

//     // Es cuando ya me hizo todo
//     // Aqui se espero, el koder ya tiene informes
//     entrevistar({ ...koderConInformes }, (error, koderEntrevistado) => {
//         if (error) {
//             console.log("error", error);
//             return;
//         }

//         // Vamos a pagar
//         pagar({ ...koderEntrevistado }, (error, koderPagado) => {
//             if (error) {
//                 console.log("error", error);
//                 return;
//             }

//             // Inscribirlo
//             inscribir({...koderPagado}, (error, koderInscrito) => {
//                 if(error) {
//                     console.log("error", error)
//                     return
//                 }

//                 console.log("Exito", koderInscrito)
//             })
//         });
//     });
// });


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

const leiReceta = (leerReceta, callback) => {
    let err = null;
    setTimeout(() => {
        leerReceta.recetaLeida = true;
        if (!leerReceta.recetaLeida) {
            err = "No ha sido leida";
        }
        callback( err, leerReceta);
    }, 2000);
};

const ingredientesListos = (tengoIngredientes, callback) => {
    let err = null;
    setTimeout(() => {
        tengoIngredientes.ingredientesConseguidos = true;
        if (!tengoIngredientes.ingredientesConseguidos) {
            err = "Faltan ingredientes";
        }
        callback(err, tengoIngredientes);
    }, 2000);
};

const amasar = (prepararMasa, callback) => {
    let err = null;
    setTimeout(() => {
        prepararMasa.masaPreparada = true;
        if (!prepararMasa.masaPreparada) {
            err = "No hay masa";
        }
        callback(err, prepararMasa)
    }, 3000);
};

const horneado = (hornoAPunto, callback) => {
    let err = null;
    setTimeout(() => {
        hornoAPunto.pastelHorneado = true;
        if (!hornoAPunto.pastelHorneado) {
            err = "Falta hornear";
        }
        callback(err, hornoAPunto);
    }, 3000);
};

const decorado = (decoraElPastel, callback) => {
    let err = null;
    setTimeout(() => {
        decoraElPastel.pastelDecorado = true;
        if(!decoraElPastel.pastelDecorado) {
            err = "Aun no decoras";
        }
        callback(err, decoraElPastel);
    }, 2000);
};

leiReceta({...pastel}, (err, recetaLeida) => {
    if (err) {
        console.log("error", err);
        return
    }
    ingredientesListos({...recetaLeida}, (err, ingredientesTotal) => {
        if (err) {
            console.log("error", err);
            return
        }
        amasar({...ingredientesTotal}, (err, amasado) => {
            if (err) {
                console.log("error", err)
                return
            }
            horneado({...amasado}, (err, horneadoListo) => {
                if (err) {
                    console.log("error", err)
                    return
                }
                decorado({...horneadoListo}, (err, decoradoFinal) => {
                    if (err) {
                        console.log("error", err)
                        return
                    }
                    console.log("A comer", decoradoFinal)
                })
            })
        })
    })
})

