let questions = [
    {
        "question": "Wie lange dauert ein Tag auf dem Mars?",
        "answer_1": "24 Stunden",
        "answer_2": "25 Stunden",
        "answer_3": "26 Stunden",
        "answer_4": "27 Stunden",
        "right_answer": 3
    },
    {
        "question": "Welches Tier gilt als das klügste auf der Erde?",
        "answer_1": "Der Elefant",
        "answer_2": "Der Delphin",
        "answer_3": "Der Gorilla",
        "answer_4": "Der Papagei",
        "right_answer": 2
    },
    {
        "question": "Wie heißt das kleinste Land der Welt?",
        "answer_1": "Andorra",
        "answer_2": "San Marino",
        "answer_3": "Monaco",
        "answer_4": "Vatikanstadt",
        "right_answer": 4
    },
    {
        "question": "Welches Land hat die längste Küstenlinie?",
        "answer_1": "Kanada",
        "answer_2": "Russland",
        "answer_3": "Australien",
        "answer_4": "USA",
        "right_answer": 1
    },
    {
        "question": "Was ist die höchste Note im westlichen Musiksystem?",
        "answer_1": "C",
        "answer_2": "D",
        "answer_3": "G",
        "answer_4": "A",
        "right_answer": 4
    },
    {
        "question": "Wie viele Augen hat ein Bien?",
        "answer_1": "2",
        "answer_2": "4",
        "answer_3": "6",
        "answer_4": "8",
        "right_answer": 3
    },
    {
        "question": "Wie viele Menschen haben bis heute den Mount Everest bestiegen?",
        "answer_1": "weniger als 500",
        "answer_2": "weniger als 1000",
        "answer_3": "weniger als 2000",
        "answer_4": "weniger als 2500",
        "right_answer": 2
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

let audioSuccess = new Audio('audio/success.mp3');
let audioFail = new Audio('audio/wrong.mp3');

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
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressBar').innerHTML = `${percent}%`;
        document.getElementById('progressBar').style = `width: ${percent}%;`;
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
        audioSuccess.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnser).parentNode.classList.add('bg-success');
        audioFail.play();
    }

    document.getElementById('nextBtn').disabled = false;
    document.getElementById('noClick').classList.add('noClick');
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('noClick').classList.remove('noClick');
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