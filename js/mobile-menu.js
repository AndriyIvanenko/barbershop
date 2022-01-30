(() => {
  const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const firstNavItem = document.querySelector('[data-first-nav-link]');
  
  mobileMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuBtn.classList.toggle('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle("mobile-menu-open");

    firstNavItem.focus();
  }
})();
