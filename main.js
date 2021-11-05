function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,180);
  video = createCapture(VIDEO);
  video.hide();
  MobileN = ml5.imageClassifier("MobileNet",Model_Loaded)
}

function draw()
{
  image(video,0,0,300,300)
 MobileN.classify(video,gotresult)
}

function Model_Loaded()
{
  console.log("Model Is Loaded")
}

function gotresult(ERROR,Result)
{
if(ERROR){
  console.error(ERROR)
}else{
  console.log(Result)
  document.getElementById("obj").innerHTML=Result[0].label
  document.getElementById("acc").innerHTML=Result[0].confidence.toFixed(5)
}
}

