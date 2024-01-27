async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка получения данных с сервера:', error);
        return null;
    }
}

export const Users = await fetchData('/api/users/')