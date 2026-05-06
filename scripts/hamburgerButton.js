document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  let open = false;
  function toggleMenu() {
    open = !open;
    menu.classList.toggle('hidden');
    btn.style.display = open ? 'none' : 'block';
  }
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      if (!menu.classList.contains('hidden')) {
        toggleMenu();
      }
    }
  });
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');

    let cleanHref = href.replace('pages/', '');
    let cleanPath = currentPath.split('/').pop();

    const isActive =
      cleanHref === 'index.html'
        ? cleanPath === '' || cleanPath === 'index.html'
        : cleanPath === cleanHref;

    if (isActive) {
      link.classList.add('text-[#00aeef]');
      link.setAttribute('aria-current', 'page');
    }
  });
});
