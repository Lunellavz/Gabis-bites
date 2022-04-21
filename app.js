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


