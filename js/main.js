'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(clickItem => {
        clickItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            clickItem.classList.add('active');
        });
    });
}