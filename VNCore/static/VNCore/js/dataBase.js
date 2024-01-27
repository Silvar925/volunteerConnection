async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка получения данных с сервера: ${response.status}`);
    }
    return response.json();
}

export let news = await fetchData('api/listNews')
export let events = await fetchData('api/listEvents')
export let speaker = await fetchData('api/listSpeakers')
export let organizer = await fetchData('api/listOrganizers')
export let users = await fetchData('/api/users/')