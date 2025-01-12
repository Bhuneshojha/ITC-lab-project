let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
};

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});


