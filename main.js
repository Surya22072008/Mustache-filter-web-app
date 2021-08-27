mustacheX=0;
mustacheY=0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/pLSfYy1f/mustache.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
image(video,0,0,300,300);
image(mustache,mustacheX,mustacheY,30,30);
}
function take_snapshot(){
    save('myfilter.png');
}
function modelLoaded(){
    console.log("Posenet is Initialized")
}
function getPoses(results) {
    if(results.length > 0 ){
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y
        console.log("nose x ="+ mustacheX );
        console.log("nose y ="+  mustacheY);
    }
}

