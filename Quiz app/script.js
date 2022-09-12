const quizData = [
    {
        questions:'How old is samrat?',
        a:'10',
        b:'21',
        c:'22',        
        d:'33',
        answer:'b' 
    }, {
        questions:'What is my favorite operating system?',
        a:'windows',
        b:'linux',
        c:'darwin',
        d:'macos',
        answer:'b'
    }
];
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const submitBtn=document.getElementById('submit');
let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText= currentQuizData.questions;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    currentQuestion++;
}
 submitBtn.addEventListener('click',() => {
    currentQuiz++;
    if(currentQuiz < quizData.length){
    loadQuiz();}else {
        alert('finished');
    }
 });