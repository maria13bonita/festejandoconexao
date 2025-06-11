<body>
  <script>
  let fontSize = 100;

  const increaseBtn = document.getElementById("increase-font");
  const decreaseBtn = document.getElementById("decrease-font");
  const contrastBtn = document.getElementById("toggle-contrast");
  const resetBtn = document.getElementById("reset-accessibility");

  increaseBtn.addEventListener("click", () => {
    fontSize += 10;
    document.body.style.fontSize = fontSize + "%";
  });

  decreaseBtn.addEventListener("click", () => {
    fontSize = Math.max(70, fontSize - 10);
    document.body.style.fontSize = fontSize + "%";
  });

  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  resetBtn.addEventListener("click", () => {
    fontSize = 100;
    document.body.style.fontSize = "100%";
    document.body.classList.remove("high-contrast");
  });
</script>
  </body>
