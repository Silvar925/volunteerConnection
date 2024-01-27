const registrationBox = document.getElementById('registration_box')
const authorizationBox = document.getElementById('authorization_box')

const btnRegistration = document.getElementById('btnRegistration')
const btnAuthorization = document.getElementById('btnAuthorization')

btnRegistration.addEventListener('click', function() {
    authorizationBox.classList.add("hidden")
    registrationBox.classList.remove("hidden")
})

btnAuthorization.addEventListener('click', function() {
    authorizationBox.classList.remove("hidden")
    registrationBox.classList.add("hidden")
})
