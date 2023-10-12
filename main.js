let APIKey = 'xwAiIulrzhKr9pkfsFC56OV02OsDJP5P';
let weatherLocation;
let weatherURL;
let temp;
let wind;
let desc;
let dogURL = 'https://dog.ceo/api/breeds/image/random'
let dogImage = '';
let imageDog = document.querySelector('img');
let button = document.querySelector('#dogButton');
let tempText = document.querySelector('#temp');
let windText = document.querySelector('#wind');
let descText = document.querySelector('#desc');
let weatherData;
let codes = {
    '0': "Unknown",
    "1000": "Clear, Sunny",
    "1100": "Mostly Clear",
    "1101": "Partly Cloudy",
    "1102": "Mostly Cloudy",
    "1001": "Cloudy",
    "2000": "Fog",
    "2100": "Light Fog",
    "4000": "Drizzle",
    "4001": "Rain",
    "4200": "Light Rain",
    "4201": "Heavy Rain",
    "5000": "Snow",
    "5001": "Flurries",
    "5100": "Light Snow",
    "5101": "Heavy Snow",
    "6000": "Freezing Drizzle",
    "6001": "Freezing Rain",
    "6200": "Light Freezing Rain",
    "6201": "Heavy Freezing Rain",
    "7000": "Ice Pellets",
    "7101": "Heavy Ice Pellets",
    "7102": "Light Ice Pellets",
    "8000": "Thunderstorm"
  }




button.addEventListener('click', ()=>{
    fetch(dogURL)
    .then(res => res.json())
    .then(data => {
    dogImage = data.message;
    imageDog.src = dogImage
    
    }) 
})

document.querySelector('#button-addon2').addEventListener('click', ()=>{
    weatherLocation = document.querySelector('#weather').value
    tempText.innerText = '';
    windText.innerText = '';
    descText.innerText = '';
    weatherURL = `https://api.tomorrow.io/v4/weather/forecast?location=${weatherLocation}&apikey=${APIKey}`;
    fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
        weatherData = data.timelines.minutely[0].values;
        temp = weatherData.temperature;
        wind = weatherData.windGust;
        desc = weatherData.weatherCode;
        let fahrehheit = temp * 1.8 + 32;
        tempText.innerText = fahrehheit.toFixed(1) + '°F';
        windText.innerText =  wind + ' MPH';
        descText.innerText = codes[desc];
    })
})

let OPENAI_API_KEY = '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';

document.querySelector('#button-addon3').addEventListener('click', ()=>{
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then(res => res.json())
        .then(data => {
            document.querySelector('#random').innerText = data.text
        })
})
let word;
document.querySelector('#defbutton').addEventListener('click', ()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#meme').src = data.data.memes[number].url
    })
})
document.querySelector('#third').addEventListener('click', ()=>{
    word = document.querySelector('#wordToUse').value;
    let defineURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(defineURL)
    .then(res => res.json())
    .then(data =>{
        document.querySelector('#wordtext').innerText = data[0].word
        document.querySelector('#english').innerText = data[0].meanings[0].partOfSpeech
        document.querySelector('#definitionText').innerText = data[0].meanings[0].definitions[0].definition
    })
})

