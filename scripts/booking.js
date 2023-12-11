/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay;

let day_choice;

let clicked_elements;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var dayOptions = document.querySelectorAll(".flex day-selector");
var dayChoice = document.querySelectorAll(".blue-hover");


function dayClicked() {
    dayChoice.onclick.toggle('clicked');
    dayChoice.addEventListener("click", dayClicked)
}

function recalculate () {
    if (dayChoice = "click") {
        costPerDay = (dayChoice * dailyRate)
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");

function clearDays() {
    dayButtons.forEach(function () {
        element.classList.remove('clicked');
        costPerDay = 0;
    });
}

clearButton.addEventListener('click', clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDay = document.getElementById("half");

halfDay.onclick('clicked');
halfDay.addEventListener("click", clicked)

function halfDayrate() {
    dailyRate = 20;
    halfDay.classList('clicked');
    fullDay.classList.remove('clicked');
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullDay = document.getElementById("full");

function fullDayrate() {
    dailyRate = 35;
    halfDay.classList.remove('clicked');
    fullDay.classList('clicked');
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value



calculatedCost = document.getElementById('calculated-cost');

calculatedCost.innerHTML(weekly_cost)

/*sorry i tried and I cried a lot doing this*/
