function preload() {

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    

}
function darw() {
image(video, 0, 0,300, 300);
image(clown_nose , noseX ,noseY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function preload() {

}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet Is Intialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose x ="+ results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
noseX=0;
noseY=0;

function preload() {
clown_nose =loadImage('https://i.postimg.cc/XYxGxdJX/e5cdf354fc1fa8e51163f45dbc17d0e4.jpg')
}
