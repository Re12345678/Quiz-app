const questions=[
    {
        question:"What is JavaScript?",
        answers:[
            {text:"A style sheet language",correct:"False"},
            {text:"A markup language",correct:"False"},
            {text:"A programming language",correct:"True"},
            {text:"A database management system",correct:"False"},
        ]
    },
        {
            question:"Which keyword is used to declare variables in JavaScript that can be reassigned?",
            answers:[
                {text:"Var",correct:"True"},
                {text:"let",correct:"False"},
                {text:"const",correct:"False"},
                {text:"set",correct:"False"},
            ]
    },
    {
        question:"What is the purpose of the === operator in JavaScript?",
        answers:[
            {text:"Assignment",correct:"False"},
            {text:"Concatenation",correct:"False"},
            {text:"Comparison",correct:"True"},
            {text:"none",correct:"False"},
        ]
    },
    {
        question:"What does DOM stand for in JavaScript?",
        answers:[
            {text:"Data Object Model",correct:"False"},
            {text:"Document Object Model",correct:"True"},
            {text:"Document Oriented Model",correct:"False"},
            {text:"Document Object Model",correct:"False"},
        ]
    },
    {
        question:"Which method is used to add a new element to the end of an array in JavaScript?",
        answers:[
            {text:"insert()",correct:"False"},
            {text:"push()",correct:"True"},
            {text:"append()",correct:"False"},
            {text:"add()",correct:"False"},
        ]
    },
    {
        question:"How do you define a function in JavaScript?",
        answers:[
            {text:"parseJSON()",correct:"False"},
            {text:"Function myFunction() {}",correct:"True"},
            {text:"def myFunction() {}",correct:"False"},
            {text:"function: myFunction() {}",correct:"False"},
        ]
    },
    {
        question:" Which function is used to parse a JSON string in JavaScript?",
        answers:[
            {text:"parseJSON()",correct:"False"},
            {text:"JSON.parse()",correct:"True"},
            {text:"stringify()",correct:"False"},
            {text:"toJASON()",correct:"False"},
        ]
    },
    {
        question:"Which loop is not available in JavaScript?",
        answers:[
            {text:"for loop",correct:"False"},
            {text:"repeat-until loop",correct:"True"},
            {text:"while loop",correct:"False"},
            {text:"none",correct:"False"},
        ]
    },
    {
        question:"What is the purpose of the addEventListener method in JavaScript?",
        answers:[
            {text:"To remove an event listener",correct:"False"},
            {text:"To add an event listener to an element",correct:"True"},
            {text:" To create an event handler",correct:"False"},
            {text:"To execute a function asynchronously",correct:"False"},
        ]
    },
    {
        question:"What is the following code do let result = [1, 2, 3, 4, 5].map(num => num * 2);",
        answers:[
            {text:"Adds 2 to each element of the array.",correct:"False"},
            {text:"multiply each element of the array of 2.",correct:"True"},
            {text:"Finds the maximum value in the array.",correct:"False"},
            {text:"To execute a function asynchronously",correct:"False"},
        ]
    },
];

let questionel=document.getElementById("question");
let answers=document.getElementById("answers");
let sbtn=document.getElementById("sbtn");

let currentindex=0;
let score=0;

function startquiz(){
     currentindex=0;
     score=0;
sbtn.innerHTML="Submit";
showQuestion();
}

function showQuestion(){
    resetstate();
    let currentq= questions[currentindex];
    let qnumber = currentindex + 1;
    questionel.innerHTML= qnumber +". "+ currentq.question;

    currentq.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer)
    });
}

function resetstate()
{
    sbtn.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

function selectanswer(e){
let selsect=e.target;
let iscorrect= selsect.dataset.correct === "True";
if(iscorrect){
    selsect.classList.add("correct");
    score++;
}
else{
    selsect.classList.add("intcorrect");
}
Array.from(answers.children).forEach(button =>{
    if(button.dataset.correct === "True"){
        button.classList.add("correct");
    }
    button.disabled= true;
});
sbtn.style.display="block";
}

function showscore(){
    resetstate();
    if (score === questions.length){
        questionel.innerHTML=` Congratulations! 😊🎊 
        Your Score is ${score} out of ${questions.length}!`;
    }
    else{
        questionel.innerHTML=` Your Score is ${score} out of ${questions.length} 😥!`;
        sbtn.innerHTML="Try Again";
    }
    sbtn.style.display="block";
}

function handelnext(){
    currentindex++;
    if(currentindex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
sbtn.addEventListener("click", ()=>{
    if(currentindex < questions.length){
        handelnext();
    }
    else{
        startquiz();
    }
});
startquiz();