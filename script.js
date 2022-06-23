const root = document.getElementById('root')
const home = document.getElementById('home')
const aboutUs = document.getElementById('aboutUs')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')

function stopLoad() {
    const loader = document.getElementsByClassName('load')[0]
    loader.style.opacity = '0%'
    loader.display = 'none'
}

const hideSection = () => Array.from(document.getElementsByClassName('hide')).map(el => el.style.display = 'none')

window.addEventListener('load', () => {
    stopLoad()
    hideSection()
    
    Array.from(document.getElementsByClassName('hide')[0].style.display = 'flex')
})

home.addEventListener('click', () => {
    hideSection()
    Array.from(document.getElementsByClassName('hide')[0].style.display = 'flex')
})
aboutUs.addEventListener('click', () => {
    hideSection()
    Array.from(document.getElementsByClassName('hide')[1].style.display = 'flex')
})
portfolio.addEventListener('click', () => {
    hideSection()
    Array.from(document.getElementsByClassName('hide')[2].style.display = 'grid')
})
contact.addEventListener('click', () => {
    hideSection()
    Array.from(document.getElementsByClassName('hide')[3].style.display = 'flex')
})