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

    if (curScroll > 0.9 && curScroll < 2.1) {
      var start = 1.1;
      var end = 1.9;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#arrow").css("opacity",opacgetting1);
          }
          else {
            $("#arrow").css("opacity",1)
          }
        }
        else {
          $("#arrow").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#arrow").css("opacity",opacgetting2);
          }
          else {
            $("#arrow").css("opacity",1)
          }
        }
        else {
          $("#arrow").css("opacity",0)
        }
      } 
    }

    // ------------------------------------------------------------

    if (curScroll > 1.9 && curScroll < 3.1)  {
        var start = 2.1;
        var end = 2.9;
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

 