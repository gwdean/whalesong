I need to crack down and really figure out how these
work well, so that I can pack them up and send them
out soon.

Things I need to finish off these files:

* A copy of the kernel.js file so that I can figure out
  how to reformat the images
  
* A conceptual description of how these files work. We
  can use the triangle/sas as an example, and then see
  what we can do for the others.
  
* Triangle/sas -> a conceptual description.

(less than 90)
Start at x,y
Move along the x-axis to the length of side-c (I.e. 100 in our example)
Draw line to a point that is to the "left" of "c" and is located at "height"
Draw line back to x,y

(greater than 90)
Start at x,y
Move along the x-axis to the length of side-c (i.e. 100 in our example)
Draw a line to a point that is the "right" of "c" and is located at "height"
Draw line back to x,y

* Triangle/sss -> a conceptual definition
* Triangle/ssa -> a conceptual definition
(...and so on...)




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
            if(this.angle < 90) {
          ctx.moveTo(x,y);
          ctx.lineTo(c+x,y);
          ctx.lineTo((c-width)+x,height+y);
          ctx.lineTo(x,y);
          } else {
          
          ctx.moveTo(x,y);
          ctx.lineTo(c+x,y);
          ctx.lineTo((c+width)+x,height+y);
          ctx.lineTo(x,y);
          }
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
          var x-radians = x-degrees * Math.PI / 180;
          var x-degrees = x-radians * 180 / Math.PI;
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
