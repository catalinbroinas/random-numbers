const MIN_INPUT = document.querySelector('#min-number');
const MAX_INPUT = document.querySelector('#max-number');
const APPLY_BUTTON = document.querySelector('#apply-btn');
const CLEAR_BUTTON = document.querySelector('#clear-btn');

function getInterval() {
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;

    return [min, max];
}

function getRandomNumber() {
    const interval = getInterval();
    const min = Math.ceil(interval[0]);
    const max = Math.floor(interval[1]);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayResult() {
    const result = document.querySelector('#result');

    result.style.display = "flex";
    result.textContent = getRandomNumber();
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

function getFeedback()
{
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;

    (parseInt(min) < 990) ? MAX_INPUT.setAttribute('placeholder', parseInt(min) + 10)
        : MAX_INPUT.setAttribute('placeholder', 999);

    (parseInt(min) < 999) ? MAX_INPUT.setAttribute('min', parseInt(min) + 1) : MAX_INPUT.setAttribute('min', 1);
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
    displayResult();
    CLEAR_BUTTON.style.display = 'inline-block';
});
CLEAR_BUTTON.addEventListener('click', () => {
    location.reload();
});