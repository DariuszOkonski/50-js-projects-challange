const letters = document.querySelectorAll('.form-box span');


letters.forEach(lettersNode => {
    lettersNode.innerHTML = lettersNode.innerText
                                .split('')
                                .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
                        .join('');
})

console.log(letters)