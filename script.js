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
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 11 : Pourquoi est-il important d’économiser l’eau potable ?",
  choices: ["Pour réduire la facture", "Pour préserver la ressource", "Pour éviter la sécheresse", "Toutes ces réponses"],
  answer: "Toutes ces réponses"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 12 : Quelle activité consomme le plus d’eau à la maison ?",
  choices: ["La vaisselle", "La lessive", "Les toilettes", "La douche"],
  answer: "Les toilettes"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 13 : Quelle est la principale source d’eau potable sur Terre ?",
  choices: ["Les glaciers", "Les nappes phréatiques", "Les océans", "Les lacs"],
  answer: "Les nappes phréatiques"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 14 : Quelle est la quantité moyenne d’eau utilisée par jour par une personne en France ?",
  choices: ["50 litres", "100 litres", "150 litres", "200 litres"],
  answer: "150 litres"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 15 : Que signifie le terme 'eau non potable' ?",
  choices: ["Eau traitée", "Eau contaminée", "Eau qui ne doit pas être bue", "Eau minérale"],
  answer: "Eau qui ne doit pas être bue"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 16 : Quelle est la meilleure méthode pour économiser l’eau au jardin ?",
  choices: ["Utiliser un tuyau", "Arroser à midi", "Utiliser de l’eau de pluie", "Arroser tous les jours"],
  answer: "Utiliser de l’eau de pluie"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 17 : Quelle activité industrielle consomme beaucoup d’eau ?",
  choices: ["Le textile", "L’agriculture", "La fabrication de voitures", "Toutes"],
  answer: "Toutes"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 18 : Comment appelle-t-on un manque prolongé d’eau ?",
  choices: ["Une crue", "Une sécheresse", "Une inondation", "Un glissement de terrain"],
  answer: "Une sécheresse"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 19 : Quel est le rôle d’une station d’épuration ?",
  choices: ["Produire de l’eau potable", "Nettoyer les vêtements", "Traiter les eaux usées", "Fabriquer du savon"],
  answer: "Traiter les eaux usées"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 20 : Où se trouve la majorité de l’eau douce sur Terre ?",
  choices: ["Dans les rivières", "Dans les océans", "Dans les glaciers", "Dans l’air"],
  answer: "Dans les glaciers"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 21 : Quel est le pourcentage d’eau douce accessible sur Terre ?",
  choices: ["Moins de 1%", "5%", "10%", "25%"],
  answer: "Moins de 1%"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 22 : Quelle est la cause principale de pollution de l’eau ?",
  choices: ["Les déchets plastiques", "Les pesticides", "Les rejets industriels", "Toutes ces réponses"],
  answer: "Toutes ces réponses"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 23 : Quelle action est la plus efficace pour réduire sa consommation d’eau ?",
  choices: ["Prendre une douche au lieu d’un bain", "Faire la vaisselle à la main", "Utiliser un seau pour laver la voiture", "Laver les légumes avec un jet d’eau"],
  answer: "Prendre une douche au lieu d’un bain"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 24 : Quelle couleur indique une fuite sur une chasse d’eau ?",
  choices: ["Bleu", "Rouge", "Incolore", "On ne peut pas la voir"],
  answer: "On ne peut pas la voir"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 25 : Comment l’eau arrive-t-elle dans les foyers ?",
  choices: ["Par les égouts", "Par un réservoir personnel", "Par les canalisations publiques", "Par la pluie"],
  answer: "Par les canalisations publiques"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 26 : Comment s’appelle le cycle naturel de l’eau ?",
  choices: ["Cycle hydrologique", "Cycle vital", "Cycle de vie", "Cycle écologique"],
  answer: "Cycle hydrologique"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 27 : Quel appareil permet de mesurer la consommation d’eau ?",
  choices: ["Un baromètre", "Un compteur d’eau", "Un voltmètre", "Un hygromètre"],
  answer: "Un compteur d’eau"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 28 : Quelle solution permet d’économiser l’eau dans les toilettes ?",
  choices: ["Remplir la chasse", "Utiliser une bouteille dans le réservoir", "Tirer plusieurs fois", "Augmenter le débit"],
  answer: "Utiliser une bouteille dans le réservoir"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 29 : Quel est l’effet du réchauffement climatique sur les ressources en eau ?",
  choices: ["Aucun effet", "Augmente les réserves", "Crée plus de pluie", "Diminue les réserves"],
  answer: "Diminue les réserves"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 30 : Quel animal dépend particulièrement des zones humides ?",
  choices: ["Le crocodile", "La grenouille", "Le lion", "Le cerf"],
  answer: "La grenouille"
},
{
  theme: "💧 Eau",
  question: "💧 Eau — Question 100 : Quelle habitude quotidienne permet de préserver l’eau ?",
  choices: ["Laisser couler le robinet en se brossant les dents", "Fermer le robinet quand on ne l’utilise pas", "Prendre des bains quotidiens", "Utiliser plus de savon"],
  answer: "Fermer le robinet quand on ne l’utilise pas"
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
const timerDisplay = document.getElementById("timer");
const timerProgress = document.getElementById("timer-progress");
const backToMenuDuringQuizBtn = document.getElementById("back-to-menu-during-quiz-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const backToMenuBtn = document.getElementById("back-to-menu-btn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerId;
let timeLeft;
let currentMode = "normal";
const MAX_TIME = 20;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

startBtn.addEventListener("click", () => {
  const theme = themeSelect.value;
  if (!theme) return alert("Veuillez choisir une thématique !");
  currentMode = modeSelect.value;
  score = 0;
  currentQuestionIndex = 0;
  if (theme === "aleatoire") shuffledQuestions = [...questions];
  else shuffledQuestions = questions.filter(q => q.theme === theme);
  shuffle(shuffledQuestions);
  menu.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToMenuDuringQuizBtn.classList.remove("hidden");
  updateThemeDisplay(theme);
  showQuestion();
});

function updateThemeDisplay(theme) {
  themeDisplay.textContent = theme === "aleatoire"
    ? "🎲 Thématique : Aléatoire"
    : `Thématique : ${theme}`;
}

function startTimer() {
  if (currentMode === "normal") {
    timerDisplay.style.display = "none";
    return;
  }
  timerDisplay.style.display = "block";
  timeLeft = MAX_TIME;
  timerProgress.style.width = "100%";
  timerDisplay.textContent = `⏳ Temps restant : ${timeLeft}s`;
  timerId = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏳ Temps restant : ${timeLeft}s`;
    timerProgress.style.width = `${(timeLeft / MAX_TIME) * 100}%`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      disableAnswers();
      revealCorrect();
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function clearTimer() {
  clearInterval(timerId);
}

function showQuestion() {
  clearTimer();
  answersContainer.innerHTML = "";
  nextBtn.classList.add("hidden");
  const q = shuffledQuestions[currentQuestionIndex];
  questionDisplay.textContent = q.question;
  startTimer();
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(choice));
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(chosen) {
  clearTimer();
  const correct = shuffledQuestions[currentQuestionIndex].answer;
  Array.from(answersContainer.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add("correct");
    if (btn.textContent === chosen && chosen !== correct) btn.classList.add("incorrect");
  });
  if (chosen === correct) score++;
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) showQuestion();
  else showResult();
});

function showResult() {
  quizContainer.classList.add("hidden");
  backToMenuDuringQuizBtn.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultText.textContent = `Quiz terminé ! Votre score : ${score} / ${shuffledQuestions.length}`;
  const cite = citations[Math.floor(Math.random() * citations.length)];
  const p = document.createElement("p");
  p.style.fontStyle = "italic";
  p.style.marginTop = "10px";
  p.textContent = cite;
  resultContainer.appendChild(p);
}

function disableAnswers() {
  Array.from(answersContainer.children).forEach(btn => btn.disabled = true);
}

function revealCorrect() {
  const correct = shuffledQuestions[currentQuestionIndex].answer;
  Array.from(answersContainer.children)
    .find(btn => btn.textContent === correct)
    .classList.add("correct");
}

backToMenuDuringQuizBtn.addEventListener("click", () => {
  if (confirm("Quitter le quiz et perdre la progression ?")) resetQuiz();
});

backToMenuBtn.addEventListener("click", resetQuiz);

function resetQuiz() {
  clearTimer();
  score = 0;
  currentQuestionIndex = 0;
  shuffledQuestions = [];
  menu.classList.remove("hidden");
  quizContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
  backToMenuDuringQuizBtn.classList.add("hidden");
  themeSelect.value = "";
  const extra = resultContainer.querySelector("p:nth-child(2)");
  if (extra) extra.remove();
}
