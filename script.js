document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menu-button');
    var nav = document.getElementById('nav');

    // Toggle menu visibility when the menu button is clicked
    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Add event listener to each menu item
    var menuLinks = nav.querySelectorAll('a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Hide the menu when a link is clicked
            nav.classList.remove('show');
        });
    });
});