const clock = document.querySelector("h2#clock");

function getClock() {
  let date = new Date().getTime();
  let dday = new Date("December 25,2021,0:00:00").getTime();
  let gap = dday - date;
  const days = String(Math.floor(gap / (1000 * 60 * 60 * 24)));
  const hours = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  clock.innerText = `${days}d${hours}h${minutes}m${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
