const photoEffect = document.getElementById("photo-effect");
const image = photoEffect.querySelector("img");

photoEffect.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY, target } = e;
  const { offsetWidth, offsetHeight } = target;
  const xPos = (offsetX / offsetWidth - 0.5) * 40;
  const yPos = (offsetY / offsetHeight - 0.5) * 40;
  image.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.1)`;
});

photoEffect.addEventListener("mouseleave", () => {
  image.style.transform = "translate(0) scale(1)";
});
