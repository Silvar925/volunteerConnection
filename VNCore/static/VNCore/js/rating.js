import { news, rating } from "./dataBase.js"
import { getAllTagsA, extractNumbersFromString, clearDiv } from "./helpers.js"

const thbody = document.getElementById('thbody')

function addNewRowInTable(id, fullname, university, countEvents, alpha, omega, point) {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="number"><img src="/images/top_1.svg" alt="#"></td>
    <td class="fullname">${fullname}</td>
    <td class="university">${university}</td>
    <td class="events">${countEvents}</td>
    <td class="alpha">${alpha}</td>
    <td class="omega">${omega}</td>
    <td class="point">${point}</td>
    `

    thbody.appendChild(tr)
}

function allRowsInTable(rating) {
    for (let key in rating) {
        console.log(rating[key])
        addNewRowInTable(rating[key].id, rating[key].fullname, rating[key].university, rating[key].countEvents, rating[key].alpha, rating[key].omega, rating[key].points)
    }
}

allRowsInTable(rating)