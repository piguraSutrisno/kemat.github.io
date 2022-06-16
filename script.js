const root = document.getElementById('root')
const home = document.getElementById('home')
const aboutUs = document.getElementById('aboutUs')
const portfolio = document.getElementById('portfolio')
const contact = document.getElementById('contact')

home.addEventListener('click', () => {
    root.innerHTML = '<div class="main flex"><div class="container text-container flex"><h2 class="text-white welcome-text medium-text">Selamat datang!</h2><h3 class="text-white quote-text">Lorem ipsum dolor sit amet consectetur</h3><h2 class="text-white description-text">Pigura jaranan.</h2></div><div class="container img-container flex flex-items-center"><img class="flat-img" src="img/2204_w037_n003_304b_p1_304.jpg" alt="flat Ilustration"></div></div>'
})
contact.addEventListener('click', () => {
    root.innerHTML = '<div class="main flex contact flex-items-center"><div class="container flex contact-text"><div class="contact-item"><h2>Lokasi</h2><h3>JawaTengah - RejowinagunUtara - Jaranan</h3></div><div class="contact-item"><h2>Nomor</h2><h3>Sepertinya masih privasi</h3></div><div class="contact-item"><h2>Email</h2><h3>Sepertinya masih privasi juga...</h3></div></div><div class="container flex map-container flex-items-center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.458498045866!2d110.22475085562803!3d-7.481686740797805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8ffe6e863677%3A0x77ab37e90f36af55!2sHomes!5e0!3m2!1sid!2sid!4v1655362715533!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>'

})
aboutUs.addEventListener('click', () => {
    root.innerHTML = '<div class="main flex aboutUsPage"><div class="container flex profile"><img src="img/AboutUsImg.jpg" alt="iniGambarOrangNaikMotor" title="ini photoProfilenya" class="aboutUsImg"><div class="textabout"><h2 class="username">Sutrisno</h2><h4 class="title">Juragan Pigura Jaranan</h4><br><p class="description-profile">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore maxime eum aspernatur eius ut earum architecto magnam. Itaque autem architecto libero?</p></div></div><div class="container cerita-aboutUs flex flex-items-center"><h2>Lorem, ipsum dolor.</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum recusandae, beatae quos fugit, laudantium vero officia at laborum eveniet earum inventore dolores suscipit temporibus quam maiores impedit similique soluta ipsum cupiditate harum fugiat? Quibusdam iste numquam quia quas deleniti totam ex provident tempore eligendi! Quos veritatis aliquid laborum autem in iure labore commodi quis odit libero modi natus tempora omnis alias molestias eius a error fuga, impedit minima iste perspiciatis doloremque asperiores voluptatum. Fugit illum deserunt quibusdam aliquam nobis?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum veritatis velit eius assumenda officiis voluptatibus consequatur harum consectetur numquam.</p></div></div>'
})
portfolio.addEventListener('click', () => {
    root.innerHTML = '<div class="projects"><div class="card random1"></div><div class="card random2"></div><div class="card random3"></div></div>'
})