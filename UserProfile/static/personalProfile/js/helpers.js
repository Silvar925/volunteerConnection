const mountDictionary = {
    "01" : "Январь",
    "02" : "Февраль",
    "03" : "Март",
    "04" : "Апрель",
    "05" : "Май",
    "06" : "Июнь",
    "07" : "Июль",
    "08" : "Август",
    "09" : "Сентябрь",
    "10" : "Октябрь",
    "11" : "Ноябрь",
    "12" : "Декабрь"
}

export function getUserID(input) {
    let arrayInput = input.split("#")
    return `${arrayInput[1]}`
}

export function getAgeUser(input) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let inputArray = input.split("-")
    let year = Number(inputArray[0])
    let month = Number(inputArray[1])

    let age = currentYear - year

    if (currentMonth - month) {
        age--
    }

    return age
}