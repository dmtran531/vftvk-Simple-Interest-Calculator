function compute() {

    document.getElementById("result").innerHTML = "";

    var principal = document.getElementById("principal").value;
    console.log(principal);

    // check if principal is empty
    if (principal == "") {
        // display an error message
        alert('Please enter the principal');
        principal.cocus();
        return;
    } else if (parseInt(principal) <= 0) {
        alert('Plase enter a positive number')
        principal.focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    console.log(rate);

    var years = document.getElementById("years").value;
    console.log(years);

    var interest = principal * years * rate / 100;
    console.log(interest);

    var amount = parseFloat(principal) + parseFloat(interest);
    console.log(amount);

    var year = new Date().getFullYear() + parseInt(years);
    console.log(year);

    document.getElementById("result").innerHTML =
        "If you deposit " +
        principal +
        ",\<br\>at an interest rate of " +
        rate +
        "%\<br\>You will receive an amount of " +
        amount +
        ",\<br\>in the year " +
        year +
        "." +
        "\<br\>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}