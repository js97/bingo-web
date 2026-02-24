const grid = document.getElementById("grid");
const generateBoardButton = document.getElementById("generateBoardButton");
const overlay = document.getElementById("bingoOverlay");

const SIZE = 4;
let state = [];

function initState() {
  state = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(false)
  );
}

// Create grid from question array
function renderGrid(questions) {
  grid.innerHTML = ""; // clear old tiles
  initState();

  questions.forEach((text, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = text;

    const row = Math.floor(index / SIZE);
    const col = index % SIZE;


    tile.addEventListener("click", () => {

        state[row][col] = !state[row][col];
        tile.classList.toggle("done");

        if (checkBingo()) {
            showBingo();
        }
    });

    grid.appendChild(tile);

    requestAnimationFrame(() => {
        fitTextToTile(tile);
    });
  });
}

function showBingo() {
  overlay.classList.remove("hidden");

  // Optional: hide after 2 seconds
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 2000);
}

function checkBingo() {
  const SIZE = state.length;

  // rows
  if (state.some(row => row.every(Boolean))) return true;

  // columns
  for (let c = 0; c < SIZE; c++) {
    if (state.every(row => row[c])) return true;
  }

  // diagonals
  if (state.every((row, i) => row[i])) return true;
  if (state.every((row, i) => row[SIZE - 1 - i])) return true;

  return false;
}

// Fetch random questions from server
async function loadRandomQuestions() {
  const res = await fetch("/api/questions");
  const data = await res.json();
  renderGrid(data);
}

function fitTextToTile(tile, maxFont = 24, minFont = 10) {
  let size = maxFont;
  tile.style.fontSize = size + "px";

  // Reduce font size until content fits
  while (
    (tile.scrollHeight > tile.clientHeight ||
     tile.scrollWidth > tile.clientWidth) &&
    size > minFont
  ) {
    size--;
    tile.style.fontSize = size + "px";
  }
}

// Button click
generateBoardButton.addEventListener("click", loadRandomQuestions);

// Load once on page start
loadRandomQuestions();

