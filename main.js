function getCountries() {
    return $.ajax({
        type: "GET",
        url: "http://api.population.io:80/1.0/countries",
        dataType: "json"
    })
        .then(({countries}) => countries)
        .catch(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.status);
        });
}

function fiveCountries(countries) {
    const fiveCountries = [];
    for (var i = 0; i < 5; i++) {
        fiveCountries.push(countries[Math.floor(Math.random() * countries.length)])
    }
    return fiveCountries;
}

function humanizePopulation(pop) {
    const thresholds = [
        {x: 1000000000, s: ' billion'},
        {x: 1000000, s: ' million'},
        {x: 1000, s: ' thousand'},
        {x: 1, s: ''},
    ];
    for (var i = 0; i < thresholds.length; i++) {
        const t = thresholds[i];
        if (pop >= t.x) {
            return `${Math.floor(pop / t.x)}${t.s}`;
        }
    }
}

function generateQuestion({country, population}) {
    return {
        quest: `What is the population of ${country}?`,
        answers: [
            humanizePopulation(Math.floor((Math.random() * 1000000000) + 1)),
            humanizePopulation(population),
            humanizePopulation(Math.floor((Math.random() * 1000000000000) + 1)),
            humanizePopulation(Math.floor((Math.random() * 1000000000) + 1))
        ],
        correct: 1,
    }
}

var activeQuest = 0;
var correctAnswers = 0;
var end = false;

$(document).ready(function () {

    getCountries()
        .then(c => fiveCountries(c))
        .then(countries =>
            Promise.all(countries.map(country =>
                $.ajax({
                    type: "GET",
                    url: `http://api.population.io:80/1.0/population/${country}/2018-02-04/`,
                    dataType: "json"
                })
                    .then(({total_population: {population}}) => ({country, population}))
            ))
        )
        .then(c => c.map(generateQuestion))
        .then(quests => {
            console.log(quests);
            return quests;
        })
        .then(quests => {
            displayQuest(quests);
            return quests;
        })
        .then(quests => {
            $(this)
                .find(".alert")
                .hide();

            $(this)
                .find(".next")
                .on("click", function () {


                    if (!end) {

                        var value = $("input:checked").val();

                        console.log(value)

                        if (value === undefined) {
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

                            if (value === quests[activeQuest].correct) {
                                correctAnswers++;
                            }

                            activeQuest++;

                            if (activeQuest < quests.length) {
                                displayQuest(quests);
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
                        displayQuest(quests);
                        hideScore();
                    }
                });
        })
        .catch(e => console.error(e));
});

function displayQuest(quests) {


    var quest = quests[activeQuest].quest;
    var questClass = $(document).find(".quizBox > .quests");
    var answers = $(document).find(".quizBox > .answers");
    var numChoices = quests[activeQuest].answers.length;


    $(questClass).text(quest);

    $(answers).find("li").remove();



    var choice;
    for (var i = 0; i < numChoices; i++) {
        choice = quests[activeQuest].answers[i];
        $(`<li><input type="radio" value=${i} name="dynradio" />${choice}</li>`)
            .appendTo(answers);
    }
}

function restart() {
    activeQuest = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizBox > .result")
        .text("Result: "
            + correctAnswers
            + "/"
            + 5);

    $(document).find(".quizBox > .result").show();
}

function hideScore() {
    $(document)
        .find("result")
        .hide();
}