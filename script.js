const startBtn = document.getElementById("start-btn");
const modeSelect = document.getElementById("mode-select");
const themeSelect = document.getElementById("theme-select");
const menu = document.getElementById("menu");
const quizContainer = document.getElementById("quiz-container");
const themeTitle = document.getElementById("theme");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const backToMenuBtn = document.getElementById("back-to-menu-btn");
const timerProgress = document.getElementById("timer-progress");
const timerText = document.getElementById("timer-text");
const backToMenuDuringQuizBtn = document.getElementById("back-to-menu-during-quiz-btn");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let timer;
let timeLeft = 10;

const citations = [
  "« La nature ne fait rien en vain. » – Aristote",
  "« La Terre ne nous appartient pas, nous l'empruntons à nos enfants. » – Proverbe amérindien",
  "« L’homme n’a pas tissé la toile de la vie, il n’est qu’un fil. » – Proverbe amérindien",
  "« Il n’y a pas de passagers sur le vaisseau Terre. Nous sommes tous des membres de l’équipage. » – Marshall McLuhan",
  "« La Terre est ce que nous avons tous en commun. » – Wendell Berry",
  "« Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles. » – Sénèque",
  "« Nous n'héritons pas de la terre de nos ancêtres, nous l'empruntons à nos enfants. » – Antoine de Saint-Exupéry"
];

function startQuiz() {
  const mode = modeSelect.value;
  const theme = themeSelect.value;

  if (!theme) {
    alert("Veuillez sélectionner une thématique.");
    return;
  }

  menu.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToMenuDuringQuizBtn.classList.remove("hidden");

  if (theme === "aleatoire") {
    shuffledQuestions = shuffleArray(questions).slice(0, 10);
  } else {
    shuffledQuestions = shuffleArray(questions.filter(q => q.theme === theme)).slice(0, 10);
  }

  themeTitle.textContent = theme;
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();

  if (mode === "chronometre") {
    startTimer();
  } else {
    timerText.textContent = "";
    timerProgress.style.width = "0%";
  }
}

function showQuestion() {
  resetState();

  const question = shuffledQuestions[currentQuestionIndex];
  questionElement.textContent = question.question;

  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer");
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });

  if (modeSelect.value === "chronometre") {
    resetTimer();
    startTimer();
  }
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add("hidden");
  answersContainer.innerHTML = "";
  clearInterval(timer);
  timerText.textContent = "";
  timerProgress.style.width = "0%";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    score++;
  }

  Array.from(answersContainer.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  nextBtn.classList.remove("hidden");
  clearInterval(timer);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  backToMenuDuringQuizBtn.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultText.textContent = `Quiz terminé ! Votre score : ${score} / ${shuffledQuestions.length}`;

  // Supprime ancienne citation si elle existe
  const oldCitation = resultContainer.querySelector(".citation");
  if (oldCitation) oldCitation.remove();

  // Ajoute une citation aléatoire
  const cite = citations[Math.floor(Math.random() * citations.length)];
  const p = document.createElement("p");
  p.classList.add("citation");
  p.textContent = cite;
  resultContainer.appendChild(p);
}

function returnToMenu() {
  resultContainer.classList.add("hidden");
  menu.classList.remove("hidden");
  resultText.textContent = "";
  themeSelect.value = "";
  modeSelect.value = "normal";
  score = 0;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timeLeft = 10;
  timerText.textContent = `Temps restant : ${timeLeft}s`;
  timerProgress.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Temps restant : ${timeLeft}s`;
    timerProgress.style.width = `${(timeLeft / 10) * 100}%`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct === "true");
      });
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  timerText.textContent = `Temps restant : ${timeLeft}s`;
  timerProgress.style.width = "100%";
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", showNextQuestion);
backToMenuBtn.addEventListener("click", returnToMenu);
backToMenuDuringQuizBtn.addEventListener("click", returnToMenu);

// À personnaliser : questions
const questions = [
  {
    theme: "💧 Eau",
    question: "Quelle proportion d'eau douce est accessible à l’homme ?",
    answers: [
      { text: "10 %", correct: false },
      { text: "2,5 %", correct: true },
      { text: "50 %", correct: false },
      { text: "25 %", correct: false }
    ]
  },
  {
    theme: "🌤️ Climat",
    question: "Quelle activité humaine est la principale cause du changement climatique ?",
    answers: [
      { text: "L’agriculture", correct: false },
      { text: "La déforestation", correct: false },
      { text: "La combustion d’énergies fossiles", correct: true },
      { text: "L’élevage", correct: false }
    ]
  }
];
