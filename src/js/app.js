import $ from 'jquery';
import 'bootstrap';

import './module/clicker';

window.$ = $;
window.jQuery = $;

import '../assets/json/PS1.json';
import '../assets/json/PS2.json';
import '../assets/json/PS3.json';
import '../assets/json/PS4.json';

// Smooth scrolling using jQuery easing
// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: (target.offset().top - 72)
//             }, 1000, "easeInOutExpo");
//             return false;
//         }
//     }
// });

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: 75
});

// Collapse Navbar
var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
    } else {
        $("#mainNav").removeClass("navbar-scrolled");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

var getJson = function (num) {
    $.ajax({
        //json文件位置
        url: "../../assets/json/PS" + num + ".json",
        type: "GET",
        //返回数据格式为json
        dataType: "json",
        success: function (data) {
            var html = "";
            $("#data-details").empty();
            $.each(data, function (i, item) {
                html += ' <div class="data-col-lg-6 col-sm-6 text-center"><p class="text-light mb-0">' + item.project + '</p></div>';
                html += ' <div class="data-col-lg-6 col-sm-6 text-center"><p class="text-light mb-0">' + item.parameter + '</p></div>';
            });
            html += ' <a id="products-data-a" class="js-scroll-trigger" href="#products-data"></a>';
            $("#data-details").append(html);
            document.getElementById("products-data-a").click();
        }
    })
}
