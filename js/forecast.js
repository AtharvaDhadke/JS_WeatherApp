const key = "35bb2e7347793403434d77d0e5db0eda";

const getForecast = async city => {
    const base = "https://api.openweathermap.org/data/2.5/forecast";
    const query = `?q=${city}&units=metric&appid=${key}`;

    const url = base + query;
    console.log(url);

    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        return data;

    } else {
        await Promise.reject(new Error('Status Code' + res.status));
    }
}

getForecast('mumbai')
    .then(data => console.log(data))
    .catch(err => console.warn(err));
