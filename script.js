var Loading = document.getElementById('Loading');
var Not = document.getElementById('not');
Loading.style.visibility = 'hidden';

function SetLoading() {
    Loading.style.visibility = 'visible';
    setTimeout(() => {
        Loading.style.visibility = 'hidden'
        Not.classList.add('addNot');
    }, 2000);
}
Not.addEventListener('animationend',()=> {
    Not.classList.remove('addNot');
})