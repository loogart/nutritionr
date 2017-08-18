// ScrollReveal
window.sr = ScrollReveal({
    reset: false,
    distance: '50px',
    duration: 750,
    mobile: false
});
sr.reveal('.left', {
    origin: 'left',
});
sr.reveal('.right', {
    origin: 'right',
});
sr.reveal('.top', {
    origin: 'top',
});
sr.reveal('.top-2', {
    origin: 'top',
    duration: 250
});
sr.reveal('.bottom', {
    origin: 'bottom',
});
sr.reveal('.bottom-2', {
    origin: 'bottom',
    delay: 50
});
sr.reveal('.bottom-3', {
    origin: 'bottom',
    delay: 100
});

//scrollr
skrollr.init({
    mobileCheck: function () {
        //hack - forces mobile version to be off
        return false;
    }
});

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
