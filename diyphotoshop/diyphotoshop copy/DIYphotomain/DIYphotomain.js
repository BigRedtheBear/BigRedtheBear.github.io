var img;
var initials ='EG'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 0; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  img = loadImage('/madeinchina.png');}


function setup() {
createCanvas(600, 600);  // canvas size
background(0);   // use our background screen color
var x= mouseX;
var y= mouseY;
}

function draw() {
  if (keyIsPressed) {
    choice = key ;  // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    stroke(250);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);}
    
    else if (toolChoice == '2') { // second tool
    stroke(250);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);}
    
    else if (toolChoice == '3') { // third tool
    stroke(100);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);} 
    
    else if (toolChoice == '4') {
    stroke(100);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);}
    
    else if (key == '5') {
    stroke(230,0,0);
    testbox();
    line(mouseX, mouseY, pmouseX, pmouseY);}
    
    
    else if (toolChoice == '6') {
      stroke(250, 216, 80)
      fill(250, 216, 80);
      ellipse(mouseX,mouseY,30,30);
     }
 
      
    else if (toolChoice == '7') {
      stroke(50);
      fill(37, 214, 21);
      arc(mouseX, mouseY, 30, 30, 0, PI + QUARTER_PI,CHORD);}
  
    else if (toolChoice == '8') {
      fill(200,0,0);
      textSize(32);
      text('Submit for Premium Content', mouseX, mouseY);}
    
   else if (toolChoice == '9') {
      fill(200,0,0);
      textSize(60);
      text('顺从', mouseX, mouseY);}
    
    
   else if (toolChoice == '0') { // g places the image we pre-loaded
      image(img, mouseX-100, mouseY-50);
    
  }
 }
 
function testbox() {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  x1 = pmouseX;
  y1 = pmouseY;
  fill(230,0,0);
  triangle(x,y,x1,y1,x-10,y-10);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
