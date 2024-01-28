document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-links li a');
    var portrait = document.getElementById('portrait');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', function() {
            this.style.fontWeight = 'normal';
        });
    });

    if (portrait) {
        portrait.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        portrait.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    } 
});


