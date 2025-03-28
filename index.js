const headerEl = document.querySelector('.header');

function hideOnScroll(element, scrollThreshold = 400) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > scrollThreshold) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
}


hideOnScroll(headerEl);

