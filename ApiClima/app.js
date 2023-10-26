const Apikey='729fd13492d6fd23ad1d7c36870371d8';
const UrlBase='https://api.openweathermap.org/data/2.5/weather';

const btnCity=document.querySelector('#btncity');
const inputCity=document.querySelector('#city');


const fetchapi = url => fetch(url).then(response=>response.json());

async function getClima(lat, lon, apikey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchapi(url)
    const temperatura=(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML=temperatura+'°C -'+clima.name;
    pintaFondo(temperatura);
    pintaEmoji(temperatura);
}

async function getClimabyCity(city,apikey){
    const url = `${UrlBase}?q=${city}&appid=${apikey}`;
    const clima= await fetchapi(url);
    const temperatura=(clima.main.temp - 273.15).toFixed(2);
    document.querySelector('h2').innerHTML=temperatura+'°C -'+clima.name;
    pintaFondo(temperatura);
    pintaEmoji(temperatura);
}
function pintaEmoji(temp){
    const emo= document.querySelector('#emoji');
    if(temp<13){
        emo.innerHTML='🥶🤠';
    }else if(temp<22){
        emo.innerHTML='🍻🍻😎';
    }else{
        emo.innerHTML='☀️☀️🥵';
    }

}


// Obtener geolocalizacion 
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, Apikey);
  });

function buttonAction(){
    const city= inputCity.value;
    if(city){
        getClimabyCity(city, Apikey);
    }
}
btnCity.addEventListener('click', buttonAction);

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp<13){
        fondo.style.background='aqua';
    } else if(temp<22){
        fondo.style.background= 'orange';
    }else{
        fondo.style.background= 'red';
    }
}
