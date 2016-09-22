$(document).ready(function () {
    // Плавный скроллинг ссылок в навбаре + сыылки футера
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Убедиться, что у this.hash есть значение
        if (this.hash !== "") {
            // Запретить другое действие по клику
            event.preventDefault();

            // hash
            var hash = this.hash;

            // jQuery's animate() для плавной прокрутки
            // Значение (900) задержка до скролла в мсек.
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Добавить hash (#) в URL после скролла
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 900) {
                $(this).addClass("slide");
            }
        });
    });
});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

/*// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.add(" w3-card-2 w3-animate-top", "");
    }
}*/

