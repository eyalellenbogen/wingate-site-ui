document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});

function initMenu() {
    let isOnDrop;
    let isOn;
    let drop = document.querySelector('.top-menu-drop');
    let toggle = document.querySelector('.top-menu');
    toggle.addEventListener('click', ev => {
        closeMenu();
        drop.classList.add('on');
        isOn = true;
        ev.target.closest('li').classList.add('active');
    });
    // toggle.addEventListener('mouseout', () => {
    //     window.setTimeout(() => {
    //         if (isOnDrop) { return; }
    //         closeMenu();
    //     }, 250);
    // });

    // drop.addEventListener('mouseout', () => {
    //     isOnDrop = false;
    //     // closeMenu();
    // });

    document.body.addEventListener('click', ev => {
        if (!isOn) {
            return;
        }
        if (!ev.target.closest('.top-menu-drop')
            && !ev.target.closest('.top-menu')) {
            closeMenu();
        }
    });

    drop.addEventListener('mouseover', () => {
        isOnDrop = true;
    });

    function closeMenu() {
        toggle.querySelectorAll('li').forEach(x => {
            x.classList.remove('active');
        });
        drop.classList.remove('on');
        isOn = false;
    }
}