document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const containerSection = document.querySelector(".container");
  const servicesSection = document.querySelector(".services");
  const contactSection = document.querySelector(".contact");

  const containerSectionHeight = containerSection.offsetHeight;
  const servicesSectionHeight = servicesSection.offsetHeight;
  const contactSectionHeight = contactSection.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= containerSectionHeight) {
      header.classList.add("header-white");
    } else {
      header.classList.remove("header-white");
    }

    if (window.scrollY >= servicesSectionHeight) {
      header.classList.add("header-white");
    } else {
      header.classList.remove("header-white");
    }

    if (window.scrollY >= contactSectionHeight) {
      header.classList.add("header-white");
    } else {
      header.classList.remove("header-white");
    }
  });
});
// JavaScript pour l'effet de défilement horizontal des photos

// Obtient toutes les applications
const applications = document.querySelectorAll(".application");

// Nombre de pixels à déplacer à chaque intervalle
const scrollAmount = 4;

// Fonction pour déplacer les applications horizontalement
function scrollApplications() {
  applications.forEach((application) => {
    // Vérifie si l'application a atteint la fin de son conteneur
    if (
      application.scrollLeft + application.clientWidth >=
      application.scrollWidth
    ) {
      // Réinitialise la position du scroll à 0 pour recommencer le défilement
      application.scrollLeft = 0;
    } else {
      // Défilement vers la droite
      application.scrollLeft += scrollAmount;
    }
  });
}

// Appelle la fonction scrollApplications toutes les 50ms
setInterval(scrollApplications, 50);