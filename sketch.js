var speed;
var rotationAngle = 1;
const colors= ['white', 'purple', "red",'pink', 'yellow', 'brown','cyan']
let currentIndex = 0;
let frameCounter = 0;
let frameDelay = 60;
function setup() {
  createCanvas(1000, 700);
}

function draw() {
  //Increasing the counter each time
  frameCounter++;
  background(0);
  speed = frameCount;


 //This is to slow down the color changing sopeed
 if (frameCounter >= frameDelay) {
  currentIndex = (currentIndex + 1) % colors.length;
  frameCounter = 0;
}
  // Calling the circle function
 
  translate(width / 2, height / 2);

  // Drawing the sun  
    push();

  rotate(radians(speed / 3));
  celestialObj(color(255, 150, 0), 200,  0);

 
  pop();




  // Drawing the earth
  push();
  rotate(radians(speed)); 
  celestialObj(color(0, 0, 255), 80,  300);


      // First moon
        push();
       rotate(radians(-speed * 2));
      celestialObj(color(255), 30,86)
  
  
        //Planet Around the  moon
         push();
  rotate(radians(speed*3));
  celestialObj(color(200, 200, 200), 10,30); 
  pop();

  pop();

  // Second Moon
  push();
  rotate(radians(-speed*3))
  celestialObj(color(188,165,165),24,112 )
 pop();
 pop();



}


/*
Function takes in the following paramet
-->Color
-->Size
--> Translate postion

*/
function celestialObj(color, size, translatePoint) {

  //It moves the object to the center of the orbit
  translate(0, translatePoint) 
  strokeWeight(5);
  fill(color);
  stroke(0);
  ellipse(0, 0, size, size);
  line(0, 0, size / 2, 0);
}


