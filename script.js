const instruction = document.querySelector("#instruction");
const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
  instruction.style.display = "none";
  container.style.display = "flex";

  const keys = document.querySelectorAll(".key span");
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  keys[0].innerText = keyCodes["e.key"];
  keys[1].innerText = keyCodes["e.keyCode"];
  keys[2].innerText = keyCodes["e.code"];
});
