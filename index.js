// alert("Hey Nah!");
// ### Phase 1: Ask 1 question only then exit
//
// #### Create a Class to represent an individual Question (4 points).
// Your Question class should have 3 properties:
//     * Question Text - This is the actual text of the given question
// * Answers - This should be an array containing the available answers for the question. The number of answers available for a given question is up to the Developer.
// * Correct Answer Index - This integer should be the index of the correct answer in your answer array.
//
//     Your Question Class should have at least 2 methods:
//     * A method to output the question and the available answers.
// * A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```.

class Questions
{
    // questions=[];
    // answers=[];
    // correct_answer=[];

    constructor(question,answer,correct_answers)
    {
        this.questions=question;
        this.answers=answer;
        this.correct_answer=correct_answers;
    }
}

let gameOn = new Questions("Party like it's what year?",['1999','2001','1978'],"0");
let gameOn1 = new Questions("Learn to use your keyboard, because 'what' will stop working?","['keyboard,'screen','mouse']","2");
let gameOn2 = new Questions("What color is the sun?","['red,'yellow','green']","1");
let index_of_a_question = Math.floor(Math.random() * Questions.length);


console.log(gameOn.questions);
console.log(gameOn.answers);
var userAnswer = prompt("Select the correct answer in the console");

if(userAnswer!==gameOn.correct_answer)
{
    alert("sorry wrong answer")
}
else {
    alert("You got it")
}
