// These two functions represent the first draft of a workable
// triangle/sas function for Whalesong. They need to be cleaned
// up and tested, but the basic logic seems to work. 

function drawLessThan90(){
        var canvas = document.getElementById('1');
        if (canvas.getContext){

          var ctx = canvas.getContext('2d');
          var x = 50;
          var y = 50;
          var a = 100;
          var b = 10;
          var c = 50;
          var radians = b * 0.0174532952;
          var height = a * Math.sin(radians);
          var width = Math.sqrt((a * a) - (height * height));

          // works for <90

          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo(c+x,y);
          ctx.lineTo((c-width)+x,height+y);
          ctx.lineTo(x,y);
          ctx.fill();
        }

      }


 function drawGreaterThan90(){
        var canvas = document.getElementById('2');
        if (canvas.getContext){

          var ctx = canvas.getContext('2d');
          var x = 50;
          var y = 50;
          var a = 100;
          var b = 150;
          var c = 50;
          var radians = b * 0.0174532952;
          var height = a * Math.sin(radians);
          var width = Math.sqrt((a * a) - (height * height));

          // works for >90

          ctx.beginPath();
          ctx.moveTo(x,y);
          ctx.lineTo(c+x,y);
          ctx.lineTo((c+width)+x,height+y);
          ctx.lineTo(x,y);
          ctx.fill();
        }

      }
