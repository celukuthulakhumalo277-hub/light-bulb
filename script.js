const bulb = document.getElementById("bulb");
const onButton = document.getElementById("on");
const offButton = document.getElementById("off");

// Turn ON
onButton.addEventListener("click", () => {
  bulb.src = "images/bulb-on.jpg";
});

// Turn OFF
offButton.addEventListener("click", () => {
  bulb.src = "images/bulb-off.jpg";
});
