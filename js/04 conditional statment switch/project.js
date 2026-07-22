// Grade calulation using switch case

const marks=25;

switch(true){
    case marks>=90:
        console.log("Grade A");
        break;
    case marks>=80:
        console.log("Grade B");
        break;
    case marks>=35:
        console.log("Grade C");
        break;
    default:
        console.log("Grade ff");
}

// using if else

if(marks>=90){
    console.log("Grade A");
}else if(marks>=80){
    console.log("Grade B");
}else if(marks>=35){
    console.log("Grade C");
}else{
    console.log("fail");
}