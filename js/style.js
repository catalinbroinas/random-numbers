const minInput = document.querySelector('#min-number');
const maxInput = document.querySelector('#max-number');
const applyButton = document.querySelector('#apply-btn');

function getInterval()
{
    const min = minInput.value;
    const max = maxInput.value;

    return [min, max];
}

function getRandomNumber()
{
    const interval = getInterval();
    const min = Math.ceil(interval[0]);
    const max = Math.floor(interval[1]);
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayResult()
{
    const result = document.querySelector('#result');

    result.style.display = "flex";
    result.textContent = getRandomNumber();
}

function verifyInterval()
{
    const min = minInput.value;
    const max = maxInput.value;

    maxInput.setAttribute('min', parseInt(min) + 1);

    if(parseInt(min) < 990)
    {
        maxInput.setAttribute('placeholder', parseInt(min) + 10);
    }
    else
    {
        maxInput.setAttribute('placeholder', 999);
    }

    if(parseInt(min) >= parseInt(max))
    {
        applyButton.setAttribute('disabled', "");
    }
    else
    {
        if(applyButton.disabled)
        {
            applyButton.removeAttribute('disabled');
        }
    }
}

minInput.addEventListener('input', verifyInterval);
maxInput.addEventListener('input', verifyInterval);

applyButton.addEventListener('click', displayResult);