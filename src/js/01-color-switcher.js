const refs = {
  startBtn: document.querySelector("button[data-start]"),
  stopBtn: document.querySelector("button[data-stop]")
}
refs.stopBtn.setAttribute("disabled", "");
let changeColor = null;

refs.startBtn.addEventListener("click", startBtnClickHandler);
refs.stopBtn.addEventListener("click", stopBtnClickHandler);


function startBtnClickHandler (evt) {
  refs.stopBtn.removeAttribute("disabled")
  evt.currentTarget.setAttribute("disabled", "")
  changeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000);

}

function stopBtnClickHandler (evt) {
  refs.startBtn.removeAttribute("disabled")
  evt.currentTarget.setAttribute("disabled", "")
  clearInterval(changeColor)
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
