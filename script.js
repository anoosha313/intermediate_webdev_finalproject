function calculate() {
    let principalElement = document.getElementById("principal");
    let rateElement = document.getElementById("rate");
    let timeElement = document.getElementById("time");
    let resultElement = document.getElementById("result");

    // Prevent TypeError if elements not found
    if (!principalElement || !rateElement || !timeElement || !resultElement) {
        return;
    }

    // Properly convert all input values to numbers before calculations
    let principal = parseFloat(principalElement.value);
    let rate = parseFloat(rateElement.value);
    let time = parseFloat(timeElement.value);

    // Also ensure they are Numbers
    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);

    // Check for invalid numbers to prevent TypeError
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultElement.innerHTML = "Please enter valid numbers in all fields.";
        return;
    }

    let interest = (principal * rate * time) / 100;
    let total = principal + interest;

    resultElement.innerHTML = `Interest Earned: ${interest.toFixed(2)} <br> Total Amount: ${total.toFixed(2)}`;
}