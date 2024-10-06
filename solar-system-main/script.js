function createStars() {
  const numberOfStars = 1000; 
  const container = document.body;

  for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      
      const size = Math.random() * 3 + 1; 
      star.style.width = '1.5px';
      star.style.height = '1.5px';
      
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      const duration = Math.random() * 1.5 + 1;
      star.style.animationDuration = `${duration}s`;

      container.appendChild(star);
  }
}
createStars();
document.addEventListener('DOMContentLoaded', () => {
  const planets = document.querySelectorAll('.container > div:not(.sun)');
  const button = document.createElement('button');
  button.textContent = 'Start';
  button.id = 'button';
  button.style.position = 'absolute';
  button.style.top = '20px';
  button.style.left = '20px';
  document.body.appendChild(button);

  let isAnimating = true;

  button.addEventListener('click', () => {
      if (isAnimating) {
          planets.forEach(planet => {
              planet.style.animationPlayState = 'paused';
          });
          button.textContent = 'Start';
      } else {
          planets.forEach(planet => {
              planet.style.animationPlayState = 'running';
          });
          button.textContent = 'Stop';
      }
      isAnimating = !isAnimating;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const planets = document.querySelectorAll('.mercury, .venus, .earth, .moon, .mars1moon, .mars2moon, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto');
  const button = document.createElement('button');
  button.textContent = 'Orbit OFF'; 
  button.id='button';
  button.style.position = 'absolute';
  button.style.top = '60px';
  button.style.left = '20px';
  document.body.appendChild(button);
  function toggleOrbitBorders() {
  const currentStyle = planets[0].style.borderStyle;

    if (currentStyle === 'dotted') {
      for (const planet of planets) {
        planet.style.borderStyle = 'none'; 
      }
      button.textContent = "Orbit ON"
    } else {
      for (const planet of planets) {
        planet.style.borderStyle = 'dotted';
      }
      button.textContent = 'Orbit OFF'
    }
  }
  button.addEventListener('click', toggleOrbitBorders);
});


document.addEventListener('DOMContentLoaded', () => {
  const planets = document.querySelectorAll('.mercury, .venus, .earth, .moon, .mars1moon, .mars2moon, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto');
  const button = document.createElement('button');
  button.textContent = 'SpeedSlider';
  button.id = 'button';
  button.style.position = 'absolute';
  button.style.top = '100px';
  button.style.left = '20px';
  document.body.appendChild(button);
  const speedSlider = document.createElement('input');
  speedSlider.type = 'range';
  speedSlider.id = 'slider';
  speedSlider.style.textContent = 'asdff';
  speedSlider.min = 1;  
  speedSlider.max = 10; 
  speedSlider.value = 0; 
  speedSlider.step = 0.1; 
  speedSlider.style.position = 'absolute';
  speedSlider.style.top = '118px';
  speedSlider.style.left = '140px';
  document.body.appendChild(speedSlider);
  speedSlider.addEventListener('input', () => {
    const speed = speedSlider.value;

    planets.forEach((planet, index) => {
      const originalAnimationDuration = 10 + index * 10; 
      const newDuration = (originalAnimationDuration / speed).toFixed(1);
      planet.style.animationDuration = `${newDuration}s`;
      const speedLabelId = planet.classList[0] + 'Speed'; 
      const speedLabel = document.getElementById(speedLabelId);
      if (speedLabel) { 
        speedLabel.textContent = `${newDuration}s`;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-audio');
  function playAudio() {
      audio.volume = 0.5;
      audio.play().catch(error => {
          console.error('Audio playback failed:', error);
      });
  }
  document.body.addEventListener('click', playAudio, { once: true });
});
const tooltip = document.getElementById('planet-tooltip');
const planets = document.querySelectorAll('.container div');

planets.forEach(planet => {
    planet.addEventListener('mouseover', () => {
        const name = planet.getAttribute('data-name');
        const description = planet.getAttribute('data-description');
        const diameter = planet.getAttribute('data-diameter');
        const distance = planet.getAttribute('data-distance');
        const image = planet.getAttribute('data-image');
        
        tooltip.innerHTML = `
            <img src="${image}" alt="${name}">
            <table>
                <tr><th>Name</th><td>${name}</td></tr>
                <tr><th>Description</th><td>${description}</td></tr>
                <tr><th>Diameter</th><td>${diameter}</td></tr>
                <tr><th>Distance from Sun</th><td>${distance}</td></tr>
            </table>`;
        
        tooltip.style.display = 'block'; 
        tooltip.style.opacity = '1'; 
    });

    planet.addEventListener('mouseout', () => {
        tooltip.style.display = 'none'; 
        tooltip.style.opacity = '0'; 
    });
});






