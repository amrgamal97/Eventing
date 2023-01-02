let countDown = new Date("31 Dec, 2023 23:59:59").getTime();
console.log(countDown);

let counter = setInterval(() => {

    let dateNow = new Date().getTime();
    let diff = countDown - dateNow;
    let weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(diff % (1000 * 60 * 60) / 1000 / 60);
    let seconds = Math.floor(diff % (1000 * 60) / 1000);
    // console.log(diff % (1000 * 60) / 1000);
    document.querySelector(".weeks").innerHTML = weeks;
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);