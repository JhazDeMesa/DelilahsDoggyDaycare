/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var rates = {
    full: 35,
    half: 20
}; 



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let selectedDays = [];
let selectedRate = "full";

var dayButtons = Array.from(
    document.querySelectorAll(".booking-page .day-selector .blue-hover")
);

dayButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.add("clicked");
        if (selectedDays.includes(button.id)) return;
        selectedDays.push(button.id);
        handleCost();
    });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    dayButtons.forEach(function(button) {
        button.classList.remove("clicked");
    });
    selectedDays = [];
    handleCost();
}

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays); 




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var rateButtons = Array.from(document.querySelectorAll("#half, #full"));

rateButtons.forEach(function(rateButton) {
    rateButton.addEventListener("click", rateChange);
});

function rateChange(e) {
    rateButtons
    .find(function(btn) {
        return btn.id !== e.target.id;
    })
    .classList.remove("clicked");

    if (e.target.id === "full") {
        selectedRate = "full";
        rateButtons[0].classList.add("clicked");
    } else {
        selectedRate = "half";
        rateButtons[1].classList.add("clicked");
    }
    handleCost();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function handleCost() {
    var costDisplay = document.getElementById("calculated-cost");
    costDisplay.innerHTML = selectedDays.length * rates[selectedRate]; 
}
