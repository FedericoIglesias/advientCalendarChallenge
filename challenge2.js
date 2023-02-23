// Nobody wants to  do extra hours at work
function countHours(year, holidays) {
    let extra = 0
    for (let i = 0; i < holidays.length; i++) {
        let aux = holidays[i].split('/')
        let day = Number(aux[1])
        let month = Number(aux[0]) - 1
        let date = new Date(year, month, day,)
        date.getDay() == 0 || date.getDay() == 6 ? extra = extra : extra += 2
    }
    return extra
}