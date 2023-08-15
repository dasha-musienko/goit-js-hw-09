import Notiflix from 'notiflix';

const refs = {
  delayInput: document.querySelector("input[name='delay']"),
  stepInput: document.querySelector("input[name='step']"),
  amountInput: document.querySelector("input[name='amount']"),
  submitBtn: document.querySelector("button"),
}

refs.submitBtn.addEventListener('click', submitBtnClickHandler)

function submitBtnClickHandler(evt) {
  evt.preventDefault();
  let delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);

  for (let position = 1; position <= amount; position += 1) {


    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
    delay += step
} }


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}
