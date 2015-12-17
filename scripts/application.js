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

  //header window scroll shrink
  $(window).on('scroll', function(){ $('#main-menu-nav').toggleClass('small', $(document).scrollTop() > 0); });

});
