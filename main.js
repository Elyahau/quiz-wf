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
    },
    {
      question: "Quel est l'impact du plastique dans l'océan ?",
      answers: ["Il aide les poissons à respirer", "Il sert d’abri aux coraux", "Il pollue et tue des espèces marines", "Aucun impact"],
      correct: 2,
      explication: "Le plastique se dégrade lentement, et nuit gravement à la faune marine qui peut l’ingérer ou s’y retrouver piégée."
    }
  ]
};

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
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
const menu = document.getElementById("menu");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timerDuration = 15;

startBtn.addEventListener("click", () => {
  const selectedTheme = themeSelect.value;
  if (!selectedTheme) return alert("Choisis une thématique !");
  startQuiz(selectedTheme);
});

nextBtn.addEventListener("click", () => showQuestion(++currentQuestionIndex));
backToMenuBtn.addEventListener("click", () => switchToMenu());
backToMenuDuringQuizBtn.addEventListener("click", () => switchToMenu());

function fadeOut(element, callback) {
  element.classList.remove('fade-in');
  element.classList.add('fade-out');
  let called = false;

  function done() {
    if (called) return;
    called = true;
    callback();
  }

  element.addEventListener('animationend', () => {
    element.classList.add('hidden');
    done();
  });

  setTimeout(() => {
    element.classList.add('hidden');
    done();
  }, 600);
}

function fadeIn(element) {
  element.classList.remove('hidden');
  void element.offsetWidth;
  element.classList.remove('fade-out');
  element.classList.add('fade-in');
}

function startQuiz(selectedTheme) {
  currentQuestions = selectedTheme === "aleatoire"
    ? Object.values(questions).flat().sort(() => 0.5 - Math.random()).slice(0, 5)
    : [...(questions[selectedTheme] || [])];

  if (currentQuestions.length === 0) {
    alert("Pas de questions disponibles pour ce thème.");
    return;
  }

  themeElement.textContent = selectedTheme;
  score = 0;
  currentQuestionIndex = 0;

  fadeOut(menu, () => {
    menu.classList.add("hidden");
    fadeIn(quizContainer);
    backToMenuDuringQuizBtn.classList.remove("hidden");
    showQuestion(currentQuestionIndex);
  });
}

function showQuestion(index) {
  clearTimeout(timer);
  nextBtn.classList.add("hidden");
  explicationElement.classList.add("hidden");
  explicationElement.textContent = "";
  timerProgress.style.width = "100%";

  if (index >= currentQuestions.length) {
    return showResult();
  }

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
  clearTimeout(timer);
  const currentQ = currentQuestions[currentQuestionIndex];

  if (selectedIndex === currentQ.correct) {
    score++;
    if (btn) btn.classList.add("correct");
  } else {
    if (btn) btn.classList.add("incorrect");
    const correctBtn = answersContainer.children[currentQ.correct];
    if (correctBtn) correctBtn.classList.add("correct");
  }

  Array.from(answersContainer.children).forEach(b => b.disabled = true);
  nextBtn.classList.remove("hidden");

  if (currentQ.explication) {
    explicationElement.textContent = "💡 " + currentQ.explication;
    explicationElement.classList.remove("hidden");
  }
}

function showResult() {
  fadeOut(quizContainer, () => {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultText.textContent = `Tu as obtenu ${score} / ${currentQuestions.length} bonnes réponses.`;
    citationText.textContent = getCitation();
    fadeIn(resultContainer);
    backToMenuDuringQuizBtn.classList.add("hidden");
  });
}

function switchToMenu() {
  clearTimeout(timer);
  backToMenuDuringQuizBtn.classList.add("hidden");

  const showMenu = () => {
    fadeIn(menu);
  };

  if (!quizContainer.classList.contains("hidden")) {
    fadeOut(quizContainer, () => {
      quizContainer.classList.add("hidden");
      showMenu();
    });
  } else if (!resultContainer.classList.contains("hidden")) {
    fadeOut(resultContainer, () => {
      resultContainer.classList.add("hidden");
      showMenu();
    });
  } else {
    showMenu();
  }
}

function getCitation() {
  const citations = [
    "« La Terre ne nous appartient pas, nous l’empruntons à nos enfants. » — Proverbe amérindien",
    "« Haofaki te natula kitou kahau. » — wallisien",
    "« Agis local, pense global. »",
    "« La nature suffit à tout. » — Montaigne",
    "« Faka'apa'apa ki he fenua mo e vai. » — Futunien",
    "«Le changement climatique est le défi de notre génération. » – Barack Obama",
    "«La nature n’est pas un endroit à visiter, c’est chez nous. » – Gary Snyder",
    "«L’environnement, c’est tout ce que nous ne possédons pas encore. » – Albert Einstein",
    "«Chaque petit geste compte pour un grand changement. »",
    "«Wallis et Futuna, un trésor naturel à préserver. »",
    "«La biodiversité, c’est la richesse du vivant. Protégeons-la. »",
    "« Si vous pensez que l’environnement est moins important que l’économie, essayez de retenir votre souffle pendant que vous comptez votre argent. »"
  ];
  return citations[Math.floor(Math.random() * citations.length)];
}

function startTimer() {
  let duration = timerDuration;
  timerProgress.style.width = "100%";

  function updateTimer() {
    duration--;
    timerProgress.style.width = (duration / timerDuration * 100) + "%";

    if (duration > 0) {
      timer = setTimeout(updateTimer, 1000);
    } else {
      handleAnswer(-1, null);
    }
  }
  updateTimer();
}
