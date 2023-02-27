//  Optimizing Santa's trips

const giftsCities = [50, 10, 40, 1000, 500, 200]
const maxGifts = 199
const maxCities = 4

function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let aux = 0
    let arrayAux = structuredClone(giftsCities)
    arrayAux.unshift(0)
    let pivot
    let arrayAdd
    let auxAdd = 0
    let totalAdd = []

    while (arrayAux.length >= 1) {

        pivot = arrayAux.shift()
        arrayAdd = [pivot]


        for (let j = 1; j <= maxCities; j++) {
            arrayAdd = []
            for (let i = 0; i < arrayAux.length; i++) {
                arrayAdd.push(arrayAux[i])
                console.log(arrayAdd)
                if (arrayAdd.length == j) {
                    for (let h = 0; h < arrayAdd.length; h++) {
                        auxAdd += arrayAdd[h]
                    }
                    totalAdd.push(auxAdd)
                    arrayAdd.pop()
                    auxAdd = 0
                }
            }
        }
    }

    console.log(totalAdd)

    totalAdd.sort((a, b) => { return a - b })

    for (let i = 0; i < totalAdd.length; i++) {
        totalAdd[i] <= maxGifts ? aux = totalAdd[i] : undefined
    }

    console.log(totalAdd)


    return aux
}


console.log(getMaxGifts(giftsCities, maxGifts, maxCities))