const body = document.body;

const Big = "big";
const Midle = "midle";
const Small = "small";

function handleWindowResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(Big);
    body.classList.remove(Midle);
  } else if (width < 1100 && width > 700) {
    body.classList.add(Midle);
    body.classList.remove(Big, Small);
  } else {
    body.classList.remove(Midle);
    body.classList.add(Small);
  }
}

window.addEventListener("resize", handleWindowResize);
