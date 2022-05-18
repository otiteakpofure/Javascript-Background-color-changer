const one= document.querySelectorAll("#one");

 const green = document.querySelector(".green");


const red = document.querySelector(".red");


const yellow = document.querySelector(".yellow");


 const blue = document.querySelector(".blue");


 let body=document.body

let change = green.addEventListener("click",display)
let change2 = red.addEventListener("click",display)
let change3 = yellow.addEventListener("click",display)
let change4 = blue.addEventListener("click",display)


function display(e){
    const myStyles=e.currentTarget.classList
    if (myStyles.contains('green')){
        body.style.backgroundColor="green"
    }
    
    else if(myStyles.contains('red')){
        body.style.backgroundColor="red"
    }
    else if(myStyles.contains('yellow')){
        body.style.backgroundColor="yellow"
    }

    else{
        body.style.backgroundColor="blue"
    }
 }




// e.currentTarget.classList




