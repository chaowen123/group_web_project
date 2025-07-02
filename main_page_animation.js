
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



// function scrollToSection(id) {
//     const section = document.getElementById(id);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// }
function scrollToSection(id) {
    const container = document.getElementById('menuScrollZone');
    const section = document.getElementById(id);

    if (container && section) {
        container.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

function showDish(imageUrl, title, desc) {
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('dishModal').style.display = 'flex';
}

function hideDish() {
  document.getElementById('dishModal').style.display = 'none';
}