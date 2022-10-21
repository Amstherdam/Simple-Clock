
let clock = document.querySelector('#saat');

document.body.style.transition = 'all 0.8s'

setInterval(() => {
    let watch = new Date();
    let hours = watch.getHours();
    let mins = watch.getMinutes();
    let secs = watch.getSeconds();

    hours = hours < 10 ? '0' + hours : hours
    mins = mins < 10 ? '0' + mins : mins 
    secs = secs < 10 ? '0' + secs :secs 
    
    clock.innerHTML = `${hours} : ${mins} : ${secs}`
    /* clock.style.color = `rgb(${hours*10}, ${mins*8}, ${secs*8})` */
}) 

let day = document.querySelector('#text3');
let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth()+1);
let yyyy = today.getFullYear();

today = dd + "/" + mm + '/' + yyyy;

setTimeout(() => {
    day.innerHTML = today
}, 3000 );

let getName = prompt("How can i call you?");
let selectName = document.querySelector('#myName');

console.log(typeof getName);
selectName.innerHTML = getName;


let fly = document.querySelector('#fly');
fly.style.color = 'lightskyblue';
fly.style.margin = '50px 0px 0px 0px';


