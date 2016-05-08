$(document).ready(function () {

    $('#menuButton > ul > li:has(ul)').addClass("has-sub");

    $('#menuButton > ul > li > a').click(function () {

        var checkElement = $(this).next();

        $('#menuButton li').removeClass('active');
        $(this).closest('li').addClass('active');

        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }

        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menuButton ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }

        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
});