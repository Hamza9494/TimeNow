//select nav elements
const navLinks = document.querySelector('.nav-links')
const navToggle = document.querySelector('.nav-toggle')

// select plan elements
const toggle = document.querySelector('input[type="checkbox"]')
const yearly = document.querySelector('.year')
const monthly = document.querySelector('.month')

const sub = document.querySelector('.sub')
const subTwo = document.querySelector('.sub.two')
const subThree = document.querySelector('.sub.three')

//toggle nav links
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-link')
})

//choose plan
toggle.addEventListener('click', () => {
  toggle.classList.toggle('change')
  if (toggle.classList.contains('change')) {
    yearly.className = 'year choosen'
    monthly.className = 'month'
    sub.innerHTML = `<h2 class="cost">$48 <span class="long">/yr</span></h2>   
`
    subTwo.innerHTML = `<h2 class="cost">$148 <span class="long">/yr</span></h2>`
    subThree.innerHTML = `<h2 class="cost">$84 <span class="long">/yr</span></h2>`
  } else {
    monthly.className = 'month choosen'
    yearly.className = 'year'
    sub.innerHTML = `<h2 class="cost">$4 <span class="long">/mo</span></h2>
`
    subTwo.innerHTML = `<h2 class="cost">$12 <span class="long">/mo</span></h2>`
    subThree.innerHTML = `<h2 class="cost">$7 <span class="long">/mo</span></h2>`
  }
})
