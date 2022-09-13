const Quizdata=[
    {
        question:' What is my name ?',
        a:'Samrat',
        b:'Ananya',
        c:'Puspita',
        d:'Barnali',
        answer:"a"},
        {
            question:'What is purpose of an operating systems ?',
            a:'for information',
            b:'for managing resources',
            c:'for merging resources',
            d:'for gaming resources',
            answer:'b'
        },{
            question:'What is a black hole ?',
            a:'a hole which is just black',
            b:'tear in a space-time continoums',
            c:'just a myth',
            d:'you cant see a black hole',
            answer:'b'
        },{
            question:'What is a white hole ?',
            a:'a hole which is just black',
            b:'tear in a space-time continoums',
            c:'just a myth',
            d:'you cant see a black hole',
            answer:'b'
        }
]
const questionsEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = Quizdata[currentQuiz];
    questionsEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answersEl = document.querySelectorAll(".answer");


    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
             return answerEl.id;
        }
    });
    return undefined;


    }
 
submitBtn.addEventListener("click" , () => {
    const answer = getSelected();
    
    if(answer){
        if(answer){
        {

            currentQuiz++;
        }  
    }
        if (currentQuiz < Quizdata.length) {
        loadQuiz();}
        else{
        alert (' finished');
      }
  
     }



});