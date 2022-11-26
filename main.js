
var canvasSizeX = 600;
var canvasSizeY = 500;
var canvasPosX = screen.width/2 - canvasSizeX/2;
var canvasPosY = screen.height/2 - canvasSizeY/2;


leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
  song1 = loadSound("HP1.mp3");
  song2 = loadSound("PP1.mp3");
  song3 = loadSound("PP2.mp3");
}

function setup() {
  canvas = createCanvas(canvasSizeX, canvasSizeY);
  canvas.position(canvasPosX,canvasPosY);
  video = createCapture(VIDEO);
  video.size(canvasSizeX,canvasSizeY);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded () {
  console.log('PoseNet Is Initialized');
}

function draw() {
  image(video, 0, 0, 600, 500);
  
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
      console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
  }
}