// declare variable 

let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");
let appendNumbers = document.getElementById("display");


//declare counter for increment, decrement 
let counter= 0;

// declare reset for the reset button

let newReset = 0;

//add events for each of the actions


//event 1 is for increment 
increase.addEventListener("click", increment)

function increment(e){
 
    let improve =counter++;

    appendNumbers.innerHTML=improve;

  
}


//event 2 is for decrement 
decrease.addEventListener("click", decrement)

function decrement(e){
    let reduce = counter--;

    appendNumbers.innerHTML = reduce;
}

//event3 is for reset

reset.addEventListener("click", resetment)

function resetment(e){
    let zero = newReset
    appendNumbers.innerHTML=zero;
}