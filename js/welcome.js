function animateText(words, id) {
  const target = document.getElementById(id);
  let letterCount = 0, direction = 1, wordIndex = 0;

  const interval = setInterval(() => {
    target.textContent = words[wordIndex].slice(0, letterCount);
    if (direction === 1 && letterCount === words[wordIndex].length) direction = -1;
    else if (direction === -1 && letterCount === 0) {
      direction = 1;
      wordIndex = (wordIndex + 1) % words.length;
    }
    letterCount += direction;
  }, 150);

  return () => clearInterval(interval); // Permite detener la animación.
}
animateText(['Welcome', 'Portfolio', 'Nahuel Benitez'], 'text');
