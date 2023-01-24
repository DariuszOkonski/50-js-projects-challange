const mainNumber = document.getElementById("main-number");
const containerFirst = document.getElementById("container-first");
const containerSecond = document.getElementById("container-second");
const headerNumber = document.getElementById("header-number");
const blockContentKeyCode = document.getElementById("block-content-keycode");
const blockContentCode = document.getElementById("block-content-code");
const blockContentKey = document.getElementById("block-content-key");
const blockContentHistory = document.getElementById("block-content-history");

const HIDDEN_CLASS = "hidden";
const SPACE = "Space";

const eventObject = {
  keyCode: 0,
  key: "",
  code: "",
  keyHistory: [],
};

window.addEventListener("keydown", (e) => {
  removeClass(mainNumber, HIDDEN_CLASS);
  removeClass(containerFirst, HIDDEN_CLASS);
  addClass(containerSecond, HIDDEN_CLASS);

  eventObject.keyCode = e.keyCode;
  eventObject.code = e.code;

  if (eventObject.keyCode === 32) {
    eventObject.key = SPACE;
    eventObject.keyHistory.push("sp");
  } else {
    eventObject.key = e.key;
    eventObject.keyHistory.push(e.key);
  }

  domManipulation(eventObject);
  checkHistory(eventObject);
  updateDOMHistory(eventObject.keyHistory);
});

function updateDOMHistory(keyHistory) {
  blockContentHistory.innerText = "";
  keyHistory.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("letter-history");
    div.innerText = element;
    blockContentHistory.appendChild(div);
  });
}

function checkHistory(eventObject) {
  if (eventObject.keyHistory.length > 4) {
    eventObject.keyHistory.shift();
  }
}

function domManipulation(eventObject) {
  mainNumber.innerText = eventObject.keyCode;
  headerNumber.innerText = eventObject.keyCode;
  blockContentKeyCode.innerText = eventObject.keyCode;
  blockContentCode.innerText = eventObject.code;
  if (eventObject.code === SPACE) {
    blockContentKey.innerText = SPACE;
    return;
  }
  blockContentKey.innerText = eventObject.key;
}

function addClass(node, className) {
  if (!node.classList.contains(className)) {
    node.classList.add(className);
  }
}

function removeClass(node, className) {
  if (node.classList.contains(className)) {
    node.classList.remove(className);
  }
}
