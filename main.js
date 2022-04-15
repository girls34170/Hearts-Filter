heartx=0;
hearty=0;
function preload(){
    hearts=loadImage("https://i.postimg.cc/qqrK6qNv/hearts-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
} 
function gotposes(results){
if(results.length>0){
    console.log(results);
    heartx=results[0].pose.nose.x-150;
    hearty=results[0].pose.nose.y-300;
}
}
function draw(){
    image(video,0,0,700,500);
    image(hearts,heartx,hearty,350,300);
}
function takesnapshot(){
    save("heart.png");
}