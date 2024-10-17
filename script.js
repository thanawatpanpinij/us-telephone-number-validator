const INPUT_ELEM = document.querySelector("#user-input");
const RESULTS_ELEM = document.querySelector("#results-div");
const CHECK_BUTTON_ELEM = document.querySelector("#check-btn");
const CLEAR_BUTTON_ELEM = document.querySelector("#clear-btn");

function showResult(result) {
    clearInput();

    const pElem = document.createElement("p");

    pElem.classList.add("result");
    pElem.textContent = result;
    RESULTS_ELEM.appendChild(pElem);
}

function validatePhoneNumber(phoneNumber) {
    const validate = /^(1\s?)?(\d{3}|\(\d{3}\))(-|\s)?(\d{3})(-|\s)?(\d{4})$/;
    return validate.test(phoneNumber);
}

function clearInput() {
    if (INPUT_ELEM.value === "") return
    INPUT_ELEM.value = "";
}

function clearResults() {
    RESULTS_ELEM.textContent = "";
}

function checkPhoneNumber() {
    const phoneNumber = INPUT_ELEM.value;

    if (phoneNumber === "") return alert("Please provide a phone number");
    if (validatePhoneNumber(phoneNumber)) return showResult(`Valid US number: ${phoneNumber}`);
    showResult(`Invalid US number: ${phoneNumber}`);
}

function onKeyUp(event) {
    const phoneNumber = INPUT_ELEM.value;

    if (event.key === "Enter") {
        if (phoneNumber === "") return alert("Please provide a phone number");
        if (validatePhoneNumber(phoneNumber)) return showResult(`Valid US number: ${phoneNumber}`);
        showResult(`Invalid US number: ${phoneNumber}`);
    };
}

function run() {
    INPUT_ELEM.addEventListener("keyup", onKeyUp);
    CHECK_BUTTON_ELEM.addEventListener("click", checkPhoneNumber);
    CLEAR_BUTTON_ELEM.addEventListener("click", clearResults);
}

run();