document.querySelectorAll('.troca-img').forEach(img => {
    img.addEventListener('mouseover', function() {
        setTimeout(() => {
            this.src = this.getAttribute('data-hover');
        }, 200);
    });
    img.addEventListener('mouseout', function() {
        this.style.opacity = '0.8';
        setTimeout(() => {
            this.src = this.getAttribute('data-original');
            this.style.opacity = '1';
        }, 200);
    });
});