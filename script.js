// ⛓️ Firebase config — REPLACE with yours
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const GRID_SIZE = 5;
const SPACING = 80;
const DOT_RADIUS = 6;
const OFFSET = 40;

let playerName = '';
let roomId = '';
let currentPlayer = '';
let playerId = '';
let gameData = null;

function createRoom() {
  playerName = document.getElementById("playerName").value || "Player";
  roomId = Math.random().toString(36).substr(2, 5).toUpperCase();
  playerId = "P1";

  const ref = db.ref("rooms/" + roomId);
  ref.set({
    players: { P1: playerName },
    lines: {},
    boxes: {},
    turn: "P1"
  });

  listenToRoom();
  startGameUI();
}

function joinRoom() {
  playerName = document.getElementById("playerName").value || "Player";
  roomId = document.getElementById("roomCode").value.toUpperCase();
  playerId = "P2";

  const ref = db.ref("rooms/" + roomId + "/players");
  ref.once("value", snapshot => {
    if (snapshot.exists() && !snapshot.val().P2) {
      ref.update({ P2: playerName });
      listenToRoom();
      startGameUI();
    } else {
      alert("Room full or not found!");
    }
  });
}

function listenToRoom() {
  const ref = db.ref("rooms/" + roomId);
  ref.on("value", snapshot => {
    gameData = snapshot.val();
    if (!gameData) return;
    drawGame();
  });
}

function startGameUI() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";
}

canvas.addEventListener("click", e => {
  if (!gameData || gameData.turn !== playerId) return;

canvas.addEventListener("click", handleClick); // uses local `lines`, `current`, etc.
canvas.addEventListener("click", handleClick);
function handleClick(e) {
  ...
  if (clickedLine && !lines[clickedLine]) {
    lines[clickedLine] = current;
canvas.addEventListener("click", function(e) {
  ...
  if (!gameData.lines[key]) {
    addLine(key);
    return;
  }
});

