const GAME_CLOCK = 1000;
const BLOCK_SIDE_LENGTH = 30;
const ROWS = 20;
const COLS = 10;
const SCORE_WORTH = 10;

const SHAPES = [
  [],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1], //cyan
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],

  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0], //blue
  ],

  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0], //orange
  ],

  [
    [4, 4],
    [4, 4], //yellow
  ],

  [
    [0, 5, 5], //green
    [5, 5, 0],
    [0, 0, 0],
  ],

  [
    [0, 6, 0],
    [6, 6, 6], //purple
    [0, 0, 0],
  ],

  [
    [7, 7, 0], //red
    [0, 7, 7],
    [0, 0, 0],
  ],
];
const COLORS = [
  "#7F7F7F",
  "#00FFFF",
  "#0000FF",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#800080",
  "#FF0000",
];
function drawGrid(ctx) {
  ctx.strokeStyle = "#000000"; // Black line
  ctx.lineWidth = 0.035; // Thin line
  for (let i = 0; i <= COLS; i++) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, ROWS);
    ctx.stroke();
  }
  for (let j = 0; j <= ROWS; j++) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(COLS, j);
    ctx.stroke();
  }
}
