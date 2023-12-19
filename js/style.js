function getInterval()
{
    const min = document.querySelector('#min-number').value;
    const max = document.querySelector('#max-number').value;

    return [min, max];
}

function getRandomNumber()
{
    const interval = getInterval();
    const min = Math.ceil(interval[0]);
    const max = Math.floor(interval[1]);
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const applyButton = document.querySelector('#apply-btn');
applyButton.addEventListener('click', () => {
    const result = document.querySelector('#result');
    result.textContent = getRandomNumber();
});