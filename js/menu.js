(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function openMenu() {
    refs.menu.classList.remove('is-hidden');
    document.body.classList.add('on-scroll');
    document.documentElement.classList.add('on-scroll');
  }

  function closeMenu() {
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('on-scroll');
    document.documentElement.classList.remove('on-scroll');
  }
})();
