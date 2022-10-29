const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

// toggle links
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links')
})
