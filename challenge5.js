const year = 1985
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

//(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']) 



function countHours(year, holidays) {
let extra = 0
for (let i = 0; i < holidays.length; i++) {
    let aux = holidays[i].split('/')
    let day = Number(aux[1])   
    let month = Number(aux[0]) - 1
    let date = new Date( year, month, day, )
    date.getDay() == 0 || date.getDay() == 6? null : extra +=2
    console.log(date.getDay())
}
    return extra
}

console.log(countHours(year, holidays))


