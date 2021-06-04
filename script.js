var accordions = document.getElementsByClassName('accordian');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle('is-open')
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

const navLinks = document.getElementsByClassName('nav__links')[0]
const menu = document.getElementsByClassName('menu')[0]
const ham = document.getElementsByClassName('ham')[0]
const closeButton = document.getElementsByClassName('close-btn')[0]

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active')
        

    ham.classList.toggle('cross');
    closeButton.classList.toggle('cross') 



});
