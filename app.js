document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initMobileMenu1();
    initMobileMenu2();
    initFilterToggles();
    initFilterBoxToggle();
});

function initFilterBoxToggle() {
    let toggleOn = document.querySelector('.gallery .top-part .header .filters-toggle');
    if (!toggleOn) {
        return;
    }
    let toggleOff = document.querySelector('.gallery-content .filter-box button.close');
    let slide = document.querySelector('.gallery-content .filter-box');
    toggleOn.addEventListener('click', () => {
        slide.classList.add('on');
    });
    toggleOff.addEventListener('click', () => {
        slide.classList.remove('on');
    });
}

function initFilterToggles() {
    let toggles = document.querySelectorAll('.filters .filter-toggle');
    toggles.forEach(x => {
        x.addEventListener('click', () => {
            let target = x.closest('li');
            if (target.classList.contains('on')) {
                target.classList.remove('on');
            } else {
                target.classList.add('on');
            }
        });
    });
}

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