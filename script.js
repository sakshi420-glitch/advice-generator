const diceBtn = document.getElementById('dice-btn');
const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.querySelector('.advice-text');

diceBtn.addEventListener('click', generateAdvice);

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip;
            adviceIdElement.textContent = advice.id;
            adviceTextElement.textContent = `"${advice.advice}"`;
        })
        .catch(error => {
            adviceTextElement.textContent = 'Sorry, something went wrong!';
            console.error('Error fetching advice:', error);
        });
}
