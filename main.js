video = "";
objects=[];
status = "";
function preload(){
video = createVideo('video.mp4');
video.hide();
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 640, 480);
    if(status !="")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i< objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

          r=random(255);
          g=random(255);
          b=random(255);



        fill(r, g, b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}


function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
    {
 console.log("Model Loaded!");
 status = true;
 video.loop();
 video.speed(1);
 video.volume(0);

    }
