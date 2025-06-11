<body>
  
  <script>
    let fontSize = 100;

    function increaseFont() {
        if (fontSize < 150) {
            fontSize += 10;
            document.body.style.fontSize = fontSize + '%';
        }
    }

    function decreaseFont() {
        if (fontSize > 70) {
            fontSize -= 10;
            document.body.style.fontSize = fontSize + '%';
        }
    }

    function toggleContrast() {
        document.body.classList.toggle('high-contrast');
    }

    function resetAccessibility() {
        fontSize = 100;
        document.body.style.fontSize = '100%';
        document.body.classList.remove('high-contrast');
    }
</script>
  </body>
