"use strict";

document.querySelectorAll('.navigation__list a.navigation__link').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('#navi-toggle').checked = false;
    });    
});