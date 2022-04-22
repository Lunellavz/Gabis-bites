function yourName(){
let aname = prompt("What is your name?");
document.write("Nice to meet you," + aname);
}

function bites(){
    let foodq = prompt("You love food?");
    
    if (foodq=== "Yes") {
        
        document.write("You've come to the right place!");
        
    }
    else {
          
        document.write("I hope this helps!");
    } 
}

yourName()

document.write("<br />")

bites()


let meals = prompt ("How many meals a day should you eat?");

while (meals <= 3) {

    alert("Enter a number between 1-10");
    
    meals = prompt ("How many meals a day should you eat?");
}

for (let i=0; i<=3; i++) {
    document.write('<img src="FOOD.jpg" />');
}