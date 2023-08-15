import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const currentDate = new Date();
let formattedTime = null;
let datesDifference = 0;
const refs = {
  startBtn: document.querySelector("button[data-start]"),
  inputField: document.querySelector("#datetime-picker"),
  daysCounter: document.querySelector("span[data-days]"),
  hoursCounter: document.querySelector("span[data-hours]"),
  minutesCounter: document.querySelector("span[data-minutes]"),
  secondsCounter: document.querySelector("span[data-seconds]"),
}

refs.startBtn.setAttribute("disabled", "")

refs.startBtn.addEventListener("click", startBtnClickHandler)

function startBtnClickHandler () {
  refs.inputField.setAttribute("disabled", "");
  refs.startBtn.setAttribute("disabled", "");


  const timerId = setInterval(() => {
    datesDifference -= 1000;

    if (datesDifference <= 999 ) {
      clearInterval(timerId)
    }

    const formattedTime = convertMs(datesDifference);

    for (const key in formattedTime) {
      formattedTime[key] = addLeadingZero(formattedTime[key])
    }

    const { days, hours, minutes, seconds} = formattedTime;


    refs.daysCounter.textContent = days;
    refs.hoursCounter.textContent = hours;
    refs.minutesCounter.textContent = minutes;
    refs.secondsCounter.textContent = seconds;

  }, 1000)
  
}


flatpickr(refs.inputField, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    datesDifference = selectedDates[0] - currentDate;

    if(datesDifference < 0) {
    Notiflix.Notify.warning("Please choose a date in the future");
      return
    }

    refs.startBtn.removeAttribute("disabled")
}})

function addLeadingZero(value) {
  return String(value).padStart(2, "0")
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}