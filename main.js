function setup(){
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  canvas.center();
  
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();

  }
  
function preload(){

  }
