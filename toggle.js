let btnToggle = document.querySelector('.btn__toggle');
let wrapper = document.querySelector('.wrapper');

btnToggle.addEventListener('click', () => {
    wrapper.classList.toggle('active-mode');
});