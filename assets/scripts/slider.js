const slides = document.querySelector('.slides');
const index_btns = document.querySelectorAll('.nav_index');

let index = 0;
let intervalId;
let intervalTime = 5;

function updateSlider() {
    document.querySelectorAll('.nav_index').forEach(btn => {
        btn.removeAttribute('active');
    });

    if (index > 3)
        index = 0;
    let btn = document.getElementById(`img_index_${index + 1}`);
    btn.setAttribute('active', 'true');
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function startSliderInterval() {
    intervalId = setInterval(() => {
        index++;
        updateSlider();
    }, intervalTime * 1000);
}

startSliderInterval();

index_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(intervalId);
        document.querySelectorAll('.nav_index').forEach(btn => {
            btn.removeAttribute('active');
        });

        btn.setAttribute('active', 'true');

        let btn_index = btn.getAttribute('img-index');
        index = btn_index - 1;

        slides.style.transform = `translateX(-${index * 100}%)`;

        startSliderInterval();
    });
});
