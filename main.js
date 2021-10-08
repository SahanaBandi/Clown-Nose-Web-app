nose_x=10;
nose_y=10;


function preload()
{
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log("Pose net is Intiallized")
}

function draw()
{
image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot()
{
    save('filter_image.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose_x="+results[0].pose.nose.x);
        console.log("nose_y="+results[0].pose.nose.y);
    }
}