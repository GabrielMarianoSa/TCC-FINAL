document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      menu.classList.toggle("show");
      menu.classList.toggle("active");
    });
  }
});
