function preload(){
    music=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    v=createCapture(VIDEO);
    v.hide();
    y=ml5.poseNet(v,modelloded);
    y.on('pose',gotposes);
}
function draw(){
    image(v,0,0,600,500)
}