const quests = [
    {
    quest: "What is the population of Poland?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 1
    },
    {
    quest: "What is the population of England?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 2
    },
    {
    quest: "What is the population of Germany?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 1
    },
    {
    quest: "What is the population of Kambodia?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 0
    },
    {
    quest: "What is the population of China?",
    answers: ["100 million", "40 million", "1 million", "35 million"],
    correct: 0
}];

const activeQuest = 0;

$(document).ready(function () {

    displayQuest();

});

function displayQuest() {

    const quest = quests[activeQuest].quest;
    const questClass = $(document).find(".quizBox > .quest");
    const answerList = $(document).find(".quizBox > .answers");
    const numChoices = quests[activeQuest].answers.length;

    $(questClass).text(quest);

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = quests[activeQuest].answers[i];
        $('<li><input type="radio" value='
            + i +
            ' name="dynradio" />'
            + choice +
            '</li>'
        ).appendTo(answerList);
    }
}