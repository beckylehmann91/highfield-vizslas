document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `
      <span class="carousel-button"></span>
    `;
  });

  carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
      ${buttonsHtml.join("")}
    </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach(item => item.classList.remove("carousel-item-active"));
      buttons.forEach(button => button.classList.remove("carousel-button-active"));

      items[i].classList.add("carousel-item-active");
      button.classList.add("carousel-button-active");
    });
  });

  items[0].classList.add("carousel-item-active");
  buttons[0].classList.add("carousel-button-active");

  console.log("here");
});