$(window).scroll(function(){
    var curScrollVal = $(window).scrollTop();
    var curScroll = curScrollVal/window.innerHeight;
    // document.getElementById("demo").innerHTML = curScrollVal + "," + window.innerWidth + "," + window.innerHeight;

    // ------------------------------------------------------------

    if (curScrollVal > 600) {
      document.getElementById('twonames').innerHTML = "Sneha <br> <span style=\"font-size:50%;\">&</span> <br> Shyam"
      $("#names").css("line-height",0.75);
    }

    else {
      document.getElementById('twonames').innerHTML = "Sneha & &nbsp<br>&nbsp&nbsp&nbsp Shyam"
      $("#names").css("line-height",1.1);
    }

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

    // ------------------------------------------------------------

    var opacgetting1 = (curScroll - 2)*4;
      var opacgetting2 = (3 - curScroll)*4;

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
    // ------------------------------------------------------------

  }

); 

 