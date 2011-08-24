// This is a hard-coded function that makes
// a triangle that is equivalent to
// (triangle/sas 120 90 150 "solid" "yellow")

function init()
{
  var canvas = document.getElementById( "canvas" );
  if ( canvas.getContext )
  {
  var ctx = canvas.getContext( "2d" );
  ctx.fillStyle = "#edd400";
  ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(150,0);
	ctx.lineTo(150,120);
	ctx.closePath();
  ctx.fill();
  }
}
onload = init ;
