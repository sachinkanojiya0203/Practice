// IIFE (Immediately Invoked Function Expression) //time  6:09
/*(function() {
    console.log("IIFE executed!");
})();*/

// es6
// (()=>{console.log("IIFE executed with arrow function!");})();


// async IIFE

// const data=(async ()=> await fetch()) ()

// ATM show Balance with withdraw and deposit options

const ATM= function(intialBalance){
    let balance=intialBalance;
    function withdraw(amount){
        if(amount>balance){
            return "Insufficient funds";
        }else{
            balance-=amount;
            return `Balance after withdrawal: ${balance}`;
        }
    }
    return {withdraw};
}

const Sachin= ATM(1000);
console.log(Sachin.withdraw(100)); 
console.log(Sachin.withdraw(100)); 
console.log(Sachin.withdraw(1000)); 