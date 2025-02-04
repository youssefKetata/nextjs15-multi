
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.querySelector('button');
  themeToggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});