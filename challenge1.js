// Automating Christmas gift wrapping

function wrapping(gifts) {
    let aux = []
    let auxi = []
    for (let i = 0; i < gifts.length; i++) {
        auxi = '**\n*' + gifts[i] + '*\n**'
        for(let j = 0; j < gifts[i].length; j++){
            auxi = ('*' + auxi + '*')
        }
        aux.push(auxi)
    }
    return aux
}