function capitalizar(palabra){
    return palabra.chartt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

module.exports = capitalizar