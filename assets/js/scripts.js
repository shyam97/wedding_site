$(window).scroll(function(){
    var curScrollVal = $(window).scrollTop();
    var curScroll = curScrollVal/window.innerHeight;
    // document.getElementById("demo").innerHTML = curScrollVal + "," + window.innerWidth + "," + window.innerHeight;

    // ------------------------------------------------------------

    if (window.innerHeight > window.innerWidth) {

      var stopPoint = -10 + (window.innerHeight - 400)*0.15;
    
      $("#announce").css("height",stopPoint+"vmin")
      $("#announce").css("bottom","25%")
      $("#announce").css("bottom","25%")
    }

    else {

      $("#announce").css("height","8vmin","bottom","10%")
    }

    // ----------------------------------------------------------------

    if (curScroll > 0.4 && curScroll < 1.6) {
      var start = 0.6;
      var end = 1.4;
      var opacgetting2 = (end - curScroll)*4;

        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#wreath").css("opacity",opacgetting2);
          }
          else {
            $("#wreath").css("opacity",1)
          }
        }
        else {
          $("#wreath").css("opacity",0)
        }
      } 

    // ----------------------------------------------------------------

    if (curScroll > 1.4 && curScroll < 2.6) {
      var start = 1.6;
      var end = 2.4;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#arrow").css("opacity",opacgetting1);
            $("#cartoon").css("opacity",opacgetting1);
            $("#path_mobile").css("opacity",opacgetting1);
          }
          else {
            $("#arrow").css("opacity",1)
            $("#cartoon").css("opacity",1);
            $("#path_mobile").css("opacity",1);
          }
        }
        else {
          $("#arrow").css("opacity",0);
          $("#cartoon").css("opacity",0);
          $("#path_mobile").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#arrow").css("opacity",opacgetting2);
            $("#cartoon").css("opacity",opacgetting2);
            $("#path_mobile").css("opacity",opacgetting2);
          }
          else {
            $("#arrow").css("opacity",1)
            $("#cartoon").css("opacity",1);
            $("#path_mobile").css("opacity",1);
          }
        }
        else {
          $("#arrow").css("opacity",0)
          $("#cartoon").css("opacity",0);
          $("#path_mobile").css("opacity",0);
        }
      } 
    }

    // ------------------------------------------------------------

    if (curScroll > 2.4 && curScroll < 3.6)  {
        var start = 2.6;
        var end = 3.4;
        var opacgetting1 = (curScroll - start)*4;
        var opacgetting2 = (end - curScroll)*4;

        if (opacgetting1 < opacgetting2) {
          $("#names").css("opacity",1);
          if (opacgetting1 > 0) {
            if (opacgetting1 < 1) {
              $("#announce").css("opacity",opacgetting1);
            }
            else {
              $("#announce").css("opacity",1)
            }
          }
          else {
            $("#announce").css("opacity",0);
          }
        }
        else {
          if (opacgetting2 > 0) {
            if (opacgetting2 < 1) {
              $("#announce").css("opacity",opacgetting2);
              $("#names").css("opacity",opacgetting2);
            }
            else {
              $("#announce").css("opacity",1)
            }
          }
          else {
            $("#names").css("opacity",0);
            $("#announce").css("opacity",0)
          }
        } 
      }
    // ------------------------------------------------------------




  }

); 

 