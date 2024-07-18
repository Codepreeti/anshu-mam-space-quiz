document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const restartButton = document.getElementById('restart-btn');
    const resultContainer = document.getElementById('result');

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(index) {
        questions.forEach(function(question, i) {
            if (i === index) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        });

        if (index === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block';
        }

        if (index === questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showResult() {
        resultContainer.innerHTML = `Your score is ${score}`;
        submitButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion(currentQuestionIndex);
        resultContainer.innerHTML = '';
        restartButton.style.display = 'none';
    }

    function calculateScore() {
        const form = document.getElementById('quiz-form');
        const answers = form.querySelectorAll('input:checked');
        answers.forEach(function(answer) {
            if (answer.value === 'a') {
                score += 5;
            } else {
                score -= 1;
            }
        });
        showResult();
    }

    showQuestion(currentQuestionIndex);

    prevButton.addEventListener('click', function() {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    });

    nextButton.addEventListener('click', function() {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    });

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        calculateScore();
    });

    restartButton.addEventListener('click', function() {
        restartQuiz();
    });
});
