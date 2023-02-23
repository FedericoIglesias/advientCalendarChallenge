// how many packs of gifts can Santa carry ?
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


function distributeGifts(packOfGifts, reindeers) {
    let totalWeights = 0
    let carryWeights = 0
    let canCarry = 0

    for(let i = 0; i < packOfGifts.length; i++){
        totalWeights += packOfGifts[i].length
    }
    for(let i = 0; i < reindeers.length; i++){
        carryWeights += (reindeers[i].length *2)
    }

    canCarry = Math.floor(carryWeights / totalWeights)

    return canCarry
}

console.log(distributeGifts(packOfGifts, reindeers))