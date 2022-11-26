// ==UserScript==
// @name         Realtime Training Countdown
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Actively counts down the time until training is complete.
// @author       PJ Pollina (aeugchad)
// @match        https://www.neopets.com/pirates/academy.phtml?type=status
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Gets and IDs the time string
let timer = document.querySelector(".content").getElementsByTagName("tbody")[0].getElementsByTagName("td")[2].getElementsByTagName("b")[0];
timer.id = "timer";

// Sets the finish time
let finishTime;
{
  let text = timer.textContent;

  if(!text.includes("minutes")) {
    text = "0 minutes, " + text;
  }
  if(!text.includes("hrs")) {
    text = "0 hrs, " + text;
  }
  let timecode = timer.textContent.replace(/\b(\d)\b/g, "0$1").replace(/ (hrs|minutes), /gi, ":").replace(" seconds", "");
  finishTime = new Date(Date.now() + Date.parse("01 January 1970 " + timecode + " GMT"));
}

// Updates the timer in realtime
setInterval(() => {
  let distance = finishTime - new Date().getTime();

  let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = hours + " hrs, " + minutes + " minutes, " + seconds + " seconds";
});
