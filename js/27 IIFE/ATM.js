// make a Atm 

const ATM=function(initialbalance){
    let balance=initialbalance;
    function withdraw(amount){
        if(amount>balance){
            return "Insufficient funds";
        }else{
            balance -= amount;
            return `Balance after withdrawal: ${balance}`;
        }
    }
    return {withdraw};
}

const sachin=ATM(1000);
console.log(sachin.withdraw(100));