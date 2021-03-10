// Load content on scroll
$(window).on('load', function() {
    AOS.refresh();
  });
  
  
  // var projectDisplay = new Object();
  var projectDisplay = {
      "1": "#HTML",
      "2": "#CSS",
      "3": "#JS",
      "4": "#Python",
      "5": "#C",
      "6": "#R",
      "7": "#Verilog",
      "8": "#SQLite",
      "9": "#WordPress",
      "10": "#ArcGIS",
      "11": "#MS",
      "12": "#AutoCAD",
      "13": "#Illustrator",
      "14": "#Photoshop"
  };
  
  
  $(document).ready(function(){
  
      AOS.init();
  
      previous = 0;
  
  
      $('.col').click(function(e){
          console.log(e)
          if (e.target.id != "")
              idNum = parseInt(e.target.id)
          else
              idNum = parseInt(e.currentTarget.id)
        
          // $('.showProjects').hide();
      
          // let current = idNum
  
          // $('.col').css({'background-color': 'white', 'box-shadow': '0px 0px 20px -15px black'});
          // $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
  
          console.log("current "+idNum)
          console.log("previous "+previous)
  
          if (previous != idNum){
              $(projectDisplay[previous]).hide();
              // $('.col').css({'background-color': 'white', 'box-shadow': '0px 0px 20px -15px black'});
          }
          
          $(projectDisplay[idNum]).fadeToggle();
          previous = idNum
  
      });
  
      // $('.col').on("mouseover",function(e){
      //     // $(this).css({'background-color': 'white', 'box-shadow': '0px 0px 25px -10px black'});
      // }
  
  
  
      $('.closeProjects').click(function(e){
          $('.showProjects').hide();
          $('.col').css({'background-color': 'white', 'box-shadow': '0px 0px 20px -15px black'});
      });
  
  });
  
  