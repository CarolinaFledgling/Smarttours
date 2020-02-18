"use strict";

document.querySelectorAll('.navigation__list a.navigation__link').forEach(function (element) {
    element.addEventListener('click', function () {
        document.querySelector('#navi-toggle').checked = false;
    });
});


$(document).ready(function () {


$(window).scroll(function(){
    if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
    } else {
        $('#topBtn').fadeOut();
    }
})

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

})