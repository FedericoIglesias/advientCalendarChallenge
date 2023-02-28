// doing gifts inventory


const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']



function getGiftsToRefill(a1, a2, a3) {

    let aux1 = []
    let aux2 = []
    let aux3 = []
    let aux = []
    


    for(let i = 0; i < a1.length; i++){
        a2.includes(a1[i])? undefined : a3.includes(a1[i])? undefined : aux.includes(a1[i])? undefined : aux.push(a1[i])
        // a3.includes(a1[i])? undefined : aux.push(a1[i])
    }

    for(let i = 0; i < a2.length; i++){
        a1.includes(a2[i])? undefined : a3.includes(a2[i])? undefined : aux.includes(a2[i])? undefined : aux.push(a2[i])
        // a3.includes(a2[i])? undefined : aux.push(a2[i])
    }

    for(let i = 0; i < a3.length; i++){
        a1.includes(a3[i])? undefined : a2.includes(a3[i])? undefined : aux.includes(a3[i])? undefined : aux.push(a3[i])
        // a2.includes(a3[i])? undefined : aux.push(a3[i])
    }






    return aux
}


console.log(getGiftsToRefill(a1, a2, a3))