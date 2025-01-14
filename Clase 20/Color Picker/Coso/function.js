const modal = document.getElementById('modal');
const img = document.getElementById('img-modal');
const imagenes = document.querySelectorAll('.imagen');

const closeModal = document.getElementById('close-modal');
const prevImg = document.getElementById('prev-img');
const nextImg = document.getElementById('next-img');

let max, current = 0;


imagenes.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = "flex";
        img.src = image.getAttribute('src');

        max = imagenes.length;
        current = index;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

prevImg.addEventListener('click', () => {
    if (current == 0) {current = max}
    else { current--; }

    img.src = imagenes[current].getAttribute('src');

});

nextImg.addEventListener('click', () => {
    if ( current == max ) {current = 0}
    else { current++; }

    img.src = imagenes[current].getAttribute('src');

});