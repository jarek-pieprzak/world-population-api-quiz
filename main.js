
// $.ajax({
//     type:"GET",
//     url: "http://api.population.io:80/1.0/countries",
//     success: function(data) {
//         incomeData = data;
//
//         console.log(incomeData.countries[3])
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//         console.log(jqXHR.status);
//     },
//     dataType: "json"
// });

function fiveCountries() {
    var countryList = {
        "countries": [
            "Afghanistan",
            "AFRICA",
            "Albania",
            "Algeria",
            "Angola",
            "Antigua and Barbuda",
            "Arab Rep of Egypt",
            "Argentina",
            "Armenia",
            "Aruba",
            "ASIA",
            "Australia",
            "Australia/New Zealand",
            "Austria",
            "Azerbaijan",
            "The Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Bosnia and Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cote-d-Ivoire",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Caribbean",
            "Central African Republic",
            "Central America",
            "Central Asia",
            "Chad",
            "Channel Islands",
            "Chile",
            "China",
            "Hong Kong SAR-China",
            "Macao SAR China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Curacao",
            "Cyprus",
            "Czech Republic",
            "Dem Peoples Rep of Korea",
            "Dem Rep of Congo",
            "Denmark",
            "Djibouti",
            "Dominican Republic",
            "Eastern Africa",
            "Eastern Asia",
            "Eastern Europe",
            "Ecuador",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "EUROPE",
            "Federated States of Micronesia",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "FYR Macedonia",
            "Gabon",
            "The Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Islamic Republic of Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Kuwait",
            "Kyrgyz Republic",
            "Lao PDR",
            "LATIN AMERICA AND THE CARIBBEAN",
            "Latvia",
            "Least developed countries",
            "Lebanon",
            "Lesotho",
            "Less developed regions",
            "Less developed regions, excluding China",
            "Less developed regions, excluding least developed countries",
            "Liberia",
            "Libya",
            "Lithuania",
            "Luxembourg",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Melanesia",
            "Mexico",
            "Micronesia",
            "Middle Africa",
            "Moldova",
            "Mongolia",
            "Montenegro",
            "More developed regions",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nepal",
            "The Netherlands",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Northern Africa",
            "NORTHERN AMERICA",
            "Northern Europe",
            "Norway",
            "OCEANIA",
            "Oman",
            "Other non-specified areas",
            "Pakistan",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Polynesia",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "RB-de-Venezuela",
            "Rep of Korea",
            "Rep of Yemen",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "St-Lucia",
            "St-Vincent and the Grenadines",
            "Samoa",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovak Republic",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South America",
            "South Sudan",
            "South-Central Asia",
            "South-Eastern Asia",
            "Southern Africa",
            "Southern Asia",
            "Southern Europe",
            "Spain",
            "Sri Lanka",
            "West Bank and Gaza",
            "Sub-Saharan Africa",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syrian Arab Rep",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "US Virgin Islands",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vietnam",
            "Western Africa",
            "Western Asia",
            "Western Europe",
            "Western Sahara",
            "World",
            "Zambia",
            "Zimbabwe"
        ]
    };
    var fiveCountries = [];
    for (i = 0; i < 5; i++) {
        fiveCountries.push(countryList.countries[Math.floor(Math.random()*countryList.countries.length)])
    }
    return fiveCountries;
}

console.log(fiveCountries())








var quests = [
    // {
    // quest: "What is the population of " + randomCountry.toString() + "",
    // answers: ["100 million", "40 million", "1 million", "35 million"],
    // correct: 1
    // },
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

var numQuests = quests.length

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