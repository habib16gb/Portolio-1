const STYLE_SWITCHER = document.querySelector('.style-switcher')
const CONFIG = document.querySelector('.fa-cog')
const ALTER_STYLES = document.querySelectorAll('.alter-style')

const THEME_COLOR = document.querySelector('.theme-color');
const BACK_COLOR = document.querySelector('.back-color');
const HEADING_COLOR = document.querySelector('.h-color');
const TEXT_COLOR = document.querySelector('.text-color');

CONFIG.addEventListener('click', () => {
  STYLE_SWITCHER.classList.toggle('show')
})

THEME_COLOR.addEventListener('change', () => {
  document.documentElement.style.setProperty('--skin-color', THEME_COLOR.value)
})

BACK_COLOR.addEventListener('change',() => {
  document.documentElement.style.setProperty('--bg-Black-900', BACK_COLOR.value)
})

HEADING_COLOR.addEventListener('change', () => {
  document.documentElement.style.setProperty('--text-Black-900', HEADING_COLOR.value)
})

TEXT_COLOR.addEventListener('change', () => {
  document.documentElement.style.setProperty('--text-Black-700', TEXT_COLOR.value)
})

