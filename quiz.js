const questions = {
  "💧 Eau": [
    {
      question: "Quelle est la proportion d'eau douce disponible sur Terre ?",
      answers: ["10%", "2,5%", "25%", "50%"],
      correct: 1,
      explication: "Seulement 2,5 % de l'eau sur Terre est douce. Le reste est salé ou difficilement accessible."
    },
    {
      question: "Quelle activité consomme le plus d’eau à Wallis ?",
      answers: ["L’agriculture", "L'industrie", "Les foyers", "L’élevage"],
      correct: 0,
      explication: "L’agriculture utilise l’eau pour l’irrigation, ce qui en fait le secteur le plus consommateur."
    }
  ],
  "🌤️ Climat": [
    {
      question: "Quel gaz est principalement responsable du réchauffement climatique ?",
      answers: ["Oxygène", "Méthane", "CO₂", "Azote"],
      correct: 2,
      explication: "Le dioxyde de carbone (CO₂), issu de la combustion des énergies fossiles, est le principal responsable."
    },
    {
      question: "Quelle est la principale cause du changement climatique ?",
      answers: ["La rotation de la Terre", "Les émissions de gaz à effet de serre", "Les marées lunaires", "Les volcans"],
      correct: 1,
      explication: "Les activités humaines émettent des gaz à effet de serre qui piègent la chaleur dans l’atmosphère."
    }
  ],
  "🌱 Biodiversité": [
    {
      question: "Pourquoi la biodiversité est-elle importante ?",
      answers: [
        "Elle rend les paysages jolis",
        "Elle permet l’équilibre des écosystèmes",
        "Elle réduit le CO₂",
        "Elle fournit des ordinateurs"
      ],
      correct: 1,
      explication: "La biodiversité assure les services écologiques comme la pollinisation, la qualité de l’air, etc."
    }
  ],
  "♻️ Impacts sur Wallis et Futuna": [
    {
      question: "Quelle est une conséquence visible du changement climatique à Futuna ?",
      answers: ["Fonte des glaciers", "Hausse du niveau de la mer", "Neige", "Tremblements de terre"],
      correct: 1,
      explication: "L’élévation du niveau de la mer menace les zones côtières et les habitats à Futuna."
    }
  ],
  "⚡ Énergie": [
    {
      question: "Quelle énergie renouvelable est la plus adaptée à WF ?",
      answers: ["Charbon", "Solaire", "Pétrole", "Gaz"],
      correct: 1,
      explication: "Le solaire est une ressource abondante à Wallis et Futuna, idéale pour produire de l’énergie propre."
    }
  ],
  "🗑️ Déchets": [
    {
      question: "Que peut-on faire des déchets organiques ?",
      answers: ["Les brûler", "Les jeter en mer", "Les composter", "Les enterrer sans traitement"],
      correct: 2,
      explication: "Le compostage transforme les déchets organiques en engrais naturel pour les sols."
    }
  ]
};

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const modeSelect = document.getElementById("mode-select");
const themeSelect = document.getElementById("theme-select");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const answersContainer = document.getElementById("answers");
const questionElement = document.getElementById("question");
const themeElement = document.getElementById("theme");
const resultText = document.getElementById("result-text");
const citationText = document.getElementById("citation");
const timerProgress = document.getElementById("timer-progress");
const backToMenuBtn = document.getElementById("back-to-menu-btn");
const backToMenuDuringQuizBtn = document.getElementById("back-to-menu-during-quiz-btn");
const explicationElement = document.getElementById("explication");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => showQuestion(++currentQuestionIndex));
backToMenuBtn.addEventListener("click", resetQuiz);
backToMenuDuringQuizBtn.addEventListener("click", resetQuiz);

function startQuiz() {
  const selectedTheme = themeSelect.value;
  if (!selectedTheme) return alert("Choisis une thématique !");
  currentQuestions = selectedTheme === "aleatoire"
    ? Object.values(questions).flat().sort(() => 0.5 - Math.random()).slice(0, 5)
    : [...questions[selectedTheme]];

  themeElement.textContent = selectedTheme;
  document.getElementById("menu").classList.add("hidden");
  quizContainer.classList.remove("hidden");
  backToMenuDuringQuizBtn.classList.remove("hidden");

  currentQuestionIndex = 0;
  score = 0;
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  clearTimeout(timer);
  nextBtn.classList.add("hidden");

  explicationElement.classList.add("hidden");
  explicationElement.textContent = "";

  if (index >= currentQuestions.length) return showResult();
  const q = currentQuestions[index];

  questionElement.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => handleAnswer(i, btn);
    answersContainer.appendChild(btn);
  });

  startTimer();
}

function handleAnswer(selectedIndex, btn) {
  const currentQ = currentQuestions[currentQuestionIndex];

  if (selectedIndex === currentQ.correct) {
    score++;
    if (btn) btn.classList.add("correct");
  } else {
    if (btn) btn.classList.add("incorrect");
    const correctBtn = answersContainer.children[currentQ.correct];
    correctBtn.classList.add("correct");
  }

  Array.from(answersContainer.children).forEach(b => b.disabled = true);
  nextBtn.classList.remove("hidden");

  if (currentQ.explication) {
    explicationElement.textContent = "💡 " + currentQ.explication;
    explicationElement.classList.remove("hidden");
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  resultText.textContent = `Tu as obtenu ${score} / ${currentQuestions.length} bonnes réponses.`;
  citationText.textContent = getCitation();
  backToMenuDuringQuizBtn.classList.add("hidden");
}

function resetQuiz() {
  resultContainer.classList.add("hidden");
  quizContainer.classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}

function getCitation() {
  const citations = [
    "« La Terre ne nous appartient pas, nous l’empruntons à nos enfants. » — Proverbe amérindien",
    "« Haofaki te natula kitou kahau. » — wallisien",
    "« Agis local, pense global. »",
    "« La nature suffit à tout. » — Montaigne",
    "« Faka'apa'apa ki he fenua mo e vai. » — Futunien",
    "« Si vous pensez que l’environnement est moins important que l’économie, essayez de retenir votre souffle pendant que vous comptez votre argent. »"
  ];
  return citations[Math.floor(Math.random() * citations.length)];
}

function startTimer() {
  let duration = 15;
  function updateTimer() {
    timerProgress.style.width = `${(duration / 15) * 100}%`;
    if (duration-- > 0) {
      timer = setTimeout(updateTimer, 1000);
    } else {
      handleAnswer(-1, null);
    }
  }
  updateTimer();
}
