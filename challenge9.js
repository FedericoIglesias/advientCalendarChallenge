// 

let leds = [1, 0, 0, 1, 0, 0]

function countTime(leds) {
    
    let aux = 0
    let pasada = 0

    while(leds.includes(0)){

        for(let i = 0; i < leds.length; i++){
            if (leds[i] == 0 && leds[i - 1] == 1)  { leds[i] = 1, i++}
            if (leds[i] == 0 && leds[leds.length -1] == 1 && i == 0) { leds[i] = 1, i++}
        }
        aux++
    }
    
    return aux * 7
}



console.log(countTime(leds))