import {Users, Events, Rating} from "./dataBase.js";
import {getUserID, getAgeUser} from "./helpers.js";

const btnEditingProfile = document.getElementById("btnEditingProfile")
const containerUserInfo = document.getElementById("profileInfo_box")
const containerEditUserInfo = document.getElementById("containerEditUserInfo")
let switcher = true


btnEditingProfile.addEventListener('click', function () {
    if (switcher) {
        containerUserInfo.classList.add("hidden")
        containerEditUserInfo.classList.remove("hidden")
        switcher = false
    } else {
        containerEditUserInfo.classList.add("hidden")
        containerUserInfo.classList.remove("hidden")
        switcher = true
    }
})


const idUser = document.getElementById('idUser').textContent

function loadUserProfile(input) {
    const education_p = document.getElementById('education_p')
    const specialization_p = document.getElementById('specialization_p')
    const userAge = document.getElementById("userAge")
    const aboutMe = document.getElementById("aboutMe")
    const photoAvatar = document.getElementById("photoAvatar")

    for (let key in input) {
        if (input[key].id == getUserID(idUser)) {
            specialization_p.textContent = input[key].specialization
            education_p.textContent = input[key].education
            userAge.textContent = `${getAgeUser(input[key].dateOfBirth)} год`
            aboutMe.textContent = input[key].about_me
            photoAvatar.src = input[key].profile_pic
        }
    }
}

loadUserProfile(Users);

const listCardTookPart = document.getElementById("listCardTookPart")
function createCardTookPart(name, date, image) {
    let div = document.createElement("div")
    div.classList.add("container_profile_info_participate_card")
    div.innerHTML = `
        <img src=${image} alt="#" id="iamgeTookPart">
        
        <div class="container_profile_info_participate_card_info">
            <p>${name}</p>
        
            <div class="tags">
                <a href="#">${date}</a>
                <a href="#">г.Черкесск</a>
            </div>
        </div>
    `
    listCardTookPart.appendChild(div)
}

function loadTookPart(Users, EventsInput) {
    let idEventTookPart;

    for (let key in Users) {
        if (Users[key].id == getUserID(idUser)) {
            idEventTookPart = Users[key].participatingEvents1.split(",").map(Number);
        }
    }

    for (let key in EventsInput) {
        if (idEventTookPart.includes(EventsInput[key].id)) {
            createCardTookPart(EventsInput[key].name, EventsInput[key].date, EventsInput[key].photo2)
        }
    }
}

loadTookPart(Users, Events)

const scores = document.getElementById("scores")
const rang = document.getElementById("rang")

function loadUserCard(rating) {
    for (let key in rating) {
        // Найти еще 3 иконочки для отображение подочности
        if (rating[key].User == getUserID(idUser)) {
            scores.textContent = rating[key].points
            rang.textContent = rating[key].nameRating
        }
    }
}

loadUserCard(Rating)

const listCardAccrualPoints = document.getElementById("listCardAccrualPoints")

function createAccrualPointsCard(name, points, date) {
    const div = document.createElement("div")
    div.classList.add("container_profile_info_accrualPoints_card")

    div.innerHTML = `
        <div class="container_profile_info_accrualPoints_card_countScores">
            <h2>+${points}</h2>
            <p>${date}</p>
        </div>
        
        <div class="container_profile_info_accrualPoints_card_info">
            <p>${name}</p>
        </div>
    `

    listCardAccrualPoints.appendChild(div)
}

function loadAccrualPoints(rating) {
    let idEventTookPart;

    for (let key in Users) {
        if (Users[key].id == getUserID(idUser)) {
            idEventTookPart = Users[key].participatingEvents1.split(",").map(Number);
        }
    }

    for (let key in rating) {
        if (idEventTookPart.includes(rating[key].id)) {
            createAccrualPointsCard(rating[key].text, rating[key].points, rating[key].date)
        }
    }
}

loadAccrualPoints(Events)