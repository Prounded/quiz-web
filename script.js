const submitBtn = document.getElementById('submit');
const textAnswerA = document.getElementById('answerA');
const textAnswerB = document.getElementById('answerB');
const textAnswerC = document.getElementById('answerC');
const textAnswerD = document.getElementById('answerD');
const questionLabel = document.getElementById('questions');
const questionsNow = document.getElementById('questionNumbers');
const answerInputA = document.getElementById('choiceA');
const answerInputB = document.getElementById('choiceB');
const answerInputC = document.getElementById('choiceC');
const answerInputD = document.getElementById('choiceD');
const displayA = document.getElementById('displayA');
const displayB = document.getElementById('displayB');
const displayC = document.getElementById('displayC');
const displayD = document.getElementById('displayD');
const containerChoice = document.getElementById('choicesContainer');
const containerScore = document.getElementById('displayScores');

const percentScore = document.getElementById('percentCorrect');
const fractionNum = document.getElementById('fractionNum');
const rating = document.getElementById('rating');

const rgbWrong = 'rgb(255, 27, 27)';
const rgbNormal = 'rgb(188, 188, 188)';
const rgbCorrect = "rgb(0, 250, 0)";

let insideFile;    
fetch('Question.json').then(Response => Response.json()).then(value => insideFile = value).then(getQuestion);

let questionNumber = 0;
let correct = 0;

function isCorrect(){
    if(submitBtn.textContent === 'Submit'){
        let searchAns = insideFile[questionNumber];
        searchAns = Object.values(searchAns);
        searchAns = searchAns[6];
        let done = true;
        function changeText(){
            document.getElementById('infoError').style.visibility = 'hidden';
            if(submitBtn.textContent === "Submit"){
                submitBtn.textContent = "Next";
            }
            else if(submitBtn.textContent === "Next"){
                submitBtn.textContent = "Submit";
            }
            else{
                console.error("Something Went Wrong!");
            }
        }
        function findCorrect(){
            if(searchAns === 1){
                textAnswerA.style.color = rgbCorrect;
                displayA.style.color = rgbCorrect;
            }
            else if(searchAns === 2){
                textAnswerB.style.color = rgbCorrect;
                displayB.style.color = rgbCorrect;
            }
            else if(searchAns === 3){
                textAnswerC.style.color = rgbCorrect;
                displayC.style.color = rgbCorrect;
            }
            else if(searchAns === 4){
                textAnswerD.style.color = rgbCorrect;
                displayD.style.color = rgbCorrect;
            }
        }
        if(answerInputA.checked){
            changeText();
            if(searchAns === 1){
                textAnswerA.style.color = rgbCorrect;
                displayA.style.color = rgbCorrect;
                correct++;
            }
            else{
                textAnswerA.style.color = rgbWrong;
                displayA.style.color = rgbWrong;
                findCorrect();
            }
        }
        else if(answerInputB.checked){
            changeText();
            if(searchAns === 2){
                textAnswerB.style.color = rgbCorrect;
                displayB.style.color = rgbCorrect;
                correct++;
            }
            else{
                textAnswerB.style.color = rgbWrong;
                displayB.style.color = rgbWrong;
                findCorrect();
            }
        }
        else if(answerInputC.checked){
            changeText();
            if(searchAns === 3){
                textAnswerC.style.color = rgbCorrect;
                displayC.style.color = rgbCorrect;
                correct++;
            }
            else{
                textAnswerC.style.color = rgbWrong;
                displayC.style.color = rgbWrong;
                findCorrect();
            }
        }
        else if(answerInputD.checked){
            changeText();
            if(searchAns === 4){
                textAnswerD.style.color = rgbCorrect;
                displayD.style.color = rgbCorrect;
                correct++;
            }
            else{
                textAnswerD.style.color = rgbWrong;
                displayD.style.color = rgbWrong;
                findCorrect();
            }
        }
        else{
            done = false;
            document.getElementById('infoError').style.visibility = 'visible';
        }
        if (done === true){
            answerInputA.disabled = true;
            answerInputB.disabled = true;
            answerInputC.disabled = true;
            answerInputD.disabled = true;
        }
    }
    else if(submitBtn.textContent === 'Next'){
        if(submitBtn.textContent === "Submit"){
            submitBtn.textContent = "Next";
        }
        else if(submitBtn.textContent === "Next"){
            submitBtn.textContent = "Submit";
        }
        else{
            console.error("Something Went Wrong!");
        }
        questionNumber++;
        getQuestion();
    }
}


function getQuestion(){
    const allQuestion = insideFile;
    try{
        function resetAll(){
            textAnswerA.style.color = rgbNormal;
            displayA.style.color = rgbNormal;
            textAnswerB.style.color = rgbNormal;
            displayB.style.color = rgbNormal;
            textAnswerC.style.color = rgbNormal;
            displayC.style.color = rgbNormal;
            textAnswerD.style.color = rgbNormal;
            displayD.style.color = rgbNormal;
            answerInputA.checked = false;
            answerInputB.checked = false;
            answerInputC.checked = false;
            answerInputD.checked = false;
            answerInputA.disabled = false;
            answerInputB.disabled = false;
            answerInputC.disabled = false;
            answerInputD.disabled = false;
        }
        resetAll()
        let nowQuest = allQuestion[questionNumber];
        nowQuest = Object.values(nowQuest);
        containerScore.style.display = 'none';
        questionsNow.textContent = nowQuest[0];
        questionLabel.textContent = nowQuest[1]
        textAnswerA.textContent = nowQuest[2];
        textAnswerB.textContent = nowQuest[3];
        textAnswerC.textContent = nowQuest[4];
        textAnswerD.textContent = nowQuest[5];
    }
    catch(error){
        function displayAll(){
            questionLabel.textContent = "All Question Done!";
            submitBtn.style.display = 'none';
            answerInputA.style.display = 'none';
            answerInputB.style.display = 'none';
            answerInputC.style.display = 'none';
            answerInputD.style.display = 'none';
            textAnswerA.style.display = 'none';
            textAnswerB.style.display = 'none';
            textAnswerC.style.display = 'none';
            textAnswerD.style.display = 'none';
            questionsNow.style.display = 'none';
            displayA.style.display = 'none';
            displayB.style.display = 'none';
            displayC.style.display = 'none';
            displayD.style.display = 'none';
            containerChoice.style.display = 'none';  
            containerScore.style.display = 'contents';  
        }
        displayAll();
        function doMath(){
            const numQuestion = questionNumber;
            const corrects = correct;
            fractionNum.textContent = `${corrects}/${numQuestion} Corrects`;
            percentScore.textContent =`${Math.floor(100 * (corrects / numQuestion))}%`;
            const numbers = Math.floor(100 * (corrects / numQuestion));
            switch(true){
                case numbers === 100:
                    rating.textContent = 'Perfect Score!';
                    break;
                case numbers >= 90:
                    rating.textContent = 'Almost Perfect';
                    break;
                case numbers >= 70:
                    rating.textContent = 'Keep Going';
                    break;
                case numbers >= 50:
                    rating.textContent = 'Maybe Try Again?';
                    break;
                case numbers < 50:
                    rating.textContent = 'Please do it seriously!';
            }
        }
        doMath();
    }
}
