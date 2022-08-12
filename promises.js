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
                reject("No leyó receta");
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
                reject("Faltan ingredientes");
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
                reject("No haz amasado");
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
                reject("Pastel crudo");
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
                reject("No esta decorado");
            }
            resolve(decoraPastel);
        }, 2000);
    })
}

const leiLaReceta = leiReceta({ ...pastel });
leiLaReceta
    .then((leiLaReceta) => {
        console.log("Lei toda la receta", leiLaReceta);

        ingredientesListos({ ...leiLaReceta })
            .then((ingredientesCompletos) => {
                console.log("Tienes todos los ingredientes", ingredientesCompletos);

                amasar({ ...ingredientesCompletos })
                    .then((amasadaLista) => {
                        console.log("Tú masa esta lista", amasadaLista);

                        horneado({ ...amasadaLista })
                            .then((horneadoCompleto) => {
                                console.log("Pastel horneado", horneadoCompleto);

                                decorado({ ...horneadoCompleto})
                                    .then((decoradoDelPastel) => {
                                        console.log("A comer pastel", decoradoDelPastel)
                                    })
                                    .catch((error) => {
                                        console.log("Falta decorar pastel", error)
                                    })
                            })
                            .catch((error) => {
                                console.log("Falta hornear", error);
                            });
                    })
                    .catch((error) => {
                        console.log("No haz amasado", error);
                    });
            })
            .catch((error) => {
                console.log("Te faltan ingredientes", error);
            });
    })
    .catch((err) => {
        console.log("No leiste receta", err);
    });