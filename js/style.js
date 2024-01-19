const MIN_INPUT = document.querySelector('#min-number');
const MAX_INPUT = document.querySelector('#max-number');

const APPLY_BUTTON = document.querySelector('#apply-btn');
const CLEAR_BUTTON = document.querySelector('#clear-btn');
const BACK_BUTTON = document.querySelector('#back-btn');

const CLASSIC_CARD = document.querySelector('#classic-card');
const MANY_NUMBERS_CARD = document.querySelector('#many-numbers-card');

function getInterval() {
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;

    return [min, max];
}

function getRandomNumber() {
    const interval = getInterval();
    const min = Math.ceil(interval[0]);
    const max = Math.floor(interval[1]);
    const arr = [];

    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    return arr;
}

function displayResult(type, iteration) {
    const result = document.querySelector('#result');

    result.style.display = "flex";

    switch(type)
    {
        case 'classic':
            result.classList.add('result-number');
            result.textContent = getRandomNumber();
            break;
        case 'many-numbers':
            const number = document.createElement('span');
            number.classList.add('result-number');
            number.textContent = getRandomNumber();
            result.appendChild(number);
            break;
    }
}

function verifyInterval() {
    const alertInfo = document.querySelector('#alert-info');
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;
    let status = false;

    if (!(min == '' || max == '') && !(parseInt(min) > 998 || parseInt(max) > 999)) {
        if (parseInt(max) > parseInt(min)) {
            if (APPLY_BUTTON.disabled) {
                APPLY_BUTTON.removeAttribute('disabled');
                alertInfo.style.display = 'none';
            }
        }
        else {
            if (!APPLY_BUTTON.disabled) {
                APPLY_BUTTON.setAttribute('disabled', "");
                alertInfo.style.display = 'block';
            }
        }
    }
    else {
        if (!APPLY_BUTTON.disabled) {
            APPLY_BUTTON.setAttribute('disabled', "");
            alertInfo.style.display = 'block';
        }
    }
}

function getFeedback() {
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;

    (parseInt(min) < 990) ? MAX_INPUT.setAttribute('placeholder', parseInt(min) + 10)
        : MAX_INPUT.setAttribute('placeholder', 999);

    (parseInt(min) < 999) ? MAX_INPUT.setAttribute('min', parseInt(min) + 1) : MAX_INPUT.setAttribute('min', 1);
}

function displayGame(option) {
    const settingWrapper = document.querySelector('#setting');
    const container = document.querySelector('.container');
    const title = document.querySelector('.title');
    const quantity = document.querySelector('.quantity-group');
    const logo = document.querySelector('.logo');

    switch (option) {
        case 'classic':
            settingWrapper.style.display = 'none';
            container.style.display = 'block';
            title.textContent = 'Classic';
            break;
        case 'many-numbers':
            settingWrapper.style.display = 'none';
            container.style.display = 'block';
            title.textContent = 'Many Numbers';
            logo.src = 'img/dice-1.png';
            break;
    }
}

MIN_INPUT.addEventListener('focus', (event) => {
    event.target.removeAttribute('placeholder');
});
MIN_INPUT.addEventListener('focusout', (event) => {
    event.target.setAttribute('placeholder', 0);
});
MAX_INPUT.addEventListener('focus', (event) => {
    event.target.removeAttribute('placeholder');
});
MAX_INPUT.addEventListener('focusout', (event) => {
    (parseInt(MIN_INPUT.value) < 990) ? event.target.setAttribute('placeholder', parseInt(MIN_INPUT.value) + 10)
        : event.target.setAttribute('placeholder', 999);
});

MIN_INPUT.addEventListener('input', verifyInterval);
MAX_INPUT.addEventListener('input', verifyInterval);

MIN_INPUT.addEventListener('input', getFeedback);
MAX_INPUT.addEventListener('input', getFeedback);

APPLY_BUTTON.addEventListener('click', () => {
    setTimeout((type, interaction) => {
        displayResult(type, interaction);
    }, 500, GAME_TYPE, 1);
    setTimeout(() => {
        CLEAR_BUTTON.style.visibility = 'visible';
    }, 1000);
});
CLEAR_BUTTON.addEventListener('click', (event) => {
    const result = document.querySelector('#result');
    result.style.display = 'none';
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    setTimeout((event) => {
        event.target.style.visibility = 'hidden';
    }, 500, event);
});
BACK_BUTTON.addEventListener('click', () => {
    setTimeout(() => {
        window.location.reload();
    }, 500);
});

CLASSIC_CARD.addEventListener('click', () => {
    setTimeout(() => {
        displayGame('classic');
        GAME_TYPE = 'classic';
    }, 500);
});
MANY_NUMBERS_CARD.addEventListener('click', () => {
    setTimeout(() => {
        displayGame('many-numbers');
        GAME_TYPE = 'many-numbers';
    }, 500);
});