const questions = [
  // 🌊 Eau
 {
  theme: "💧 Eau",
  question: "💧 Eau — Question 1 : Quelle est la proportion d’eau douce sur Terre ?",
  choices: ["3%", "10%", "25%", "50%"],
  answer: "3%"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 2 : Quel pourcentage de l’eau douce est gelée dans les glaciers ?",
  choices: ["10%", "30%", "50%", "70%"],
  answer: "70%"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 3 : Quel est le principal usage de l’eau douce dans le monde ?",
  choices: ["Usage domestique", "Industrie", "Agriculture", "Loisirs"],
  answer: "Agriculture"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 4 : Quelle activité consomme le plus d’eau dans un foyer ?",
  choices: ["Lave-linge", "Toilettes", "Douche", "Lave-vaisselle"],
  answer: "Douche"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 5 : Quelle est la source principale d’eau potable à Wallis-et-Futuna ?",
  choices: ["Lacs", "Eaux souterraines", "Rivières", "Eau de mer dessalée"],
  answer: "Eaux souterraines"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 6 : Que signifie le terme ‘nappe phréatique’ ?",
  choices: [
    "Une réserve d'eau salée",
    "Un type de pollution",
    "Une couche d'eau souterraine",
    "Un équipement de traitement de l'eau"
  ],
  answer: "Une couche d'eau souterraine"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 7 : Quelle est une des conséquences de la pollution des eaux ?",
  choices: ["Plus de biodiversité", "Moins d’inondations", "Prolifération d’algues toxiques", "Augmentation du débit"],
  answer: "Prolifération d’algues toxiques"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 8 : Quelle est la méthode la plus courante pour rendre l’eau potable ?",
  choices: ["Distillation", "Filtration mécanique", "Chloration", "Osmose inverse"],
  answer: "Chloration"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 9 : Quelle est la principale cause de la pénurie d’eau dans certaines régions ?",
  choices: ["Les tsunamis", "Le tourisme", "Le gaspillage", "Les barrages"],
  answer: "Le gaspillage"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 10 : En moyenne, combien de litres d’eau un adulte consomme-t-il par jour ?",
  choices: ["15 à 20 L", "50 à 100 L", "150 à 200 L", "500 L"],
  answer: "150 à 200 L"
},

  // ☀️ Climat
  {
    theme: "🌤️ Climat",
    question: "Quel est l’effet principal des gaz à effet de serre ?",
    choices: ["Refroidir la planète", "Réduire la pluie", "Augmenter la température", "Créer des nuages"],
    answer: "Augmenter la température",
  },
  {
    theme: "🌤️ Climat",
    question: "Quelle activité humaine contribue le plus au réchauffement climatique ?",
    choices: ["Lire un livre", "Utiliser les transports en commun", "Utiliser une voiture à essence", "Marcher à pied"],
    answer: "Utiliser une voiture à essence",
  },

  // 🌿 Biodiversité
  {
    theme: "🌱 Biodiversité",
    question: "Qu’est-ce que la biodiversité ?",
    choices: ["La variété des climats", "La diversité des espèces vivantes", "La quantité d’arbres", "L’eau potable"],
    answer: "La diversité des espèces vivantes",
  },
  {
    theme: "🌱 Biodiversité",
    question: "Pourquoi préserver les forêts ?",
    choices: ["Elles polluent", "Elles produisent de l’oxygène", "Elles consomment trop d’eau", "Elles bloquent le vent"],
    answer: "Elles produisent de l’oxygène",
  },

  // ♻️ Impacts
  {
    theme: "♻️ Impacts sur Wallis et Futuna",
    question: "Quel impact du changement climatique est déjà visible à Futuna ?",
    choices: ["La neige", "La montée des eaux", "La disparition des poissons", "Plus de tornades"],
    answer: "La montée des eaux",
  },
  {
    theme: "♻️ Impacts sur Wallis et Futuna",
    question: "Que risque un récif corallien quand l’océan se réchauffe ?",
    choices: ["Il devient plus coloré", "Il grandit", "Il meurt", "Il attire plus de poissons"],
    answer: "Il meurt",
  },

  // ⚡ Énergie
  {
    theme: "⚡ Énergie",
    question: "Quelle énergie est renouvelable ?",
    choices: ["Le charbon", "Le pétrole", "Le solaire", "Le gaz naturel"],
    answer: "Le solaire",
  },
  {
    theme: "⚡ Énergie",
    question: "Quelle action permet d’économiser de l’énergie ?",
    choices: ["Laisser la lumière allumée", "Débrancher les appareils inutilisés", "Faire couler de l’eau chaude", "Ouvrir les fenêtres en journée"],
    answer: "Débrancher les appareils inutilisés",
  },

  // 🗑️ Déchets
  {
    theme: "🗑️ Déchets",
    question: "Que faut-il faire avec les piles usagées ?",
    choices: ["Les jeter à la poubelle", "Les brûler", "Les enterrer", "Les rapporter dans un point de collecte"],
    answer: "Les rapporter dans un point de collecte",
  },
  {
    theme: "🗑️ Déchets",
    question: "Quel matériau met le plus de temps à se dégrader ?",
    choices: ["Papier", "Verre", "Carton", "Épluchures"],
    answer: "Verre",
  }
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
