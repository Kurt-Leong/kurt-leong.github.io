/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

'use strict'

/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn =
    document.querySelector('[data-theme-btn]')
const /** {NodeElement} */ $HTML = document.documentElement
let /**{Boolean | String} */ isDark = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches

if (sessionStorage.getItem('theme')) {
  $HTML.dataset.theme = sessionStorage.getItem('theme')
} else {
  $HTML.dataset.theme = isDark ? 'dark' : 'light'
  sessionStorage.setItem('theme', $HTML.dataset.theme)
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem('theme') === 'light' ? 'dark' : 'light'
  sessionStorage.setItem('theme', $HTML.dataset.theme)
}

$themeBtn.addEventListener('click', changeTheme)
// window.addEventListener

/**
 *  TAB
 */

const /**  {NodeList} */ $tabBtn = document.querySelectorAll('[data-tab-btn]')
let /**  {NodeElement} */ [lastActiveTab] =
    document.querySelectorAll('[data-tab-content]')
let /**  {NodeElement} */ [lastActiveTabBtn] = $tabBtn

$tabBtn.forEach((item) => {
  item.addEventListener('click', function () {
    lastActiveTab.classList.remove('active')
    lastActiveTabBtn.classList.remove('active')
    const /**  {NodeElement} */ $tabContent = document.querySelector(
        `[data-tab-content="${item.dataset.tabBtn}"]`
      )
    $tabContent.classList.add('active')
    this.classList.add('active')

    lastActiveTab = $tabContent
    lastActiveTabBtn = this
  })
})

/**
 * PROJECTS POPOUT
 */

// Get the modal

var modalButtons = document.querySelectorAll('.myBtn')

// Get the button that opens the modal
var modals = document.querySelectorAll('.modal')
// Get the <span> element that closes the modal
var closeButtons = document.querySelectorAll('.close')

// When the user clicks the button, open the modal

modalButtons.forEach(function (button, index) {
  button.onclick = function () {
    modals[index].style.display = 'block'
  }
})

// When the user clicks on <span> (x), close the modal

closeButtons.forEach(function (closeButton, index) {
  closeButton.onclick = function () {
    modals[index].style.display = 'none'
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  })
}
