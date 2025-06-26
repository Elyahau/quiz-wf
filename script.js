const questions = [
  { theme: "💧 Eau", question: "💧 Eau — Question 28 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌱 Biodiversité", question: "🌱 Biodiversité — Question 10 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌤️ Climat", question: "🌤️ Climat — Question 18 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "💧 Eau", question: "💧 Eau — Question 6 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "♻️ Impacts sur Wallis et Futuna", question: "♻️ Impacts — Question 15 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "♻️ Impacts sur Wallis et Futuna", question: "♻️ Impacts sur Wallis et Futuna — Question 11 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌤️ Climat", question: "🌤️ Climat — Question 1 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "💧 Eau", question: "💧 Eau — Question 3 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "♻️ Impacts sur Wallis et Futuna", question: "♻️ Impacts sur Wallis et Futuna — Question 27 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌤️ Climat", question: "🌤️ Climat — Question 22 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌱 Biodiversité", question: "🌱 Biodiversité — Question 19 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "💧 Eau", question: "💧 Eau — Question 36 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌱 Biodiversité", question: "🌱 Biodiversité — Question 29 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "♻️ Impacts sur Wallis et Futuna", question: "♻️ Impacts sur Wallis et Futuna — Question 40 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "⚡ Énergie", question: "⚡ Énergie — Question 20 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
  { theme: "🌱 Biodiversité", question: "🌱 Biodiversité — Question 23 : Exemple de question ?", choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"], answer: "Réponse A" },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
let shuffledQuestions = [];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  document.getElementById("introAudio").play();
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("start-btn").classList.add("hidden");

  shuffledQuestions = shuffle(questions).slice(0, 10);
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 20;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);

  const questionObj = shuffledQuestions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const themeEl = document.getElementById("theme");

  questionEl.textContent = questionObj.question;
  themeEl.textContent = questionObj.theme;
  answersEl.innerHTML = "";

  const mixedChoices = shuffle(questionObj.choices);

  mixedChoices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => selectAnswer(choice);
    answersEl.appendChild(button);
  });

  document.getElementById("next-btn").classList.add("hidden");
}

function nextQuestion() {
  clearInterval(timer);
  currentQuestionIndex++;
  document.getElementById("next-btn").classList.add("hidden");

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function selectAnswer(selectedChoice) {
  const correct = shuffledQuestions[currentQuestionIndex].answer;

  clearInterval(timer);
  document.getElementById("next-btn").classList.remove("hidden");

  if (selectedChoice === correct) {
    score++;
    document.getElementById("correctSound").play();
  } else {
    document.getElementById("wrongSound").play();
  }

  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selectedChoice) {
      btn.classList.add("incorrect");
    }
  });
}

function updateTimerDisplay() {
  document.getElementById("timer").textContent = `⏰ Temps restant : ${timeLeft} sec`;
}

function showScore() {
  clearInterval(timer);
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>Ton score est ${score} sur ${shuffledQuestions.length}.</h2>
    <button id="restart-btn">Rejouer</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
  document.getElementById("outroAudio").play();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = shuffle(questions).slice(0, 10);
  const container = document.getElementById("quiz-container");
  container.classList.remove("hidden");
  container.innerHTML = `
    <div id="theme" style="font-weight: bold; margin-bottom: 10px;"></div>
    <div id="question" style="font-size: 20px; margin-bottom: 15px;"></div>
    <div id="answers"></div>
    <div id="timer" style="font-weight:bold; margin-top:10px; color:#2c6e49;"></div>
    <button id="next-btn" class="hidden">Suivante</button>
  `;

  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  showQuestion();
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
