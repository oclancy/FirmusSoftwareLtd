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
        if (window.location.href == "http://localhost:2358/#") {
            var mainHeight = $(tiles).parent().parent().height();

            $(tiles).css("position", "relative");
            $(tiles).css("top", mainHeight / 2);
        }
    });

});