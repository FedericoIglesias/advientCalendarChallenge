// we need a mechanic


let part = 'zzzoonzzz'

function checkPart(part) {

    let aux = ''
    let auxi = ''
    let bool
    let letters = ''



    for (let i = 0; i < part.length; i++) {
        part[i] == aux[aux.length - 1] ? undefined : aux += part[i]
    }
    for (let i = aux.length - 1; i >= 0; i--) {
        auxi += aux[i]
    }

    for (let i = 0; i < aux.length; i++) {
        aux[i] == auxi[i] ? bool = true : letters += auxi[i]
    }

    letters.length == 0 ? bool = true :
        letters.length > 2 ? bool = false : 
        auxi.replace(letters[1], '') == aux.replace(letters[1], '')? bool = true : bool = false 

        auxi.replace(letters[0], '') == aux.replace(letters[0], '')? bool = true : bool = false 

    console.log(auxi.replace(letters[1], ''))
    console.log(auxi.replace(letters[0], ''))

    return bool
}

console.log(checkPart(part))