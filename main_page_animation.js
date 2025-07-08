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

function scrollToSection(id) {
    const container = document.getElementById('menuScrollZone');
    const section = document.getElementById(id);

    if (container && section) {
        container.scrollTo({
            top: section.offsetTop - container.offsetTop,
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

document.addEventListener('DOMContentLoaded', function () {
    var dishModal = document.getElementById('dishModal');
    if (dishModal) {
        dishModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget;
            // Extract info from data-bs-* attributes
            var dishImg = button.getAttribute('data-dish-img');
            var dishTitle = button.getAttribute('data-dish-title');
            var dishDesc = button.getAttribute('data-dish-desc');

            // Update the modal's content.
            var modalImage = dishModal.querySelector('#modalImage');
            var modalTitle = dishModal.querySelector('#modalTitle');
            var modalDesc = dishModal.querySelector('#modalDesc');
            var modalLabel = dishModal.querySelector('#dishModalLabel');


            modalImage.src = dishImg;
            modalTitle.textContent = dishTitle;
            modalDesc.textContent = dishDesc;
            modalLabel.textContent = dishTitle;
        });
    }
});