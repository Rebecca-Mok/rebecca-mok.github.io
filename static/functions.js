$(document).ready(function(){
    // // $('.page').click(function(){
    // //     console.log('1 pressed')
    // //     $(this).css({
    // //         "background-color": "red",
    // //         "color": "white",
    // //         "padding": "5px",
    // //         "width": "120px",
    // //         "text-align": "center"
    // //     });
    // // });
    // var cw = $('.col').width();
    // var pw = $('.col').width()*.7;
    // $('.col').css({'height':cw+'px'});
    // $('.col img').css({'height':pw+'px'});

    $('.col').click(function(e){
        // console.log(e.target.id)
        // if (e.target.id == 1)
        // $('#HTML').css("display:block;");
        alert('Clicked ' + e.target.id)
        console.log(e)
    });

});

