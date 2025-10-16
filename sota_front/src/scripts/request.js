const request = (url, setRequests) => {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Сетевая ошибка');
        }
        return response.json();
    })
    .then(data => {
        setRequests(data);
    })
}

export default request;