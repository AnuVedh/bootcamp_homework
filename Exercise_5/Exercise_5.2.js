
function calculateDogAge(yourpuppy_age)
{
    var dog_age=yourpuppy_age*7;
    console.log("Your doggie is "+dog_age+" years old in dog years");
}
calculateDogAge(4);
calculateDogAge(1);
calculateDogAge(3);

function calculateDogAgeBonus(yourpuppy_age,con_rate)
{
    var dog_age=yourpuppy_age*con_rate;
    console.log("Your doggie is "+dog_age+" years old in dog years");
}
calculateDogAgeBonus(2,7);
calculateDogAgeBonus(1,7);
calculateDogAgeBonus(3,7);