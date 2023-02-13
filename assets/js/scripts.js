// document.addEventListener('contextmenu', event => event.preventDefault());
// else {

//   $(".centertext").css("height","8vmin","bottom","10%")
// }

$(window).scroll(function(){

    var curScrollVal = $(window).scrollTop();
    var curScroll = curScrollVal/window.innerHeight;
    // document.getElementById("demo").innerHTML = curScrollVal + "," + window.innerWidth + "," + window.innerHeight;

    // ------------------------------------------------------------

    // ----------------------------------------------------------------

    if (curScroll < 1.2) {

      $("#scroll").css("visibility","visible");
      $("#wreath1").css("visibility","visible");
      $("#names1").css("visibility","visible");

      var start = 0;
      var end = 0.8;
      var opacgetting2 = (end - curScroll)*2;

        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#scroll").css("opacity",opacgetting2);
            $("#wreath1").css("opacity",opacgetting2);
            $("#names1").css("opacity",opacgetting2);
          }
          else {
            $("#scroll").css("opacity",1);
            $("#wreath1").css("opacity",1);
            $("#names1").css("opacity",1);
          }
        }
        else {
          $("#scroll").css("opacity",0);
          $("#wreath1").css("opacity",0);
          $("#names1").css("opacity",0);
        }
      } 
      else {
        $("#scroll").css("opacity",0);
        $("#wreath1").css("opacity",0);
        $("#names1").css("opacity",0);
        $("#scroll").css("visibility","hidden");
        $("#wreath1").css("visibility","hidden");
        $("#names1").css("visibility","hidden");
        
      }

    // ----------------------------------------------------------------

    if (curScroll < 2.4) {

      $("#scroll").css("visibility","visible");

      var start = 1;
      var end = 1.8;
      var opacgetting2 = (end - curScroll)*2;

        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#scroll").css("opacity",opacgetting2);
          }
          else {
            $("#scroll").css("opacity",1);
          }
        }
        else {
          $("#scroll").css("opacity",0);
        }
      } 
      else {
        $("#scroll").css("opacity",0);
        $("#scroll").css("visibility","hidden");        
      }

    // ----------------------------------------------------------------

    if (curScroll > 0.8 && curScroll < 3.2) {

      $("#cartoon").css("visibility","visible");

      var start = 1.2;
      var end = 2.8;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#cartoon").css("opacity",opacgetting1);
          }
          else {
            $("#cartoon").css("opacity",1);
          }
        }
        else {
          $("#cartoon").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#cartoon").css("opacity",opacgetting2);
          }
          else {
            $("#cartoon").css("opacity",1);
          }
        }
        else {
          $("#cartoon").css("opacity",0);
        }
      } 
    }
    else {
      $("#cartoon").css("opacity",0);
      $("#cartoon").css("visibility","hidden");
    }

    // ------------------------------------------------------------

    if (curScroll > 2.8 && curScroll < 5.2) {

      $("#arrow").css("visibility","visible");

      var start = 3.2;
      var end = 4.8;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#arrow").css("opacity",opacgetting1);
          }
          else {
            $("#arrow").css("opacity",1);
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
            $("#arrow").css("opacity",1);
          }
        }
        else {
          $("#arrow").css("opacity",0);
        }
      } 
    }
    else {
      $("#arrow").css("opacity",0);
      $("#arrow").css("visibility","hidden");
    } 

    // ------------------------------------------------------------

    if (curScroll > 4.8 && curScroll < 7.2)  {

      $("#announce").css("visibility","visible");
      $("#announceimg").css("visibility","visible");

        var start = 5.2;
        var end = 6.8;
        var opacgetting1 = (curScroll - start)*2;
        var opacgetting2 = (end - curScroll)*2;

        if (opacgetting1 < opacgetting2) {

          if (opacgetting1 > 0) {
            if (opacgetting1 < 1) {
              $("#announce").css("opacity",opacgetting1);
              $("#announceimg").css("opacity",opacgetting1*0.3);
            }
            else {
              $("#announce").css("opacity",1);
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
              $("#announceimg").css("opacity",opacgetting2*0.3);
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
      }
      else{
        $("#announce").css("opacity",0);
        $("#announceimg").css("opacity",0);
        $("#announce").css("visibility","hidden");
        $("#announceimg").css("visibility","hidden");
      }

    // ------------------------------------------------------------

    if (curScroll > 6.8 && curScroll < 9.2) {

      $("#invited").css("visibility","visible");
      $("#inviteimg").css("visibility","visible");

      var start = 7.2;
      var end = 8.8;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#invited").css("opacity",opacgetting1);
            $("#inviteimg").css("opacity",opacgetting1*0.3);
          }
          else {
            $("#invited").css("opacity",1);
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
          $("#invited").css("opacity",0);
          $("#inviteimg").css("opacity",0);
        }
      } 
    }
    else {
      $("#invited").css("opacity",0);
      $("#inviteimg").css("opacity",0);
      $("#invited").css("visibility","hidden");
      $("#inviteimg").css("visibility","hidden");
    }

// ------------------------------------------------------------

    if (curScroll > 8.8 && curScroll < 11.2) {

      $(".scroll2").css("visibility","visible");
      $("#events").css("visibility","visible");

      var start = 9.2;
      var end = 10.8;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $(".scroll2").css("opacity",opacgetting1);
            $("#events").css("opacity",opacgetting1);
          }
          else {
            $(".scroll2").css("opacity",1);
            $("#events").css("opacity",1);
          }
        }
        else {
          $(".scroll2").css("opacity",0);
          $("#events").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $(".scroll2").css("opacity",opacgetting2);
            $("#events").css("opacity",opacgetting2);
          }
          else {
            $(".scroll2").css("opacity",1);
            $("#events").css("opacity",1);
          }
        }
        else {
          $(".scroll2").css("opacity",0);
          $("#events").css("opacity",0);
        }
      } 
    }
    else{
      $(".scroll2").css("opacity",0);
      $("#events").css("opacity",0);
      $(".scroll2").css("visibility","hidden");
      $("#events").css("visibility","hidden");
    }

    // ----------------------------------------------------

    if (curScroll > 10.8 && curScroll < 14.6) {

      $("#reception1").css("visibility","visible");

      var start = 11.2;
      var end = 14.4;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#reception1").css("opacity",opacgetting1);
          }
          else {
            $("#reception1").css("opacity",1);
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
            $("#reception1").css("opacity",1);
          }
        }
        else {
          $("#reception1").css("opacity",0);
        }
      } 
    }
    else {
      $("#reception1").css("opacity",0);
      $("#reception1").css("visibility","hidden");
    }

    // -----------------------------------------------------------

    if (curScroll > 11.6 && curScroll < 14.6) {

      $("#wedding").css("visibility","visible");

      var start = 12;
      var end = 14.4;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#wedding").css("opacity",opacgetting1);
          }
          else {
            $("#wedding").css("opacity",1);
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
            $("#wedding").css("opacity",1);
          }
        }
        else {
          $("#wedding").css("opacity",0);
        }
      } 
    }
    else {
      $("#wedding").css("opacity",0);
      $("#wedding").css("visibility","hidden");
    }

    // ----------------------------------------------------

    if (curScroll > 12.4 && curScroll < 14.6) {

      $("#reception2").css("visibility","visible");

      var start = 12.8;
      var end = 14.4;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#reception2").css("opacity",opacgetting1);
          }
          else {
            $("#reception2").css("opacity",1);
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
            $("#reception2").css("opacity",1);
          }
        }
        else {
          $("#reception2").css("opacity",0);
        }
      } 
    }
    else {
      $("#reception2").css("opacity",0);
      $("#reception2").css("visibility","hidden");
    }

    // -------------------------------------------------------

    // if (curScroll > 12.2 && curScroll < 14.6) {

    //   $("#locations").css("visibility","visible");

    //   var start = 12.6;
    //   var end = 14.2;
    //   var opacgetting1 = (curScroll - start)*2;
    //   var opacgetting2 = (end - curScroll)*2;

    //   if (opacgetting1 < opacgetting2) {
    //     if (opacgetting1 > 0) {
    //       if (opacgetting1 < 1) {
    //         $("#locations").css("opacity",opacgetting1);
    //       }
    //       else {
    //         $("#locations").css("opacity",1)
    //       }
    //     }
    //     else {
    //       $("#locations").css("opacity",0);
    //     }
    //   }
    //   else {
    //     if (opacgetting2 > 0) {
    //       if (opacgetting2 < 1) {
    //         $("#locations").css("opacity",opacgetting2);
    //       }
    //       else {
    //         $("#locations").css("opacity",1)
    //       }
    //     }
    //     else {
    //       $("#locations").css("opacity",0)
    //     }
    //   } 
    // }

    // if (curScroll < 12.6 || curScroll > 14.2) {
    //   $("#locations").css("opacity",0);
    //   $("#locations").css("visibility","hidden");
    // }

    // ----------------------------------------------------------

    if (curScroll > 14.2 && curScroll < 16.6) {

      $("#chennai").css("visibility","visible");
      $("#chennaimap").css("visibility","visible");

      var start = 14.6;
      var end = 16.2;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#chennai").css("opacity",opacgetting1);
            $("#chennaimap").css("opacity",opacgetting1);
          }
          else {
            $("#chennai").css("opacity",1);
            $("#chennaimap").css("opacity",1);
          }
        }
        else {
          $("#chennai").css("opacity",0);
          $("#chennaimap").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#chennai").css("opacity",opacgetting2);
            $("#chennaimap").css("opacity",opacgetting2);
          }
          else {
            $("#chennai").css("opacity",1);
            $("#chennaimap").css("opacity",1);
          }
        }
        else {
          $("#chennai").css("opacity",0);
          $("#chennaimap").css("opacity",0);
        }
      } 
    }
    else {
      $("#chennai").css("opacity",0);
      $("#chennaimap").css("opacity",0);
      $("#chennai").css("visibility","hidden");
      $("#chennaimap").css("visibility","hidden");
    }

    // ----------------------------------------------------------

    if (curScroll > 16.2 && curScroll < 20.6) {

      $("#welcome").css("visibility","visible");

      var start = 16.6;
      var end = 20.2;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#welcome").css("opacity",opacgetting1);
          }
          else {
            $("#welcome").css("opacity",1);
          }
        }
        else {
          $("#welcome").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#welcome").css("opacity",opacgetting2);
          }
          else {
            $("#welcome").css("opacity",1);
          }
        }
        else {
          $("#welcome").css("opacity",0);
        }
      } 
    }
    else {
      $("#welcome").css("opacity",0);
      $("#welcome").css("visibility","hidden");
    }
    
    // --------------------------------------------------------------

    if (curScroll > 18.2 && curScroll < 20.6) {

      $("#welcome2").css("visibility","visible");

      var start = 18.6;
      var end = 20.2;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;
      var red1 = 243;
      var green1 = 205;
      var blue1 = 203;
      var red2 = 131;
      var green2 = 66;
      var blue2 = 87;
      var redp = red1 + (red2-red1)*opacgetting1;
      var redn = red1 + (red2-red1)*opacgetting2;
      var bluep = blue1 + (blue2-blue1)*opacgetting1;
      var bluen = blue1 + (blue2-blue1)*opacgetting2;
      var greenp = green1 + (green2-green1)*opacgetting1;
      var greenn = green1 + (green2-green1)*opacgetting2;

      var redpc = red2 + (red1-red2)*opacgetting1;
      var rednc = red2 + (red1-red2)*opacgetting2;
      var bluepc = blue2 + (blue1-blue2)*opacgetting1;
      var bluenc = blue2 + (blue1-blue2)*opacgetting2;
      var greenpc = green2 + (green1-green2)*opacgetting1;
      var greennc = green2 + (green1-green2)*opacgetting2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#welcome2").css("opacity",opacgetting1);
            $(".button").css("background-color","rgb("+redp+","+greenp+","+bluep+")");
            $(".button").css("color","rgb("+redpc+","+greenpc+","+bluepc+")");
          }
          else {
            $("#welcome2").css("opacity",1);
            $(".button").css("background-color","rgb("+red2+","+green2+","+blue2+")");
            $(".button").css("color","rgb("+red1+","+green1+","+blue1+")");
          }
        }
        else {
          $("#welcome2").css("opacity",0);
          $(".button").css("background-color","rgb("+red1+","+green1+","+blue1+")");
          $(".button").css("color","rgb("+red2+","+green2+","+blue2+")");
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#welcome2").css("opacity",opacgetting2);
            $(".button").css("background-color","rgb("+redn+","+greenn+","+bluen+")");
            $(".button").css("color","rgb("+rednc+","+greennc+","+bluenc+")");
          }
          else {
            $("#welcome2").css("opacity",1);
            $(".button").css("background-color","rgb("+red2+","+green2+","+blue2+")");
            $(".button").css("color","rgb("+red1+","+green1+","+blue1+")");
          }
        }
        else {
          $("#welcome2").css("opacity",0);
          $(".button").css("background-color","rgb("+red1+","+green1+","+blue1+")");
          $(".button").css("color","rgb("+red2+","+green2+","+blue2+")");
        }
      } 
    }
    else {
      $("#welcome2").css("opacity",0);
      $("#welcome2").css("visibility","hidden");
      $(".button").css("background-color","rgb("+red1+","+green1+","+blue1+")");
      $(".button").css("color","rgb("+red2+","+green2+","+blue2+")");
    }

    // -------------------------------------------------------------

    if (curScroll > 20.2 && curScroll < 22.6) {

      $("#bye").css("visibility","visible");
      $("#byeimg").css("visibility","visible");

      var start = 20.6;
      var end = 22.2;
      var opacgetting1 = (curScroll - start)*2;
      var opacgetting2 = (end - curScroll)*2;

      if (opacgetting1 < opacgetting2) {
        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#bye").css("opacity",opacgetting1);
            $("#byeimg").css("opacity",opacgetting1*0.3);
          }
          else {
            $("#bye").css("opacity",1);
            $("#byeimg").css("opacity",0.3);
          }
        }
        else {
          $("#bye").css("opacity",0);
          $("#byeimg").css("opacity",0);
        }
      }
      else {
        if (opacgetting2 > 0) {
          if (opacgetting2 < 1) {
            $("#bye").css("opacity",opacgetting2);
            $("#byeimg").css("opacity",opacgetting2*0.3);
          }
          else {
            $("#bye").css("opacity",1);
            $("#byeimg").css("opacity",0.3);
          }
        }
        else {
          $("#bye").css("opacity",0);
          $("#byeimg").css("opacity",0);
        }
      } 
    }
    else {
      $("#bye").css("opacity",0);
      $("#byeimg").css("opacity",0);
      $("#bye").css("visibility","hidden");
      $("#byeimg").css("visibility","hidden");
    }

    // -------------------------------------------------------------

    if (curScroll > 22.2) {
      
      $("#names2").css("visibility","visible");
      $("#wreath2").css("visibility","visible");

      var start = 22.6;
      var opacgetting1 = (curScroll - start)*2;

        if (opacgetting1 > 0) {
          if (opacgetting1 < 1) {
            $("#names2").css("opacity",opacgetting1);
            $("#wreath2").css("opacity",opacgetting1);
          }
          else {
            $("#names2").css("opacity",1);
            $("#wreath2").css("opacity",1);
          }
        }
        else {
          $("#names2").css("opacity",0);
          $("#wreath2").css("opacity",0);
        }
    }
    else {
      $("#names2").css("opacity",0);
      $("#wreath2").css("opacity",0);
      $("#names2").css("visibility","hidden");
      $("#wreath2").css("visibility","hidden");
    }
  }

); 

 