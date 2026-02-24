const grid = document.getElementById("grid");
const generateBoardButton = document.getElementById("generateBoardButton");

// Create grid from question array
function renderGrid(questions) {
  grid.innerHTML = ""; // clear old tiles

  questions.forEach((text) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = text;

    tile.addEventListener("click", () => {
      tile.classList.toggle("done");
    });

    grid.appendChild(tile);
  });
}

// Fetch random questions from server
async function loadRandomQuestions() {
  const res = await fetch("/api/questions");
  const data = await res.json();
  renderGrid(data);
}

// Button click
generateBoardButton.addEventListener("click", loadRandomQuestions);

// Load once on page start
loadRandomQuestions();

