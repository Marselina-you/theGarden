const sections = document.querySelectorAll(".section-ticker");
console.log(sections);

[...sections].forEach((section) => {
  const checkbox = section.querySelector("input");
  console.log(checkbox)

  checkbox.addEventListener("change", () => {
    section.classList.toggle("enable-animation");
  });
});
