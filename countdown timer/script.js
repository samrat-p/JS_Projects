const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const mintuesEl = document.getElementById('mintues');
const secondsEl = document.getElementById('seconds');

const birthday = "18 Dec 2022"; // target date
function bday(){
    const currentdate= new Date();
    const birthdaydate=new Date(birthday);
    const timeleft=(birthdaydate - currentdate)/ 1000;
    const days= Math.floor(timeleft/3600/24);
    const hours= Math.floor(timeleft/3600)%24;
    const mintues= Math.floor(timeleft/60)%60;
    const seconds =Math.floor(timeleft)%60
    daysEl.innerHTML= doubledigit(days);
    hoursEl.innerHTML= doubledigit(hours);
    mintuesEl.innerHTML= doubledigit(mintues);
    secondsEl.innerHTML= doubledigit(seconds);
}
function doubledigit(time){
    return time < 10 ? (`0${time}`) : time; // if time less than 10 then return 0 with time or otherwise just the time
}
bday();
setInterval(bday,1000);