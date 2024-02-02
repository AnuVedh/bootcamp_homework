var human_max_age=90;
function calculateSupply(age,amountperday) {
    var restofage=human_max_age-age;
    var days=365;
    var supply=days*restofage*amountperday;
    console.log("You will need "+supply.toFixed()+" to last you until the rip old age of "+restofage);
}
calculateSupply(50,2.4656);
calculateSupply(40,1);
calculateSupply(55,10);