
function startAnimation() {
    document.body.classList.remove('animation-start');
    void document.body.offsetWidth; 
    document.body.classList.add('animation-start');
}

window.addEventListener('load', () => {
    setTimeout(startAnimation, 1000);
});


window.addEventListener('resize', () => {
    setTimeout(startAnimation, 500);
});
