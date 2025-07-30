const questions = [
  {theme: "💧 Eau", question: "💧 Eau — Question 1 : Quelle est la proportion d’eau douce sur Terre ?", choices: ["3%", "10%", "25%", "50%"], answer: "3%"},
  {theme: "💧 Eau", question: "💧 Eau — Question 2 : Quel pourcentage de l’eau douce est gelée dans les glaciers ?", choices: ["10%", "30%", "50%", "70%"], answer: "70%"},
  {theme: "💧 Eau", question: "💧 Eau — Question 3 : Quel est le principal usage de l’eau douce dans le monde ?", choices: ["Usage domestique", "Industrie", "Agriculture", "Loisirs"], answer: "Agriculture"},
  {theme: "💧 Eau", question: "💧 Eau — Question 4 : Quelle activité consomme le plus d’eau dans un foyer ?", choices: ["Lave-linge", "Toilettes", "Douche", "Lave-vaisselle"], answer: "Douche"},
  {theme: "💧 Eau", question: "💧 Eau — Question 5 : Quelle est la source principale d’eau potable à Wallis-et-Futuna ?", choices: ["Lacs", "Eaux souterraines", "Rivières", "Eau de mer dessalée"], answer: "Eaux souterraines"},
  {theme: "🌤️ Climat", question: "Quel est l’effet principal des gaz à effet de serre ?", choices: ["Refroidir la planète", "Réduire la pluie", "Augmenter la température", "Créer des nuages"], answer: "Augmenter la température"},
  {theme: "🌤️ Climat", question: "Quelle activité humaine contribue le plus au réchauffement climatique ?", choices: ["Lire un livre", "Transports en commun", "Voiture à essence", "Marcher"], answer: "Voiture à essence"},
  {theme: "🌱 Biodiversité", question: "Qu’est-ce que la biodiversité ?", choices: ["Variété des climats", "Diversité des espèces vivantes", "Quantité d’arbres", "Eau potable"], answer: "Diversité des espèces vivantes"},
  {theme: "⚡ Énergie", question: "Quelle énergie est renouvelable ?", choices: ["Charbon", "Pétrole", "Solaire", "Gaz naturel"], answer: "Solaire"},
  {theme: "🗑️ Déchets", question: "Que faut-il faire avec les piles usagées ?", choices: ["Les jeter", "Les brûler", "Les enterrer", "Les rapporter"], answer: "Les rapporter"},
  {theme: "♻️ Impacts sur Wallis et Futuna", question: "Quel impact est visible à Futuna ?", choices: ["La neige", "Montée des eaux", "Disparition des poissons", "Tornades"], answer: "Montée des eaux"}
];

const citations = [
  "“La Terre ne nous appartient pas, nous l’empruntons à nos enfants.” – Proverbe amérindien",
  "“Il n’y a pas de passagers sur le vaisseau Terre. Nous sommes tous des membres de l’équipage.” – Marshall McLuhan",
  "“Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.” – Proverbe chinois",
  "“Sauver notre planète, c’est sauver notre maison.” – Leonardo DiCaprio",
  "“Nous n'héritons pas de la Terre de nos ancêtres, nous l'empruntons à nos enfants.” – Antoine de Saint-Exupéry",
  "“Chaque geste compte, aussi petit soit-il.” – Anonyme",
  "“Tou haofaki te kahau o te tou'u fanau.” – Wallisien",
  "“Fakaʻapaʻapa ki he fenua mo e vai.” – Futunien"
];

const modeSelect = document.getElementById("mode-select");
const themeSelect = document.getElementById("theme-select");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const menu = document.getElementById("menu");
const quizContainer = document.getElementById("quiz-container");
const themeDisplay = document.getElementById("theme");
const questionDisplay = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const timerDisplay = document.getElementById("timer-display");
const timerProgress = document.getElementById("timer-progress");
const timerBar = document.getElementById("timer-bar");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const citationEl = document.getElementById("citation");
const backToMenuBtn = document.getElementById("back-to-menu-btn");
const backToMenuDuringQuizBtn = document.getElementById("back-to-menu-during-quiz-btn");

let filteredQuestions = [], currentQuestionIndex = 0, score = 0, timerId, timeLeft, currentMode = "normal";
const MAX_TIME = 20;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

startBtn.addEventListener("click", () => {
  const t = themeSelect.value;
  if (!t) return alert("Choisis une thématique !");
  currentMode = modeSelect.value;
  filteredQuestions = t === "aleatoire" ? [...questions] : questions.filter(q => q.theme === t);
  shuffle(filteredQuestions);
  score = 0;
  currentQuestionIndex = 0;
  menu.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToMenuDuringQuizBtn.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  citationEl.textContent = "";
  updateThemeDisplay(t);
  showQuestion();
});

function updateThemeDisplay(t) {
  themeDisplay.textContent = t === "aleatoire" ? "🎲 Aléatoire" : `Thématique : ${t}`;
}

function showQuestion() {
  clearInterval(timerId);
  answersContainer.innerHTML = "";
  nextBtn.classList.add("hidden");
  if (currentQuestionIndex >= filteredQuestions.length) return showResult();
  const q = filteredQuestions[currentQuestionIndex];
  questionDisplay.textContent = q.question;
  if (currentMode === "battle") {
    timerBar.classList.remove("hidden");
    startTimer();
  } else {
    timerBar.classList.add("hidden");
    timerDisplay.style.display = "none";
  }
  q.choices.forEach(c => {
    const b = document.createElement("button");
    b.textContent = c;
    b.addEventListener("click", () => selectAnswer(c));
    answersContainer.appendChild(b);
  });
}

function startTimer() {
  timerDisplay.style.display = "block";
  timeLeft = MAX_TIME;
  timerProgress.style.width = "100%";
  timerDisplay.textContent = `⏳ ${timeLeft}s`;
  timerId = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏳ ${timeLeft}s`;
    timerBar.style.width = `${(timeLeft/MAX_TIME)*100}%`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      selectAnswer("");
    }
  }, 1000);
}

function selectAnswer(chosen) {
  clearInterval(timerId);
  const correct = filteredQuestions[currentQuestionIndex].answer;
  Array.from(answersContainer.children).forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
    if (chosen && b.textContent === chosen && chosen !== correct) b.classList.add("incorrect");
  });
  if (chosen === correct) score++;
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

function showResult() {
  quizContainer.classList.add("hidden");
  backToMenuDuringQuizBtn.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultText.textContent = `Quiz terminé ! Score : ${score} / ${filteredQuestions.length}`;
  const rand = citations[Math.floor(Math.random() * citations.length)];
  citationEl.textContent = rand;
}

backToMenuDuringQuizBtn.addEventListener("click", () => {
  if (confirm("Quitter le quiz ?")) resetQuiz();
});

backToMenuBtn.addEventListener("click", resetQuiz);

function resetQuiz() {
  clearInterval(timerId);
  score = 0;
  currentQuestionIndex = 0;
  filteredQuestions = [];
  menu.classList.remove("hidden");
  quizContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
  backToMenuDuringQuizBtn.classList.add("hidden");
  themeSelect.value = "";
}
