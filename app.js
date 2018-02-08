//random, initialize, array, ?'s, function
var speechQuestions = [];

speechQuestions.push("Who is somebody you look up to and why?");
speechQuestions.push("Talk about a blind date experience.");
speechQuestions.push("What is your favorite movie and why?");
speechQuestions.push("Talk about the best trip you ever took.");
speechQuestions.push("Talk about your favorite memory of grandma's house.");
speechQuestions.push("Talk about a famous person you have met.");
speechQuestions.push("Talk about your first car you ever owned.");
speechQuestions.push("What is the most proud moment in your life so far.");
speechQuestions.push("If you won the lottery, what would be the first thing you bought and why?");
speechQuestions.push("Are you a dog or cat person and why.");
speechQuestions.push("Talk about the most embarrassing moment you have experienced.");
speechQuestions.push("If you could go anywhere in the world, where would it be and why?");
speechQuestions.push("Tell us about your best or worst vacation ever.");
speechQuestions.push("Give us three famous persons, living or dead, that you'd like to have a dinner party with and why them?");
speechQuestions.push("What was one thing that you got away with as a teenager that your parents never knew?");
speechQuestions.push("Crunchy or creamy peanut butter? Why?");
speechQuestions.push("Tell us about a Homeowner/Renter nightmare.");



var min = 0;
var max = 16;


function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function rollQuestions(){
    var qNum=randomNumber(min,max);
    $("#speechQuestions").text("" + (speechQuestions[qNum]));
    console.log(qNum);
}

