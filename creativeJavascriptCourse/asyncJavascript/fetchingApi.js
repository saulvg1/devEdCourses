// https://api.adviceslip.com/advice

const button = document.querySelector('button');
const header = document.querySelector('h1');

button.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((result) => result.json())
    .then((data) => {
      //   console.log(data.slip.advice);
      header.innerText = data.slip.advice;
    });
});
