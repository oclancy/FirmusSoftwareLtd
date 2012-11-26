function resize() {
    if (window.location.href == "http://firmus-software.co.uk/") {
        $('#tiles').css('position', 'relative');
    }
}

$(document).ready(function () {

    $(".appbar").applicationBar({
        preloadAltBaseTheme: true,
        bindKeyboard: true,
        metroLightUrl: 'images/metroIcons_light.jpg',
        metroDarkUrl: 'images/metroIcons.jpg',
        baseTheme:'light'
    });

    //// append the theme options 
    //var mJs = jQuery.fn.metrojs;
    //mJs.theme.appendAccentColors({
    //    accentListContainer: ".theme-options"
    //});

    //mJs.theme.appendBaseThemes({
    //    baseThemeListContainer: ".base-theme-options"
    //});

    $(".live-tile").liveTile();

    $(window).resize(function (ev)
    {
        resize();
    });

    resize();

});