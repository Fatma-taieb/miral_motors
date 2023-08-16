document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const containerSection = document.querySelector(".container");
  const servicesSection = document.querySelector(".services");
  const contactSection = document.querySelector(".contact");

  const containerSectionHeight = containerSection.offsetHeight;
  const servicesSectionHeight = servicesSection.offsetHeight;
  const contactSectionHeight = contactSection.offsetHeight;
}


const applications = document.querySelectorAll(".application");


const scrollAmount = 4;

function scrollApplications() {
  applications.forEach((application) => {
    if (
      application.scrollLeft + application.clientWidth >=
      application.scrollWidth
    ) {
      application.scrollLeft = 0;
    } else {
      application.scrollLeft += scrollAmount;
    }
  });
}

setInterval(scrollApplications, 50);