let btnToggle = document.querySelector('.btn__toggle');
let containers = document.querySelectorAll('.main__container');


btnToggle.addEventListener('click', () => {
    btnToggle.classList.toggle('active');
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.toggle('active-mode');
    }
});


