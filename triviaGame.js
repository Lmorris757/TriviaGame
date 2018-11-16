// begin timer on page ready
// randomize questions
// if user selects correct answer, note as true. else note as false.
// when the timer ends, load new page.
// count and return #of correct answers.

var time = 10
var clockStart = false
var score = 0
var intervalId

var triviaArr = [
    {
        name: "Disney",
        question: "Which Disney Princess did NOT need a man to save her?",
        options: ["Elsa", "Sleeping Beauty", "Snow White", "Cinderella"],
        answer: "Elsa"
    },
    {
        name: "Spice Girls",
        question: "Who is the youngest member of the Spice Girls?",
        options: ["Ginger", "Baby", "Scary", "Posh"],
        answer: "Baby"
    },
    {
        name: "Legally Blonde",
        question: "Which actress starred in the 2001 motion picture 'Legally Blonde'?",
        options: ["Reese Witherspoon", "Hayden Panitierre", "Charlize Theron", "Kristin Stewart"],
        answer: "Reese Witherspoon"
    },
    {
        name: "Rocko",
        question: "Which word best describes Rocko's life?",
        options: ["classic", "hard", "modern", "long"],
        answer: "modern"
    },
    {
        name: "Degrassi",
        question: "Which character did Aubrey Graham play in the hit schow 'Degrassi: Then Next Generation'?",
        options: ["Jimmy", "JT", "Seaun", "Toby"],
        answer: "Jimmy"
    },
    {
        name: "sClub",
        question: "What was S CLub 7?",
        options: ["A special edition drink", "A popular members only club", "A children's game", "A pop group"],
        answer: "A pop group"
    }
];


for(var i = 0; i < triviaArr.length; i++) {
    var div = $("<div>");
    div.addClass("question");
    $(div).prepend("<h4>"+triviaArr[i].question+"</h4>");
    for(var j = 0; j < triviaArr[i].options.length; j++){
        $(div).append("<input type='radio' name='"+triviaArr[i].name+"' value='"+triviaArr[i].options[j]+"'>"+triviaArr[i].options[j])
    }
    $(".quiz").append(div);
}