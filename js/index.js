console.log("Jai Shree Ram")
/*==================== typing Animation ==================== */

var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "UI Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});


const aside = document.getElementById('aside')

const nav = document.querySelector('nav')
const mainContainer = document.getElementById('main-container');

const navList = document.querySelectorAll('li')
const totalNavList = navList.length;
for (let i = 0; i <= totalNavList - 1; i++) {

    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active");
    })
}


const menuToggle = document.getElementById('menu-toggle');
const toggleButton = document.querySelector('.toggle-button');
menuToggle.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    aside.classList.toggle('active')
    toggleButton.classList.toggle('tagActive')
});

document.querySelector('.main-content').addEventListener('click', () => {
    aside.classList.remove('active')
    toggleButton.classList.remove('active')
})

window.addEventListener('scroll', () => {
    if (aside.classList.contains('active')) {
        aside.classList.remove('active')
        toggleButton.classList.remove('active')
    }
})
