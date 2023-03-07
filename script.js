let questions = [
    {
        "question": "Koji je glavni grad Srbije?",
        "answer_1": "Kraljevo",
        "answer_2": "S.Palanka",
        "answer_3": "Mladenovac",
        "answer_4": "Beograd",
        "right_answer": 4
    },
    {
        "question": "Koja reka protice kroz Srbiju?",
        "answer_1": "Dunav",
        "answer_2": "Rajna",
        "answer_3": "Volga",
        "answer_4": "Moraca",
        "right_answer": 1
    },
    {
        "question": "Koji Srbin je izumeo struju?",
        "answer_1": "J.J. Zmaj",
        "answer_2": "Nikola Tesla",
        "answer_3": "Milutin Milankovic",
        "answer_4": "Ivo Andric",
        "right_answer": 2
    },
    {
        "question": "Ko je najuspesniji srpski Teniser?",
        "answer_1": "Novak Djokovic",
        "answer_2": "Janko Tipsarevic",
        "answer_3": "Viktor Troicki",
        "answer_4": "Nenad Zimonjic",
        "right_answer": 1
    },
    {
        "question": "Koja Srpska rec se koristi svuda u svetu?",
        "answer_1": "Kafa",
        "answer_2": "Vampir",
        "answer_3": "Rakija",
        "answer_4": "Sunce",
        "right_answer": 2
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('questionsLength').innerHTML = questions.length;
    showQuestion();

}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('headerCardFoto').style = 'display: none !important';
        document.getElementById('endscreenStyle').classList.add('endscreenStyle');
        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    } else {
        let question = questions[currentQuestion];

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnser = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnser).parentNode.classList.add('bg-success');
    }

    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    resetAnswerBtn();
    showQuestion();
}

function resetAnswerBtn() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}