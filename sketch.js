var x = [];
var y = [];

function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background("black");
  
  for (index = 0; index<x.length; index++ ){
    strokeWeight(20);
    stroke("white");
    point (x[index],y[index]);
  }

}

function mouseDragged(){
  x.push(mouseX);
  y.push(mouseY);
  //console.log(x);

}

function color(){
  
}

