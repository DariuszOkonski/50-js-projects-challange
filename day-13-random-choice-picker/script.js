const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
let words = [];
const HIGHLIGHT = "highlight";
const SHORT_STEP = 300;
const LONG_STEP = 3000;

textarea.addEventListener("keyup", (e) => {
  let tempString = e.target.value;
  words = tempString.split(",").map((word) => word.trim());

  addTag(words);

  clearTextArea(e);

  if (e.key === "Enter") {
    runToggleClasses();
  }
});

function runToggleClasses() {
  const nodesLength = tags.childNodes.length;
  if (nodesLength > 0) {
    const intervale = setInterval(() => {
      toggleClass(nodesLength);
    }, SHORT_STEP);

    setTimeout(() => {
      clearInterval(intervale);
      setTimeout(() => {
        setLastElement(nodesLength);
      }, SHORT_STEP);
    }, LONG_STEP);
  }
}

function setLastElement(nodesLength) {
  const index = getNodeIndex(nodesLength);
  const nodeToChange = tags.childNodes[index];
  nodeToChange.classList.add(HIGHLIGHT);
}

function toggleClass(nodesLength) {
  const index = getNodeIndex(nodesLength);
  const nodeToChange = tags.childNodes[index];
  nodeToChange.classList.add(HIGHLIGHT);
  setTimeout(() => {
    nodeToChange.classList.remove(HIGHLIGHT);
  }, SHORT_STEP / 2);
}

function getNode(nodesLength) {
  const index = getNodeIndex(nodesLength);
  const nodeToChange = tags.childNodes[index];
  nodeToChange.classList.add(HIGHLIGHT);
  return nodeToChange;
}

function getNodeIndex(nodesLength) {
  return Math.floor(Math.random() * nodesLength);
}

function clearTextArea(e) {
  if (e.key === "Enter") {
    textarea.value = "";
  }
}

function addTag(words) {
  tags.innerHTML = "";

  words.forEach((word) => {
    if (word === "") return;
    const div = document.createElement("div");
    div.classList.add("tag");
    div.innerText = word;

    tags.appendChild(div);
  });
}
