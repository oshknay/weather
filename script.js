const api = {
endpoint: "https://api.openweathermap.org/data/2.5/",
key:'e4dbcd092119965fda93f1bb6cb82ce4'
}

const input = document.querySelector('#input');
input.addEventListener("keypress", enter);

 function enter(e) {
  if (e.keyCode === 13) {
    getInfo(input.value); 
      }
  }

 async function getInfo (data) {
const res =await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
const result =await res.json();
console.log(result);

 displayResult(result);
  }

 function displayResult (result) {
   let city = document.querySelector('#city');
   city.textContent = `${result.name},  ${result.sys.country}`;

getOurDate();

let temperature = document.querySelector('#temperature');
 temperature.innerHTML = `${Math.round(result.main.temp)} <span>°</span>`;
 temperature.style.display='block';

 let feelsLike = document.querySelector('#feelslike');
 feelsLike.innerHTML=` Feels like  ${Math.round(result.main.feels_like)} <span>°</span>`;
 feelsLike.style.display='block';

let conditions = document.querySelector('#conditions');
 conditions.textContent =`${result.weather[0].description}`;
 conditions.style.display='block';

 let variation = document.querySelector('#variation');
 variation.style.display='block';
 variation.innerHTML= ` Min: ${Math.round(result.main.temp_min)} <span>°</span>, Max:  ${Math.round(result.main.temp_max)} <span>°</span>`;
}
 
 function getOurDate() {
 const myDate = new Date;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

 let day = days[myDate.getDay()];
 let todaysDate = myDate.getDate();
  let month = months[myDate.getMonth()];
  let year = myDate.getFullYear();


let showDate=document.querySelector('#data');
showDate.style.display='block';
showDate.textContent = `${day},  `+ `${todaysDate} ` +`${month} `+ `${year} `; 
 
}
