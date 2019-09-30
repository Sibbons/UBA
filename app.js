var burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {

    nav.classList.toggle('toggle')
});

function jump(h) {
    var url = location.href;               //Save down the URL without hash.
    location.href = "#" + h;                 //Go to the target element.
    history.replaceState(null, null, url);   //Don't like hashes. Changing it back.
}