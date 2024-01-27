import { news } from "./dataBase.js"
import { getAllTagsA, extractNumbersFromString, clearDiv, formatDate } from "./helpers.js"

const bannerMain = document.getElementById('banner')
const sectionNews = document.getElementById('sectionNews')
const detailedInformationNews = document.getElementById('detailedInformationNews')
const btnBackNews = document.getElementById('btnBackNews')

btnBackNews.addEventListener('click', function() {
    bannerMain.classList.remove("hidden")
    sectionNews.classList.remove("hidden")
    detailedInformationNews.classList.add('hidden')
})

const container_events_newsList = document.getElementById('container_events_newsList')

function addNewCardNews(id, name, category, date, photo) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let idEvent = 'btnCardNews' + id

    divCard.innerHTML = `                    
    <img src="${photo}" alt="#">
    <div class="card_info">
        <a href="#" id="${idEvent}">${name}</a>
    </div>
    <div class="tags">
        <p>${date}</p>
        <p>${category}</p>
    </div>
`;


    container_events_newsList.appendChild(divCard)
}

function addAllNews(news) {
    for (let key in news) {
        // console.log(news[key].photo)
        addNewCardNews(news[key].id, news[key].name, news[key].category, news[key].date, news[key].photo)
    }
}

addAllNews(news)


function addNews(pressedNews, news) {
    let idPressedEvent = extractNumbersFromString(pressedNews.id)
    const textNews = document.getElementById('textNews')
    const dateNews = document.getElementById('dateNews')
    const idArticleNews = document.getElementById("idArticleNews")

    for (let key in news) {
        if (idPressedEvent == news[key].id) {
            textNews.textContent = news[key].text
            dateNews.textContent = formatDate(news[key].date)
            idArticleNews.src = news[key].photo2
        }
    }
}


let temp = getAllTagsA('container_events_newsList')

function pressedNameNews(temp) {
    const titleNews = document.getElementById('titleNews')

    for (let key in temp) {
        temp[key].addEventListener('click', function () {
            titleNews.textContent = temp[key].textContent

            bannerMain.classList.add("hidden")
            sectionNews.classList.add("hidden")
            detailedInformationNews.classList.remove('hidden')

            addNews(temp[key], news)
        })
    }
}

pressedNameNews(temp)

// Топ 5 - рейтинг
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