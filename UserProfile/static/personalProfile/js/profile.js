import {Users} from "./dataBase.js";
import {getUserID, getAgeUser} from "./helpers.js";


const btnEditingProfile = document.getElementById("btnEditingProfile")
const containerUserInfo = document.getElementById("profileInfo_box")
const containerEditUserInfo = document.getElementById("containerEditUserInfo")

btnEditingProfile.addEventListener('click', function () {
    if (containerUserInfo.style.display !== "none") {
        containerUserInfo.style.display = "flex"
        containerEditUserInfo.style.display = "none"
    } else {
        containerUserInfo.style.display = "none"
        containerEditUserInfo.style.display = "flex"
    }
})









function loadUserProfile(input) {
    const idUser = document.getElementById('idUser').textContent
    const education_p = document.getElementById('education_p')
    const specialization_p = document.getElementById('specialization_p')
    const userAge = document.getElementById("userAge")
    const aboutMe = document.getElementById("aboutMe")

    for (let key in input) {
        if (input[key].id == getUserID(idUser)) {
            console.log(input[key])
            specialization_p.textContent = input[key].specialization
            education_p.textContent = input[key].education
            userAge.textContent = `${getAgeUser(input[key].dateOfBirth)} год`
            aboutMe.textContent = input[key].about_me
        }
    }
}
loadUserProfile(Users)