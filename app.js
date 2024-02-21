const button = document.querySelector(".button");
const partsOfTheDay = document.querySelector(".text");
const degree = document.querySelector(".data");
const weather = document.querySelector(".search");
const region = document.querySelector(".first-side");
const date = document.querySelector(".second-side");
const icon = document.querySelector(".icon");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const image = document.querySelector(".image");
const windImage = document.querySelector(".windImage");
const humidityImage = document.querySelector(".humidityImage");


const currentDate = new Date();
let saat = currentDate.getHours();

const morningStart = 6; 
const afternoonStart = 12; 
const eveningStart = 18; 
const nightStart = 24; 

// Parts of Day 

if( saat >= morningStart && saat<afternoonStart){
    partsOfTheDay.textContent = "Good morning";
} else if (saat>= afternoonStart && saat<eveningStart){
    partsOfTheDay.textContent = "Good afternoon";
}else if(saat>= eveningStart && saat<nightStart){
    partsOfTheDay.textContent = "Good evening";
}else{
    partsOfTheDay.textContent = "Good night";
}


function aliveOclock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    const oclock = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".time").textContent = oclock;
}

 setInterval(aliveOclock, 1000);


// Button clicked.


button.addEventListener("click", async () => {


   const input = document.querySelector(".input").value;
   const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=1ae7212d88d446fcb91131107241002&q=${input}&aqi=no`);
 
   if(data.ok){

    const api = await data.json();
    degree.innerHTML = `${api.current.temp_c}&deg;`;
    weather.textContent = api.current.condition.text;
    region.textContent = `${api.location.name} \\ ${api.location.country}`;

    const vaxt = new Date();
    const tarix = vaxt.toLocaleDateString();

    date.textContent = tarix;

   image.src = api.current.condition.icon;

   image.style.display = 'block';

   windImage.style.display = "block";

   humidityImage.style.display = "block";

   wind.textContent = `${api.current.wind_mph} mph`;

   humidity.textContent = `${api.current.humidity} %`


   }else{

    weather.textContent = "City is not found !";

   }

   
    
});
