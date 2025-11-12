document.addEventListener('DOMContentLoaded', () => {
	const titleText = [
	  "Nahuel Benitez", "Nahuel Benite", "Nahuel Benit", 
	  "Nahuel Beni", "Nahuel Ben", "Nahuel", 
	  "Na", "Nah", "Nahu", "Nahue", 
	  "Nahuel", "Nahuel B", "Nahuel Be", 
	  "Nahuel Ben", "Nahuel Beni", "Nahuel Benitez"
	];
	let index = 0;
  
	setInterval(() => {
	  document.title = titleText[index % titleText.length];
	  index++;
	}, 250);
  });
  

  /*scroll down*/

  document.addEventListener('scroll', () => {
	const topButton = document.querySelector('.top');
	if (window.scrollY > 300) {
	  topButton.style.opacity = '1';
	  topButton.style.pointerEvents = 'auto';
	} else {
	  topButton.style.opacity = '0';
	  topButton.style.pointerEvents = 'none';
	}
  });
  
  // Opcional: animación inicial
  document.querySelector('.top').addEventListener('click', (event) => {
	event.preventDefault(); // Evita el comportamiento por defecto
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth' // Añade el deslizamiento suave
	});
  });
  
  
  