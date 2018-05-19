document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initMobileMenu1();
    initMobileMenu2();
});

function initMobileMenu2() {
    let toggle = document.querySelector('.main-part-mobile > .secondary .sub-menu-toggle');
    let drop = document.querySelector('.main-part-mobile > .secondary .secondary-drop');
    let isOn = false;
    toggle.addEventListener('click', () => {
        isOn = !isOn;
        if (isOn) {
            drop.classList.add('on');
        } else {
            drop.classList.remove('on');
        }
    });
}

function initMobileMenu1() {
    let toggle = document.querySelector('.main-part-mobile .nav-toggle')
    let close = document.querySelector('.main-part-mobile .menu-slide > button.close');
    let slide = document.querySelector('.main-part-mobile .menu-slide');

    toggle.addEventListener('click', () => {
        slide.classList.add('on');
    });

    close.addEventListener('click', () => {
        slide.classList.remove('on');
    });
}

function initMenu() {
    let isOn;
    let drop = document.querySelector('.top-menu-drop');
    let toggle = document.querySelector('.top-menu');
    toggle.addEventListener('click', ev => {
        closeMenu();
        drop.classList.add('on');
        isOn = true;
        ev.target.closest('li').classList.add('active');
    });

    document.body.addEventListener('click', ev => {
        if (!isOn) {
            return;
        }
        if (!ev.target.closest('.top-menu-drop')
            && !ev.target.closest('.top-menu')) {
            closeMenu();
        }
    });

    function closeMenu() {
        toggle.querySelectorAll('li').forEach(x => {
            x.classList.remove('active');
        });
        drop.classList.remove('on');
        isOn = false;
    }
}