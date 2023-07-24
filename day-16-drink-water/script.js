const glasses = document.querySelectorAll('.secondary-glass-container .glass');
const emptyLargeGlass = document.querySelector('.empty-large-glass');
const waterLargeGlass = document.querySelector('.water-large-glass');
const emptySpaceVisiblity = document.querySelector('.empty-large-glass');
const waterVisibility = document.querySelector('.water-large-glass h3');
const liters = document.querySelector('.liters');
const percentage = document.querySelector('.percentage');

let lastIndex = 0;
const WATER_QUANTITY = 0.25;
const PERCENTAGE_QUANTITY = 12.5;
const glassFullClass = 'glass--full';

glasses.forEach((glass, index) =>
  glass.addEventListener('click', (e) => {
    if (lastIndex > index) {
      cleanUpGlassesContainer();
    }

    fillUpGlassesAccordingIndex(index);
    toggleLastGlass(index);
    lastIndex = index;

    const numberOfFullGlasses = getNumberOfFullGlasses(glasses);
    fillUpMainGlass(numberOfFullGlasses);
  })
);

function fillUpMainGlass(numberOfFullGlasses) {
  waterVisibility.style.visibility = 'visible';
  emptySpaceVisiblity.style.visibility = 'visible';

  const emptySpace = glasses.length - numberOfFullGlasses;
  const water = numberOfFullGlasses;

  emptyLargeGlass.style.height = `${emptySpace * PERCENTAGE_QUANTITY}%`;
  waterLargeGlass.style.height = `${water * PERCENTAGE_QUANTITY}%`;

  liters.innerText = `${2 - water * WATER_QUANTITY}`;
  percentage.innerText = `${water * PERCENTAGE_QUANTITY}`;

  if (water === 0) {
    waterVisibility.style.visibility = 'hidden';
  }

  if (emptySpace === 0) {
    emptySpaceVisiblity.style.visibility = 'hidden';
  }
}

function getNumberOfFullGlasses(glasses) {
  let numberOfFullGlasses = 0;
  glasses.forEach((glass) => {
    if (glass.classList.contains(glassFullClass)) {
      numberOfFullGlasses++;
    }
  });

  return numberOfFullGlasses;
}

function toggleLastGlass(index) {
  glasses[index].classList.toggle(glassFullClass);
}

function fillUpGlassesAccordingIndex(index) {
  glasses.forEach((glass, idx) => {
    if (idx <= index - 1) {
      glass.classList.add(glassFullClass);
    }
  });
}

function cleanUpGlassesContainer() {
  glasses.forEach((glass) => {
    if (glass.classList.contains(glassFullClass)) {
      glass.classList.remove(glassFullClass);
    }
  });
}
