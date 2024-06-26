const button = document.querySelector(".btn");
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(data => {
            adviceId.textContent = "Advice #" + data.slip.id;
            adviceText.textContent = data.slip.advice;
        })
};

getAdvice();

button.addEventListener('click', () => {
    getAdvice();
})
