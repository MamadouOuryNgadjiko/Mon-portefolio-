// Animation de couleur du header
const header = document.querySelector('.header-pro');
let colors = ['#0070bb', '#00c6ff', '#004a8f', '#0099ff'];
let index = 0;

function changeHeaderColor() {
  header.style.background = `linear-gradient(270deg, ${colors[index]}, ${colors[(index+1) % colors.length]})`;
  header.style.backgroundSize = '600% 600%';
  index = (index + 1) % colors.length;
}

setInterval(changeHeaderColor, 5000);
changeHeaderColor();

// Apparition en scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        header.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  observer.observe(header);
});

// Validation formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const nom = this.nom.value.trim();
  const prenom = this.prenom.value.trim();
  const tel = this.telephone.value.trim();
  const email = this.email.value.trim();
  const adresse = this.adresse.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let messages = [];

  if (!nom) messages.push("Nom obligatoire.");
  if (!prenom) messages.push("Prénom obligatoire.");
  if (!tel) messages.push("Téléphone obligatoire.");
  if (!adresse) messages.push("Adresse obligatoire.");
  if (email && !emailRegex.test(email)) messages.push("Email non valide.");

  if (messages.length > 0) {
    alert(messages.join("\n"));
    e.preventDefault();
  }
});
