function celsiusToFahrenheit() {
        var celisus_temp=21;
        var formula=(celisus_temp*9/5)+32;
        console.log(+celisus_temp+" C is "+formula);
    
}
celsiusToFahrenheit();

function fahrenheitToCelisus() {
    var fahrenheit_temp=32;
    var formula=(fahrenheit_temp-32)*5/9;
    console.log(+fahrenheit_temp+" F is " +formula);

}
fahrenheitToCelisus();