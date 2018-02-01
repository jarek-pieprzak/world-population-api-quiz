
$.ajax({
    type:"GET",
    url: "http://api.population.io:80/1.0/countries",
    success: function(data) {
        $("body").append(JSON.stringify(data));
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
    },
    dataType: "jsonp"
});



var quests = [
    {
    quest: "What is the population of Poland?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 1
    },
    {
    quest: "What is the population of England?",
    answers: ["1 million", "2 million", "3 million", "4 million"],
    correct: 2
    },
    {
    quest: "What is the population of Germany?",
    answers: ["5 million", "6 million", "7 million", "8 million"],
    correct: 1
    },
    {
    quest: "What is the population of Kambodia?",
    answers: ["9 million", "56 million", "56 million", "10 million"],
    correct: 0
    },
    {
    quest: "What is the population of China?",
    answers: ["100 million", "40 million", "1 million", "123123 million"],
    correct: 0
}];

var activeQuest = 0;
var correctAnswers = 0;
var end = false;

$(document).ready(function () {

    displayQuest();

    $(this)
        .find(".alert")
        .hide();

    $(this)
        .find(".next")
        .on("click", function () {


        if (!end) {

        value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document)
                    .find(".alert")
                    .text("Please select an answer");

                $(document)
                    .find(".alert")
                    .show();

            } else {
                $(document)
                    .find(".alert")
                    .hide();

                if (value == quests[activeQuest].correct) {
                    correctAnswers++;
                }

                activeQuest++;
                if (activeQuest < quests.length) {
                    displayQuest();
                } else {
                    displayScore();

                    $(document)
                        .find(".next")
                        .text("Play Again?");

                    end = true;
                }
            }
        } else {
            end = false;

            $(document)
                .find(".next")
                .text("Next Question");


            restart();
            displayQuest();
            hideScore();
        }
    });

});

function displayQuest() {

    var quest = quests[activeQuest].quest;
    var questClass = $(document).find(".quizBox > .quests");
    var answers = $(document).find(".quizBox > .answers");
    var numChoices = quests[activeQuest].answers.length;

    $(questClass).text(quest);

    $(answers).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = quests[activeQuest].answers[i];
        $('<li><input type="radio" value='
            + i
            + ' name="dynradio" />'
            + choice
            + '</li>')
            .appendTo(answers);
    }
}

function restart() {
    activeQuest = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).
        find(".quizBox > .result")
        .text("Result: "
            + correctAnswers
            + "/"
            + quests.length);

    $(document).find(".quizBox > .result").show();
}

function hideScore() {
    $(document)
        .find(".result")
        .hide();
}