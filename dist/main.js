(()=>{"use strict";!function(){const e=document.querySelector(".header"),t=document.createElement("h1");t.classList.add("header-text"),t.textContent="Weather App",e.appendChild(t)}(),function(){const e=document.querySelector(".footer"),t=document.createElement("h1");t.classList.add("footer-text"),t.textContent="Made by Edward",e.appendChild(t)}(),async function(){const e=await fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4582f42658211134cda9749fe21a3065",{mode:"cors"}),t=await e.json();console.log(t)}()})();