import { Notify } from 'notiflix/build/notiflix-notify-aio';



const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  let amount = Number(evt.currentTarget.elements.amount.value);

  for (i = 1; i <= amount; i += 1){
      createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
    delay += step;
    evt.currentTarget.reset();
  }
}


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
       if (shouldResolve) {
    res({ position, delay })
  } else {
    rej({ position, delay })
  }
    }, delay)
  })
}

