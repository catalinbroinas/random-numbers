const MIN_INPUT = document.querySelector('#min-number');
const MAX_INPUT = document.querySelector('#max-number');
const APPLY_BUTTON = document.querySelector('#apply-btn');

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
    const min = MIN_INPUT.value;
    const max = MAX_INPUT.value;

    (parseInt(min) < 990) ? MAX_INPUT.setAttribute('placeholder', parseInt(min) + 10)
        : MAX_INPUT.setAttribute('placeholder', 999);

    (parseInt(min) < 999) ? MAX_INPUT.setAttribute('min', parseInt(min) + 1) : MAX_INPUT.setAttribute('min', 1);

    if (!(min == '' || max == '') && !(parseInt(min) > 998 || parseInt(max) > 999)) {
        if (parseInt(max) > parseInt(min)) {
            if (APPLY_BUTTON.disabled) {
                APPLY_BUTTON.removeAttribute('disabled');
            }
        }
        else {
            if (!APPLY_BUTTON.disabled) {
                APPLY_BUTTON.setAttribute('disabled', "");
            }
        }
    }
    else {
        if (!APPLY_BUTTON.disabled) {
            APPLY_BUTTON.setAttribute('disabled', "");
        }
    }
}

MIN_INPUT.addEventListener('input', verifyInterval);
MAX_INPUT.addEventListener('input', verifyInterval);

APPLY_BUTTON.addEventListener('click', displayResult);