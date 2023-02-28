//  Creating xmas decorations

// const cubeOfOne = createCube(2)


//   /\_\
//   \/_/

function createCube(size) {

    let upLeft = ''
    let upRight = ''
    let downLeft = ''
    let downRigth = ''
    let string = ''
    let up = ''
    let down = ''
    let auxSize = size

    for (let l = 0; l < size; l++) {
        upRight += '_\\'
        downRigth += '_/'
    }

    for (let i = 0; i < size; i++) {

        for (let a = 1; a < (size - i); a++) {
            upLeft += ' '
        }
        for (let j = -1; j < i; j++) {
            upLeft += '/\\'
        }
        for(let b = 0; b < (size - auxSize); b++){
            downLeft += ' '
        }
        for (let h = auxSize; h > 0; h--) {
            downLeft += '\\/'

        }
        auxSize--
        up += upLeft
        up += upRight
        up += '\n'
        down += downLeft
        down += downRigth
        i !== (size - 1) ? down += '\n' : undefined

        upLeft = ''
        downLeft = ''

    }
    string += up
    string += down


    return string
}

console.log(createCube(3))