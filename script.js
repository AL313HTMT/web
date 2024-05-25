const header = document.getElementById('header');
const title = document.getElementById('title');
const para = document.getElementById('para');


function scary() {
    header.style.backgroundImage = 'url(./images/scary-face.jpg)';
    header.style.backgroundPosition = 'center left';
    title.innerHTML = 'LOL';
    para.innerHTML = 'this is not funny... now, you can exit';
}