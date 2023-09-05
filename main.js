// from https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function changeBackground(event) {
  //   console.log(event.clientX);
  document.getElementById("hero").style.backgroundImage =
    "linear-gradient(" +
    scale(event.clientX, 0, window.innerWidth, 205, 155) +
    "deg, #040f22 38%,#081d41 78%, #0646a5 99.98%)";
  // "deg, #091e42 78%, #0747a6 99.98%)";
}
