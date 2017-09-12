var nav = {
    toggleMenu: function() {
        var hamburger = document.getElementById('mobile-menu');
        var nav = document.getElementById('mobile-menu-wrapper');
        var content = document.getElementById('mobile-menu-content');

        if (hamburger.className === 'hamburger') {
            //hamburger.className = 'hamburger open';
            hamburger.classList.toggle('open');
            //nav.style.width = '50%';
            nav.classList.toggle('mobile-menu__wrapper--active');
            content.classList.toggle('mobile-menu__content--active');
        } else {
            //hamburger.className = 'hamburger';
            hamburger.classList.toggle('open');
            //nav.style.width = '0';
            nav.classList.toggle('mobile-menu__wrapper--active');
            content.classList.toggle('mobile-menu__content--active');
            }

    },
    eventListener: function() {
        var menuOverlay = document.getElementById('mobile-menu-wrapper');
        menuOverlay.addEventListener('click', function(event) {

            var elementClicked = event.target;
            if (elementClicked.nodeName === 'A') {
                this.toggleMenu();
            }
        }.bind(nav));

        var hamburger = document.getElementById('mobile-menu');
        hamburger.addEventListener('click', function(event) {

            var elementClicked = event.target;
            if (elementClicked.nodeName === 'SPAN' || elementClicked.id === 'mobile-menu') {
                this.toggleMenu();
            }
        }.bind(nav));
    }
};
nav.eventListener();
