function compute()
{
    if(validation())
    {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate/100;
        years = 2021 + parseInt(years);
        var str = `If you deposit <mark>${principal}</mark>, <br> at an interest rate of <mark>${rate}</mark>%. <br>You will receive an amount of <mark>${interest}</mark>, <br> in the year <mark>${years}</mark>`;
        document.getElementById('result').innerHTML= str;
   } 
}

function range()
{
   valueRange = document.getElementById('rate').value;
   document.getElementById('span').innerHTML = `${valueRange} %`;
}

function validation()
{   
    var amount = document.getElementById("principal");
    if(amount.value <= 0 || amount.value == "")
    {
        alert("Please enter a positive number !");
        amount.focus();
        return false;
    }
    return true;
}

