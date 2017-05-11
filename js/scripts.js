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

    // Stop Youtube video on modal close -- Finds all iframes from youtubes and gives them a unique class
    jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");
    jQuery(".stop").click(function () {
        // changes the iframe src to prevent playback or stop the video playback in our case
        $('.youtube-iframe').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    });
});
