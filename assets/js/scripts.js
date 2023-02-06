document.addEventListener('contextmenu', event => event.preventDefault());

if (window.innerHeight > window.innerWidth) {

  var stopPoint = -10 + (window.innerHeight - 400)*0.15;

  $(".centertext").css("height",stopPoint+"vmin")
}

else {

  $(".centertext").css("height","8vmin","bottom","10%")
}

$(window).scroll(function(){
    var curScrollVal = $(window).scrollTop();
    var curScroll = curScrollVal/window.innerHeight;
    // document.getElementById("demo").innerHTML = curScrollVal + "," + window.innerWidth + "," + window.innerHeight;

    // ------------------------------------------------------------

    // ----------------------------------------------------------------

    if (curScroll < 0.6) {
      var start = 0;
      var end = 0.4;
      var opacgetting2 = (end - curScroll)*4;

        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#wreath").css("opacity",opacgetting2);
          }
          else {
            $("#wreath").css("opacity",1);
          }
        }
        else {
          $("#wreath").css("opacity",0);
        }
      } 
      else {
        $("#wreath").css("opacity",0);
        
      }

    // ----------------------------------------------------------------

    if (curScroll > 0.4 && curScroll < 1.6) {
      var start = 0.6;
      var end = 1.4;
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

    if (curScroll < 0.6 || curScroll > 1.4) {
      $("#arrow").css("opacity",0)
      $("#cartoon").css("opacity",0);
      $("#path_mobile").css("opacity",0);
    }

    // ------------------------------------------------------------

    if (curScroll > 1.4 && curScroll < 2.6)  {
        var start = 1.6;
        var end = 2.4;
        var opacgetting1 = (curScroll - start)*4;
        var opacgetting2 = (end - curScroll)*4;

        if (opacgetting1 < opacgetting2) {
          $("#names").css("opacity",1);
          if (opacgetting1 > 0) {
            if (opacgetting1 < 1) {
              $("#announce").css("opacity",opacgetting1);
              $("#announceimg").css("opacity",opacgetting1*0.3);
            }
            else {
              $("#announce").css("opacity",1)
              $("#announceimg").css("opacity",0.3);
            }
          }
          else {
            $("#announce").css("opacity",0);
            $("#announceimg").css("opacity",0);
          }
        }
        else {
          if (opacgetting2 > 0) {
            if (opacgetting2 < 1) {
              $("#announce").css("opacity",opacgetting2);
              $("#names").css("opacity",opacgetting2);
              $("#announceimg").css("opacity",opacgetting2*0.3);
            }
            else {
              $("#announce").css("opacity",1)
              $("#announceimg").css("opacity",0.3);
            }
          }
          else {
            $("#names").css("opacity",0);
            $("#announce").css("opacity",0);
            $("#announceimg").css("opacity",0);
          }
        } 
      }

      if (curScroll > 3) {
        $("#names").css("opacity",0);
      }

      if (curScroll < 1.6 || curScroll > 2.4) {
        $("#announce").css("opacity",0);
        $("#announceimg").css("opacity",0);
      }

    // ------------------------------------------------------------

    if (curScroll > 2.4 && curScroll < 3.6) {
      var start = 2.6;
      var end = 3.4;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#invited").css("opacity",opacgetting1);
            $("#inviteimg").css("opacity",opacgetting1*0.3);
          }
          else {
            $("#invited").css("opacity",1)
            $("#inviteimg").css("opacity",0.3);
          }
        }
        else {
          $("#invited").css("opacity",0);
          $("#inviteimg").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#invited").css("opacity",opacgetting2);
            $("#inviteimg").css("opacity",opacgetting2*0.3);
          }
          else {
            $("#invited").css("opacity",1);
            $("#inviteimg").css("opacity",0.3);
          }
        }
        else {
          $("#invited").css("opacity",0)
        }
      } 
    }

    if (curScroll < 2.6 || curScroll > 3.4) {
      $("#invited").css("opacity",0);
    }

// ------------------------------------------------------------

    if (curScroll > 3.4 && curScroll < 4.6) {
      var start = 3.6;
      var end = 4.4;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#events").css("opacity",opacgetting1);
          }
          else {
            $("#events").css("opacity",1)
          }
        }
        else {
          $("#events").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#events").css("opacity",opacgetting2);
          }
          else {
            $("#events").css("opacity",1)
          }
        }
        else {
          $("#events").css("opacity",0)
        }
      } 
    }

    if (curScroll < 3.6 || curScroll > 4.4) {
      $("#events").css("opacity",0);
    }

    // ----------------------------------------------------

    if (curScroll > 4.4 && curScroll < 6.3) {
      var start = 4.6;
      var end = 6.2;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#reception1").css("opacity",opacgetting1);
          }
          else {
            $("#reception1").css("opacity",1)
          }
        }
        else {
          $("#reception1").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#reception1").css("opacity",opacgetting2);
          }
          else {
            $("#reception1").css("opacity",1)
          }
        }
        else {
          $("#reception1").css("opacity",0)
        }
      } 
    }

    if (curScroll < 4.6 || curScroll > 6.2) {
      $("#reception1").css("opacity",0);
    }

    // -----------------------------------------------------------

    if (curScroll > 4.8 && curScroll < 6.3) {
      var start = 5;
      var end = 6.2;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#wedding").css("opacity",opacgetting1);
          }
          else {
            $("#wedding").css("opacity",1)
          }
        }
        else {
          $("#wedding").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#wedding").css("opacity",opacgetting2);
          }
          else {
            $("#wedding").css("opacity",1)
          }
        }
        else {
          $("#wedding").css("opacity",0)
        }
      } 
    }

    if (curScroll < 5 || curScroll > 6.2) {
      $("#wedding").css("opacity",0);
    }

    // ----------------------------------------------------

    if (curScroll > 5.2 && curScroll < 6.3) {
      var start = 5.4;
      var end = 6.2;
      var opacgetting1 = (curScroll - start)*4;
      var opacgetting2 = (end - curScroll)*4;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#reception2").css("opacity",opacgetting1);
          }
          else {
            $("#reception2").css("opacity",1)
          }
        }
        else {
          $("#reception2").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#reception2").css("opacity",opacgetting2);
          }
          else {
            $("#reception2").css("opacity",1)
          }
        }
        else {
          $("#reception2").css("opacity",0)
        }
      } 
    }

    if (curScroll < 5.4 || curScroll > 6.2) {
      $("#reception2").css("opacity",0);
    }
    
  }

); 

 