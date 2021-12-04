const note = new Audio();
//Notas
const baseDir = "./notas/";
const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
const fullNotes = [...naturalNotes, ...sharpNotes];
let selectedNotes = naturalNotes;
let actualNote = null;
//Seletores
const initTraining = document.querySelector(".init");
const blockNote = document.querySelector(".note");
const showBlockNote = document.querySelector(".note .bg");
const repeatNote = document.querySelector(".repeat");
const showNote = document.querySelector(".show");
const select = document.querySelector("select");
const span = document.querySelector("span");
const noteC = document.querySelector(".noteC");
//Eventos
select.addEventListener("change", handleChange);
initTraining.addEventListener("click", handleInit);

repeatNote.addEventListener("click", () => {
  note.src = actualNote;
  note.play();
});

showNote.addEventListener("click", () => {
  showBlockNote.classList.add("active");
});
noteC.addEventListener("click", handleNoteC);
//Funções
function handleNoteC() {
  note.src = "./notas/CGrave.wav";
  note.play();
}
function handleChange(event) {
  if (event.target.value === "naturalNotes") {
    selectedNotes = naturalNotes;
  } else if (event.target.value === "sharpNotes") {
    selectedNotes = sharpNotes;
  } else {
    selectedNotes = fullNotes;
  }
}
function randomNotes(baseNotes) {
  const actualNote = Math.floor(Math.random() * baseNotes.length);
  return baseNotes[actualNote];
}

function handleInit() {
  const randomNote = randomNotes(selectedNotes);
  actualNote = `${baseDir}${encodeURIComponent(randomNote)}.wav`;
  note.src = actualNote;
  span.innerText = randomNote;
  blockNote.setAttribute("data-note", randomNote);
  showBlockNote.classList.remove("active");
  note.play();
  console.log(actualNote);
}
