// box inside a box and another


const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 5, w: 2, h: 2 },
    { l: 4, w: 4, h: 4 },
]


function fitsInOneBox(boxes) {

    let bool = true

    boxes.sort((a, b) => {
        if (a.l > b.l) {
            return 1;
        }
        if (a.l < b.l) {
            return -1;
        }
        if (a.l == b.l) {
            bool = false
            return 0;
        }
    });

    for (let i = 0; i < (boxes.length - 1) ; i++) {
        boxes[i].w > boxes[i + 1].w ? bool = false : null;
        boxes[i].h > boxes[i + 1].h ? bool = false : null
    }

    return bool
}


console.log(fitsInOneBox(boxes))