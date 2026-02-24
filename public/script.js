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

// Example labels
// const labels = [
//   "Task 1", "Task 2", "Task 3", "Task 4",
//   "Task 5", "Task 6", "Task 7", "Task 8",
//   "Task 9", "Task 10", "Task 11", "Task 12",
//   "Task 13", "Task 14", "Task 15", "Task 16"
// ];

// // Create 4x4 tiles
// labels.forEach((text, index) => {
//   const tile = document.createElement("div");
//   tile.classList.add("tile");
//   tile.textContent = text;

//   // Toggle done state on click
//   tile.addEventListener("click", () => {
//     tile.classList.toggle("done");
//   });

//   grid.appendChild(tile);
// });