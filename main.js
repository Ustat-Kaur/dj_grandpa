song_1 = "";
song_2 = "";

song_1_status = "";
song_2_status = "";

rightWristY = 0;
rightWristX = 0;
leftWristY = 0;
leftWristX = 0;

score_right_wrist = 0;
score_left_wrist = 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSounds("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("FF0000");
    stroke("#FF0000");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        score_left_wrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}
