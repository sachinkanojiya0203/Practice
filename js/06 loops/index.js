// loops

// for loop
for (let i=0 ;i<10; i++){
    // console.log(i);
}

// while loop
let ip=0;
let house=50

while(ip !=house){
    ip=ip+1;
    // console.log("step taken:",ip); 
}

// do while loop
do{
    ip=ip+1;
    // console.log("step taken:",ip); 
}while(ip <=house);


// game guessing number

let guess=0;
let number=30

while(guess !=number){
    guess=parseInt(prompt("guess the number between 1 to 50"));
    if(guess == number){
        alert("you guessed the number");
        break;
    }

}