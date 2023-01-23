const URL = "https://icanhazdadjoke.com";
const jokes = document.getElementById('jokes')
const btn = document.getElementById('btn');

btn.addEventListener('click', () => getData(URL, jokes));

const getData = async(url, node) => {
    let dataResponse = "";
    
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    try {
        const response = await fetch(url, config);
        if(response.status !== 200)
            throw new Error();
        
            const data = await response.json();
            dataResponse = data.joke;
    } catch (error) {
        dataResponse = 'Some error occured...'
    }

    node.innerText = dataResponse;
}

getData(URL, jokes);