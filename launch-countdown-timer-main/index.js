


let countDownDate = new Date("April 15, 2021 16:37:52").getTime();

// Run myFunc every second
let myFunc = setInterval(() => {

    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerText = days + "d "
    document.getElementById("hours").innerText = hours + "h "
    document.getElementById("minutes").innerText = minutes + "m "
    document.getElementById("seconds").innerText = seconds + "s "})



// let changeFunc = setInterval((myFunc) => {
//     // document.querySelectorAll('figure.flip-object-bottom').style.color = 'red'
// }, myFunc)

//     Display the message when countdown is over
//     if (timeLeft < 0) {
//         clearInterval(myFunc);
//         document.getElementById("days").innerHTML = ""
//         document.getElementById("hours").innerHTML = ""
//         document.getElementById("minutes").innerHTML = ""
//         document.getElementById("secs").innerHTML = ""
//         document.getElementById("end").innerHTML = "TIME UP!!";
//     }
// }, 1000);



//
// let secondsElement = document.getElementById('seconds');
// const observer = new MutationObserver(mutations => {
//     console.log(mutations)
// });
//
// observer.observe(secondsElement, {
//     characterData: true
// })


// let timeConversion =  (days) => {
//     let hours = (days * 24)
//     let minutes = (hours * 60)
//     let seconds = (minutes  * 60)
//
//         // console.log(seconds)
// }
//
//
//
// timeConversion(1)