const questions = [
    {
    question: "What is the population of Poland?",
    choices: ["100 million", "40 million", "1 million", "35 million"],
    correctAnswer: 1
    },
    {
    question: "What is the population of England?",
    choices: ["100 million", "40 million", "1 million", "35 million"],
    correctAnswer: 2
    },
    {
    question: "What is the population of Germany?",
    choices: ["100 million", "40 million", "1 million", "35 million"],
    correctAnswer: 1
    },
    {
    question: "What is the population of Kambodia?",
    choices: ["100 million", "40 million", "1 million", "35 million"],
    correctAnswer: 0
    },
    {
    question: "What is the population of China?",
    choices: ["100 million", "40 million", "1 million", "35 million"],
    correctAnswer: 0
}];

const activeQuest = 0;

$(document).ready(function () {

    displayQuest();

});

function displayQuest() {

    const question = questions[activeQuest].question;
    const questClass = $(document).find(".quiz > .quest");

    $(questClass).text(question);

}