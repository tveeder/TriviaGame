
var correct = 0;
var incorrect = 0;

$("#thebutton").click(function () {


    var timeleft = 10;

    var downloadTimer = setInterval(function () {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Time is up!"
            checkAnswers()
        }
    }, 1000);

});

function checkAnswers() {

    var question1 = document.quizform.question1.value;
    var question2 = document.quizform.question2.value;
    var question3 = document.quizform.question3.value;


    if (question1 === "merchant") {
        correct++
    }
    else incorrect++;

    if (question2 === "1941") {

        correct++
    }
    else incorrect++

    if (question3 === "1974") {

        correct++
    }
    else incorrect++


    alert("number correct is: " + correct);

    alert("number incorrect is: " + incorrect);

    alert("number unanwered: ");





    console.log(correct);
    console.log(question1);
    console.log(question2);
}




