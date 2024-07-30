let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("começando a ferver a água")
            resolve(true)
        }else{
            console.log("É necessário ligar o fogão e colocar a chaleira para ferver a aguá")
            reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log("Passo 2 Finalizado")
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) =>{
        console.log("Passo 3 Finalizado")
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) =>{
        console.log("Passo 4 Finalizado")
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//     .then(() => {
//         return passaOCafe()
//     })
//     .then(() => {
//         return tomarCafe()
//     })
//     .then(() => {
//         return lavarXicara()
//     })
//     .then(() => {
//         console.log("Finalizado o ritual do café")
//     })

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomada = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomada)
    if(xicaraLavada) console.log("Finalizado o ritual de tomar café")
}

iniciarProcessoDeFazerCafe()