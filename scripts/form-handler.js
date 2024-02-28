const form = document.getElementById('card-infos-form')
const cardNumber = document.getElementById("card-number");

cardNumber.addEventListener("input", function () {
    let value = this.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();

    this.value = value;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cardholderName = document.getElementById("cardholder-name");
    const cardNumber = document.getElementById("card-number");
    const expiryDateMonth = document.getElementById("expiry-date-month");
    const expiryDateYear = document.getElementById("expiry-date-year");
    const cvc = document.getElementById("cvc");

    const cardholderNameError = cardholderName.nextElementSibling;
    const cardNumberError = cardNumber.nextElementSibling;
    const expiryDateError = document.getElementById("expiry-date-error");
    const cvcError = document.getElementById("cvc-error");

    let isValid = true;

    if (!cardholderName.value) {
        cardholderNameError.textContent = "Please enter the cardholder name";
        cardholderNameError.classList.add("active");
        cardholderName.classList.add("error");
        isValid = false;
    } else {
        cardholderNameError.textContent = "";
        cardholderNameError.classList.remove("active");
        cardholderName.classList.remove("error");
    }

    if (!cardNumber.value) {
        cardNumberError.textContent = "Please enter the card number";
        cardNumberError.classList.add("active");
        cardNumber.classList.add("error");
        isValid = false;
    } else {
        const cardNumberRegex = /^(\d{4}[- ]?){4}$/;
        if (!cardNumberRegex.test(cardNumber.value)) {
            cardNumberError.textContent = "Please enter a valid card number";
            cardNumberError.classList.add("active");
            cardNumber.classList.add("error");
            isValid = false;
        } else {
            cardNumberError.textContent = "";
            cardNumberError.classList.remove("active");
            cardNumber.classList.remove("error");
        }
    }

    if (!expiryDateMonth.value || !expiryDateYear.value) {
        expiryDateError.textContent = "Please enter the expiry date";
        expiryDateError.classList.add("active");
        expiryDateMonth.classList.add("error");
        expiryDateYear.classList.add("error");
        isValid = false;
    } else {
        const expiryDateMonthRegex = /^(0[1-9]|1[0-2])$/;
        const expiryDateYearRegex = /^\d{2}$/;
        if (
            !expiryDateMonthRegex.test(expiryDateMonth.value) ||
            !expiryDateYearRegex.test(expiryDateYear.value)
        ) {
            expiryDateError.textContent = "Please enter a valid expiry date";
            expiryDateError.classList.add("active");
            expiryDateMonth.classList.add("error");
            expiryDateYear.classList.add("error");
            isValid = false;
        } else {
            expiryDateError.textContent = "";
            expiryDateError.classList.remove("active");
            expiryDateMonth.classList.remove("error");
            expiryDateYear.classList.remove("error");
        }
    }

    if (!cvc.value) {
        cvcError.textContent = "Please enter the cvc";
        cvcError.classList.add("active");
        cvc.classList.add("error");
        isValid = false;
    } else {
        const cvcRegex = /^\d{3}$/;
        if (!cvcRegex.test(cvc.value)) {
            cvcError.textContent = "Please enter a valid cvc";
            cvcError.classList.add("active");
            cvc.classList.add("error");
            isValid = false;
        } else {
            cvcError.textContent = "";
            cvcError.classList.remove("active");
            cvc.classList.remove("error");
        }
    }

    if (isValid) {
        alert("The form is valid!");
    }
});
