$(document).ready(function() {

  //Intro animation
  //canvas knife
  var knifeCanvas = document.getElementById('knife');
  knifeCanvas.width = 220;
  knifeCanvas.height = 30;
  if (knifeCanvas.getContext){
    var knife = knifeCanvas.getContext('2d');
    //handle
    knife.fillStyle = "#422b15";
    knife.beginPath();
    knife.moveTo(140,0);
    knife.bezierCurveTo(185,5,205,-2,217,3);
    knife.quadraticCurveTo(221,13,217,20);
    knife.bezierCurveTo(205,25,185,18,140,23);
    knife.fill();
    knife.closePath();
    //handle detail
    knife.beginPath();
    knife.fillStyle = "#bebebe";
    knife.arc(152,11,3,0,360);
    knife.arc(202,11,3,0,360);
    //blade
    knife.moveTo(140,2);
    knife.lineTo(140,30);
    knife.quadraticCurveTo(2,33,0,2);
    knife.fill();
    knife.closePath();
    //blade detail
  }
  //canvas watermelon
  //front half
  var watermelonFrontCanvas = document.getElementById("watermelon-front");
  watermelonFrontCanvas.width = 280;
  watermelonFrontCanvas.height = 280;
  if (watermelonFrontCanvas.getContext){
    var front = watermelonFrontCanvas.getContext('2d');
    front.fillStyle = "#25791b";
    squiglyFill(front, 10, 4, 100,50,100,200);
  }

  function squiglyFill(context, bulge, count, startX, startY, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    var stepY = ( endY - startY ) / count;
    var stepX = ( endX - startX ) / count;
    var bulgeX = Math.atan2(stepY, stepX)/(Math.PI/2)*bulge;
    var bulgeY = bulge - bulgeX;
    for (x = startX + stepX, y = startY + stepY, i=0; i<count; i++, x+=stepX, y+=stepY) {
      context.quadraticCurveTo(Math.round(x-stepX/2),Math.round(y-stepY/2),Math.round(x-stepX/2+bulgeX) ,Math.round(y-stepY/2+bulgeY));
      context.quadraticCurveTo(Math.round(x-stepX/2),Math.round(y-stepY/2),Math.round(x), Math.round(y));
    }
    context.fill();
    for (x = endX - stepX, y = endY - stepY, i=0; i<count; i++, x-=stepX, y-=stepY) {
      context.quadraticCurveTo(Math.round(x+stepX/2),Math.round(y+stepY/2),Math.round(x+stepX/2-bulgeX) ,Math.round(y+stepY/2-bulgeY));
      context.quadraticCurveTo(Math.round(x+stepX/2),Math.round(y+stepY/2),Math.round(x), Math.round(y));
    }
    context.fill();
    context.closePath();

  }

  //header window scroll shrink
  $(window).on('scroll', function(){ $('#main-menu-nav').toggleClass('small', $(document).scrollTop() > 0); });

});
