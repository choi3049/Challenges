const body = document.querySelector("body");
const colors = ["blue", "tomato", "green"];

function superEventHandler() {
  var width = window.innerWidth;
  let color = body.style.backgroundColor;
  color = colors[2];
  if (width > 1000) {
    color = colors[0];
  } else if (width < 600) {
    color = colors[1];
  }

  body.style.backgroundColor = color;
}

window.addEventListener("resize", superEventHandler);
