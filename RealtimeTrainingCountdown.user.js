// ==UserScript==
// @name         Realtime Training Countdown
// @namespace    https://github.com/pjpollina/neopets-userscripts
// @version      0.2.0
// @description  Actively counts down the time until training is complete.
// @author       PJ Pollina (aeugchad)
// @match        http*://www.neopets.com/pirates/academy.phtml?type=status
// @match        http*://www.neopets.com/island/training.phtml?type=status
// @icon         https://www.neopets.com//favicon.ico
// @grant        none
// ==/UserScript==

// Gets all timers on the page
let timers = Array.from(
  document.querySelector(".content")
  .getElementsByTagName("tbody")[0]
  .getElementsByTagName("b")
).filter(e => e.textContent.includes("hrs"));

// Sets the finish times
let finishTimes = [];
for(const timer of timers) {
  let timecode = timer.textContent.replace(/\b(\d)\b/g, "0$1").replace(/ (hrs|minutes), /gi, ":").replace(" seconds", "");
  finishTimes.push(new Date(Date.now() + Date.parse("01 January 1970 " + timecode + " GMT")));
}

// Updates the timers in realtime
setInterval(() => {
  for(let i = 0; i < timers.length; i++) {
    let distance = finishTimes[i] - new Date().getTime();

    let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timers[i].innerHTML = hours + " hrs, " + minutes + " minutes, " + seconds + " seconds";
  }
});
