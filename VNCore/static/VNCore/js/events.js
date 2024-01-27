import { events, speaker, organizer, users } from "./dataBase.js"
import { getAllTagsA, extractNumbersFromString, clearDiv, getUserByID } from "./helpers.js"

document.getElementById('countResultEvent').textContent = events.length + " " + "результатов"

const containerEvents = document.getElementById("section_events_grid")
const sectionEventsInfo = document.getElementById("section_events_info")

const btnBack = document.getElementById("btnBack")
btnBack.addEventListener('click', function () {
    clearDiv('container_eventPage_info_volunteersGrid');
    containerEvents.classList.remove("hidden")
    sectionEventsInfo.classList.add("hidden")
})

function addNewEventCard(id, name, category, date, numberParticipants, photo) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let idEvent = 'btnCardEvent' + id

    divCard.innerHTML = `
    <img src="${photo}" alt="#">

    <div class="card_info">
        <a href="#" id="${idEvent}">${name}</a>
    </div>

    <div class="tags">
        <p>${date}</p>
        <p>${category}</p>
        <p>${numberParticipants}</p>
    </div>`

    container_events_cardList.appendChild(divCard)
}

function addAllEvents(events) {
    for (let i = 0; i < events.length; i++) {
        const { id, name, category, date, numberParticipants, photo } = events[i];
        if (name && category && date && numberParticipants) {
            addNewEventCard(id, name, category, date, numberParticipants, photo);
        }
    }
}

addAllEvents(events)

function addNewSpeakerOrOgranizer(name, post, or) {
    const gridOrganizers = document.getElementById('gridOrganizers')
    const divSpeaker = document.createElement('div')

    const speakerGrid = document.getElementById('container_eventPage_info_volunteersGrid')
    divSpeaker.classList.add('container_eventPage_info_volunteersGrid_card')

    divSpeaker.innerHTML = `
    <img src="static/VNCore/images/man_2.png" alt="#">

    <div class="container_eventPage_info_volunteersGrid_card_info">
        <h3>${name}</h3>
        <p>${post}</p>
    </div>`

    if (or == 's') {
        speakerGrid.appendChild(divSpeaker)
    } else if (or == 'o') {
        gridOrganizers.appendChild(divSpeaker)
    }

}

let temp = getAllTagsA('container_events_cardList')

function addEvent(pressedEvent, events) {
    let idPressedEvent = extractNumbersFromString(pressedEvent.id)
    const textEvent = document.getElementById('textEvent')
    const numberParticipants = document.getElementById('numberParticipants')
    const programEvent = document.getElementById('programEvent')
    const dateСarryingEvent = document.getElementById('dateСarryingEvent');
    const addressCarryingEvent = document.getElementById('addressCarryingEvent')
    const photoEvent = document.getElementById("photoEvent")

    let speakersId = []
    let organizersId = []

    for (let key in events) {
        if (idPressedEvent == events[key].id) {

            photoEvent.src = events[key].photo2

            speakersId = events[key].speakers
            organizersId = events[key].organizers

            textEvent.textContent = events[key].text
            dateСarryingEvent.textContent = events[key].date
            numberParticipants.textContent = "Количество участников: " + events[key].numberParticipants + " из " + 100

            programEvent.textContent = events[key].programEvent
            addressCarryingEvent.textContent = events[key].address
        }
    }

    for (let key in speaker) {
        for (let key2 in speakersId) {
            if (speaker[key].id == speakersId[key2]) {
                addNewSpeakerOrOgranizer(getUserByID(users, speaker[key].User), speaker[key].post, 's')
            }
        }
    }

    for (let key in organizer) {
        for (let key2 in organizersId) {
            if (organizer[key].id == organizersId[key2]) {
                addNewSpeakerOrOgranizer(getUserByID(users, organizer[key].User), organizer[key].post, 'o')
            }
        }
    }
}

function pressedNameEvent(temp) {
    const titleNameEvent = document.getElementById('titleNameEvent')

    for (let key in temp) {
        temp[key].addEventListener('click', function () {
            containerEvents.classList.add('hidden')
            sectionEventsInfo.classList.remove('hidden')

            titleNameEvent.textContent = temp[key].textContent

            addEvent(temp[key], events)

        })
    }
}

pressedNameEvent(temp)