// The Santa Claus sleigh jump

const heights = [1, 2, 3]

function checkJump(heights) {

    let up = true
    let bool = true
    let aux = 0

    for(let i = 0; i < heights.length - 1; i++){
        heights[i] <= heights[i + 1] && up? bool = true : up = false
        up? undefined : heights[i] >= heights[i + 1] && !up? bool = true : aux += 1
    }

    aux > 0? bool = false : up? bool = false :bool = true 
    console.log(aux)
    return bool
}



console.log(checkJump(heights))