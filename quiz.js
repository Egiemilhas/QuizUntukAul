function submitQuiz() {
  const answers = {
    question1: document.getElementById('question1').value.trim(),
    question2: document.getElementById('question2').value.trim(),
    question3: document.getElementById('question3').value.trim(),
  };

  const correctAnswers = {
    question1: 'b',
    question2: 'b',
    question3: 'a',
  };

  let score = 0;

  for (const question in answers) {
    if (answers[question].toLowerCase() === correctAnswers[question]) {
      score++;
    }
  }

  displayResult(score);
}

function displayResult(score) {
  const resultContainer = document.getElementById('result-container');
  const quizResult = document.getElementById('quiz-result');

  quizResult.textContent = `Ayang mendapatkan ${score} dari 3 pertanyaan benar! Happy Anniversary Sayangku! 🎉`;
  resultContainer.style.display = 'block';
}
