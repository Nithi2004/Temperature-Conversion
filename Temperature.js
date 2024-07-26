    const input = document.getElementById("ip");
    const celcius = document.getElementById("celcius");
    const fahrenheit = document.getElementById("Fahrenheit");
    const result= document.getElementById("result");
    let temp;


    function convert(){
        if(celcius.checked){
            temp=Number(input.value);
            temp = temp * 9 / 5 +32;
            result.textContent= temp + '°F';

        }
        else if(fahrenheit.checked){
            temp=Number(input.value);
            temp = (temp- 32) * (5/9);
            result.textContent= temp + '°C';
        }
        else{
            result.textContent= "Select a conversion method";
        }
        
    
}