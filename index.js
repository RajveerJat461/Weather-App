const apiKey='53aa025fbdca0d9626b939914a0184d5'
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox= document.querySelector('.search input')
const searchbtn= document.querySelector('.search button')
   const  waethericon= document.querySelector('.Weather-icon')
async function checkWeather(city){
      const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
      if(response.status==404){
        document.querySelector('.error').style.display='block';
                document.querySelector('.weather').style.display='none';
      }
      else{

     
        let data = await response.json();
    console.log(data);
   document.querySelector('.city-name').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°c";
     document.querySelector('.humidity').innerHTML=data.main.humidity +`%`;
       document.querySelector('.wind').innerHTML=data.wind.speed +"km/h";
   if(data.weather[0].main== 'Clouds'){
waethericon.src='clouds (2).png'
   
   }  
   else if(data.weather[0].main=='Clear'){
waethericon.src='sun.png'
   }
   else if(data.weather[0].main=='Rain'){
waethericon.src='heavy-rain.png'
   }
   else if(data.weather[0].main=='Mist'){
waethericon.src='fog.png'
   }
   document.querySelector('.weather').style.display="block";
          document.querySelector('.error').style.display='none';
  
  
   
}
}
 searchbtn.addEventListener('click',(eve)=>{
checkWeather(searchbox.value);
 })


window.addEventListener("load", () => {
  const splash = document.querySelector(".splash");
  setTimeout(() => {
    splash.style.display = "none";
  }, 2000); 
});



