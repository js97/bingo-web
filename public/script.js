const grid = document.getElementById("grid");
const generateBoardButton = document.getElementById("generateBoardButton");
const overlay = document.getElementById("bingoOverlay");
const backgroundContainer = document.querySelector(".background-container");
const changeBackgroundButton = document.getElementById("changeBackground");

const backgrounds = [
  "background/Bingo_1.png",
  "background/Bingo_2.png",
  "background/Bingo_5.jpg",
];
let currentBackgroundIndex = 0;

const SIZE = 4;
let state = [];

function initState() {
  state = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(false)
  );
}

// Create grid from question array
function renderGrid(questionDicts) {
  grid.innerHTML = ""; // clear old tiles
  initState();

  questionDicts.forEach((qdict, index) => {
    text = qdict["question"];
    explanation = qdict["explanation"];

    const tile = document.createElement("div");
    tile.classList.add("tile");
    const textSpan = document.createElement("span");
    textSpan.classList.add("tile-text");
    textSpan.textContent = text;
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = explanation;
    tile.appendChild(textSpan);
    tile.appendChild(tooltip);

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

function changeBackgroundImage() {
  // backgroundContainer.classList.toggle("alt-background");
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  backgroundContainer.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
}
changeBackgroundButton.addEventListener("click", changeBackgroundImage);

function fitTextToTile(tile, maxFont = 24, minFont = 6) {
  let size = maxFont;
  const text = tile.querySelector(".tile-text");
  text.style.fontSize = size + "px";
  text.style.whiteSpace = "normal";

  // Reduce font size until content fits
  while (
    (text.scrollHeight > tile.clientHeight ||
     text.scrollWidth > tile.clientWidth) &&
    size > minFont
  ) {
    size--;
    text.style.fontSize = size + "px";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll(".tile").forEach(tile => {
    tile.classList.toggle("dark-mode");
  });
}

// Button click
generateBoardButton.addEventListener("click", loadRandomQuestions);
document.getElementById("toggleDarkModeButton").addEventListener("click", toggleDarkMode);

// Load once on page start
loadRandomQuestions();

