// JS Basics

/*How To Use JQuery*/

//$('h1').slideUp(500).slideDown(500);


//$(() => {
//    $('h1').click(() => {
//        $('#main').css({
//            color: 'red',
//            fontSize: 25
//        });
//
//        $('.content').css({
//            color: 'blue',
//            fontSize: 50
//        });
//    });
//});
//
//
//$(window).on('load', () => {
//    alert('Window is loaded')
//});

//Preloader

$(window).on('load', ()=> {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
})