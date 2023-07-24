const glasses = document.querySelectorAll('.secondary-glass-container .glass');

glasses.forEach((glass, index) =>
  glass.addEventListener('click', (e) => {
    fillUpGlasses(index);
  })
);

function fillUpGlasses(index) {
  cleanUpGlassesContainer();
  fillUpGlassesAccordingIndex(index);
}

function toggleLastGlass(index) {
  glasses[index].classList.toggle('glass--full');
}

function fillUpGlassesAccordingIndex(index) {
  glasses.forEach((glass, idx) => {
    if (idx <= index) {
      glass.classList.add('glass--full');
    }
  });
}

function cleanUpGlassesContainer() {
  glasses.forEach((glass) => {
    if (glass.classList.contains('glass--full')) {
      glass.classList.remove('glass--full');
    }
  });
}
