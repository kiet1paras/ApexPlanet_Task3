const quizData = [
  {
    question: "Which is the fastest land animal in the world?",
    options: ["Cheetah", "Lion", "Horse", "Leopard"],
    correct: "Cheetah"
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Elephant", "Tiger", "Lion", "Panther"],
    correct: "Lion"
  },
  {
    question: "Which bird is famous for its colorful feathers and courtship dance?",
    options: ["Peacock", "Parrot", "Flamingo", "Eagle"],
    correct: "Peacock"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: "Blue Whale"
  },
  {
    question: "Which animal is known for changing its skin color to blend with surroundings?",
    options: ["Octopus", "Chameleon", "Frog", "Gecko"],
    correct: "Chameleon"
  },
  {
    question: "What is the only mammal capable of true flight?",
    options: ["Flying Squirrel", "Bat", "Owl", "Hawk"],
    correct: "Bat"
  },
  {
    question: "Which animal can sleep while standing up?",
    options: ["Horse", "Kangaroo", "Zebra", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "Which is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Ostrich", "Camel"],
    correct: "Giraffe"
  },
  {
    question: "Which animal is known to have the longest lifespan?",
    options: ["Elephant", "Tortoise", "Whale Shark", "Macaw Parrot"],
    correct: "Tortoise"
  },
  {
    question: "Which animal is capable of regenerating lost limbs?",
    options: ["Starfish", "Snake", "Crocodile", "Salamander"],
    correct: "Starfish"
  }
];

let currentQuestion = 0;
let score = 0;

const quizContent = document.getElementById("quiz-content");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContent.innerHTML = `
    <h2>${q.question}</h2>
    <div class="options">
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="answer" value="${opt}">
          ${opt}
        </label>
      `).join('')}
    </div>
  `;
}

function showResult() {
  quizContent.innerHTML = `
    <h2>Finish</h2>
    <div class="result">${score} / ${quizData.length} answered correctly!</div>
  `;
  nextBtn.textContent = "Start Over";
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected && nextBtn.textContent !== "Start Over") {
    alert("Please select an answer!");
    return;
  }

  if (nextBtn.textContent === "Start Over") {
    currentQuestion = 0;
    score = 0;
    nextBtn.textContent = "Next Question";
    loadQuestion();
    return;
  }

  if (selected.value === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
