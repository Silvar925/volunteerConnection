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

export function getAllTagsA(id) {
    let arrayA = []
    let myDiv = document.getElementById(id);
    let linksInsideDiv = myDiv.getElementsByTagName("a");

    for (let i = 0; i < linksInsideDiv.length; i++) {
        arrayA.push(linksInsideDiv[i])
    }

    return arrayA
}

export function extractNumbersFromString(inputString) {
    const matches = inputString.match(/\d+/);

    if (matches) {
        return parseInt(matches[0], 10);
    } else {
        return null;
    }
}

export function clearDiv(div) {
    let divElement = document.getElementById(div); // Replace 'yourDivId' with the actual ID of your div
    if (divElement) {
        divElement.innerHTML = ''; // Set the inner HTML content of the div to an empty string
    } else {
        console.error('Div not found!'); // Log an error if the div with the specified ID is not found
    }
}

export function getUserByID(usersList, id) {
    for (let key in usersList) {
        if (usersList[key].id == id) {
            return `${usersList[key].name} ${usersList[key].surname}`
        }
    }
}

export function formatDate(input) {
    let inputArray = input.split("-")

    return `${inputArray[2]} ${mountDictionary[inputArray[1]]} ${inputArray[0]}`
}