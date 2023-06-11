document.addEventListener('DOMContentLoaded', function() {
  // Fetch the header.html file
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      // Insert the header HTML into the placeholder
      document.getElementById('header-placeholder').innerHTML = data;
    });

  // Fetch the footer.html file
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      // Insert the footer HTML into the placeholder
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
