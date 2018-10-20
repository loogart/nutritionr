$(document).ready(function () {
    // menu mobile scrim
    $(".collapsed").click(function () {
        $('.mobile-menu-closed').toggleClass('mobile-menu-open');
    });

    // menu mobile lower menu
    $(".accordion").click(function () {
        $('.publish-modal').toggleClass('publish-modal-hundred');
        $('.new-post').toggleClass('new-post-open');
    });
    // notification mobile lower menu
    $(".click-mobile-notifications").click(function () {
        $('.notifications-right').toggleClass('notifications-right-active');
        $('.respond').toggleClass('hidden-xs visible-xs');
    });
});