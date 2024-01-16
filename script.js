document.addEventListener("DOMContentLoaded", function() {
    //MAIN:
    const main= document.getElementById("main");
    const compNumber= document.getElementById("compNumber");
    const numberInput= document.getElementById("numberInput");
    const submitBtn= document.getElementById("submitBtn");

    //RESULT:
    const result= document.getElementById("result");
    const playAgainBtn= document.getElementById("playAgainBtn");
    const numberResult= document.getElementById("numberResult");
    const attempResult= document.getElementById("attempResult");

    //LOCAL
    let number;
    function getNumber() {
        number= Math.floor(Math.random() * 100) + 1;
        console.log(number)
    }

    getNumber();

    let attemps= 1;
    

    playAgainBtn.addEventListener("click", function() {
        swapPage();
        getNumber();
        attemps= 1;
    });

    submitBtn.addEventListener("click", function() {
        comparasion();
    });

    function checkIfNumber() {
        if(numberInput.value >= 1 && numberInput.value <= 100) {
            return true;
        }
        else {
            return false;
        }
    }

    swapIndex= true;
    function swapPage() {
        if(swapIndex == true) {
            main.style.display= "none";
            result.style.display= "block";
            swapIndex= false;
        }
        else {
            main.style.display= "block";
            result.style.display= "none";
            swapIndex= true;
        }
    }

    function comparasion() {
        const check= checkIfNumber();
        if(check === true) {
            if(numberInput.value < number) {
                compNumber.textContent= "";
                compNumber.textContent= "HIGHER";
                attemps++;
                numberInput.value= "";
            }
            else if(numberInput.value > number) {
                compNumber.textContent= "";
                compNumber.textContent= "LOWER";
                attemps++;
                numberInput.value= "";
            }
            else if(numberInput.value == number) {
                numberInput.value= "";
                compNumber.textContent= null;
                numberResult.textContent= number;
                attempResult.textContent= attemps;
                swapPage();
            }

        }
        else {
            alert("Please Introduce a number between 1 to 100");
        }

    }

});