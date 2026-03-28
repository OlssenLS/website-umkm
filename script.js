document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  let isMenuOpen = false;

  if (btn && menu && icon) {
    btn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('animate-[fadeIn_0.2s_ease-out]');
        icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      } else {
        menu.classList.add('hidden');
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); 
      }
    });
  }
});
