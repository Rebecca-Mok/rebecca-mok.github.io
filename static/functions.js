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
        if (e.target.id != "")
            idNum = parseInt(e.target.id)
        else
            idNum = parseInt(e.currentTarget.id)
        
        // alert(idNum)
        $('.showProjects').hide();
        $('.col').css({'background':'rgb(187, 187, 187)', 'color':'black'});
        
        if (idNum == 1){
            $(this).css({'background':'black', 'color':'white'});
            $('#HTML').toggle();

        }else if (idNum == 2){
            $(this).css({'background':'black', 'color':'white'});
            $('#CSS').toggle();

        }else if (idNum == 3){
            $(this).css({'background':'black', 'color':'white'});
            $('#JS').toggle();

        }else if (idNum == 4){
            $(this).css({'background':'black', 'color':'white'});
            $('#Python').toggle();

        }else if (idNum == 5){
            $(this).css({'background':'black', 'color':'white'});
            $('#C').toggle();

        }else if (idNum == 6){
            $(this).css({'background':'black', 'color':'white'});
            $('#R').toggle();

        }else if (idNum == 7){
            $(this).css({'background':'black', 'color':'white'});
            $('#Verilog').toggle();

        }else if (idNum == 8){
            $(this).css({'background':'black', 'color':'white'});
            $('#SQLite').toggle();

        }else if (idNum == 9){
            $(this).css({'background':'black', 'color':'white'});
            $('#ArcGIS').toggle();

        }else if (idNum == 10){
            $(this).css({'background':'black', 'color':'white'});
            $('#MS').toggle();

        }else if (idNum == 11){
            $(this).css({'background':'black', 'color':'white'});
            $('#AutoCAD').toggle();

        }else if (idNum == 12){
            $(this).css({'background':'black', 'color':'white'});
            $('#Illustrator').toggle();

        }else if (idNum == 13){
            $(this).css({'background':'black', 'color':'white'});
            $('#Photoshop').toggle();
        }


    });

    $('.closeProjects').click(function(e){
        $('.showProjects').hide();
        $('.col').css({'background':'rgb(187, 187, 187)', 'color':'black'});
    });

});

