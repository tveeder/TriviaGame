
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$("#thebutton").click(function () {

    $("#thebutton").hide()

    correct = 0;
    incorrect = 0;

    var timeleft = 10;

    var downloadTimer = setInterval(function () {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Hit refresh to play again."
            checkAnswers()
        }
    }, 1000);

});

function checkAnswers() {

    var question1 = document.quizform.question1.value;
    var question2 = document.quizform.question2.value;
    var question3 = document.quizform.question3.value;


    if (question1 === "supply") {
        correct++
    }
    else if (question1 === "") {

        unanswered++
    } else {

        incorrect++
    }


    console.log(question1);

    ///////////////////////////////////

    if (question2 === "1941") {

        correct++
    }
    else if (question2 === "") {

        unanswered++
    }
    else {

        incorrect++
    }
    console.log(question2);

    ///////////////////////////////////

    if (question3 === "1974") {

        correct++
    }
    else if (question3 === "") {

        unanswered++
    }
    else {

        incorrect++

    }
    console.log(question3);

    // function results() {

    // $("#corr_results").html()  "you got " + correct;


    // }

    alert("number correct is: " + correct);

    alert("number incorrect is: " + incorrect);

    alert("number unanwered: " + unanswered);

    document.getElementById("correct").innerHTML = "Number correct is: " + correct;
    document.getElementById("incorrect").innerHTML = "Number incorrect is: " + incorrect;
    document.getElementById("unanswered").innerHTML = "Number unanswered is: " + unanswered;

    //$("#correct").text("Number correct is:  + correct");
    // $("#correct").html(correct)
    // $("#correct").html(correct)


    console.log(correct);
    console.log(question1); -
        console.log(question2);
}




