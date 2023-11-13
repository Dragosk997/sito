$(function(){
    $(window).click(function () {
        $('audio')[0].play();
    });

    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],

    });
});