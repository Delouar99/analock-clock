const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');




setInterval(() => {

let time = new Date();
let current_sec = time.getSeconds();
let current_min  = time.getMinutes();
let current_hour = time.getHours();

sec.style.transform = `rotate(${khatkuta(60, current_sec)}deg)`;
min.style.transform = `rotate(${khatkuta(60, current_min)}deg)`;
hour.style.transform = `rotate(${khatkuta(12, current_hour)}deg)`;


}, 1000);


