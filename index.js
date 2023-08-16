$(() => {
    AOS.init();

    
    // change navbar bg on scroll
    const navbar = document.querySelector('.navbar');
    const navBrand = document.querySelector('.navbar-brand');
    const navLink = document.querySelector('.nav-link');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navbar.classList.add('navbar-scrolled');
            navBrand.classList.add(`navbar-brand-scrolled`);
            navLink.classList.add(`nav-link-scrolled`);
        } else {
            navbar.classList.remove(`navbar-scrolled`);
            navBrand.classList.remove(`navbar-brand-scrolled`);
            navLink.classList.remove(`nav-link-scrolled`);
        }
    });

    // scroll to Top button - rocket icon
    $('#topControl').click(() => {
        $("html, body").scrollTop(0);
        return false;
    });

    // scrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        rootMargin: '0px 0px -10%',
        smoothScroll: true
    });
    scrollSpy.refresh();
})