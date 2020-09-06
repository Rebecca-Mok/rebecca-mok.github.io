$(document).ready(function(){

    $('.col').click(function(e){
        if (e.target.id != "")
            idNum = parseInt(e.target.id)
        else
            idNum = parseInt(e.currentTarget.id)
      
        $('.showProjects').hide();
        $('.col').css({'background-color': 'white', 'box-shadow': '0px 0px 20px -15px black'});
        
        if (idNum == 1){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#HTML').toggle();

        }else if (idNum == 2){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#CSS').toggle();

        }else if (idNum == 3){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#JS').toggle();

        }else if (idNum == 4){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#Python').toggle();

        }else if (idNum == 5){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#C').toggle();

        }else if (idNum == 6){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#R').toggle();

        }else if (idNum == 7){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#Verilog').toggle();

        }else if (idNum == 8){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#SQLite').toggle();

        }else if (idNum == 9){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#WordPress').toggle();

        }else if (idNum == 10){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#ArcGIS').toggle();

        }else if (idNum == 11){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#MS').toggle();

        }else if (idNum == 12){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#AutoCAD').toggle();

        }else if (idNum == 13){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#Illustrator').toggle();

        }else if (idNum == 14){
            $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
            $('#Photoshop').toggle();
        }


    });

    $('.closeProjects').click(function(e){
        $('.showProjects').hide();
        $('.col').css({'background-color': 'white', 'box-shadow': '0px 0px 20px -15px black'});
    });

});

