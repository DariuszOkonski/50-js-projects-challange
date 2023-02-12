const textarea = document.getElementById("textarea");
const tags = document.getElementById("tags");
let words = [];
const HIGHLIGHT = "highlight";

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
    }, 300);

    setTimeout(() => {
      clearInterval(intervale);
      setLastElement(nodesLength);
    }, 3000);
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
  }, 150);
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
