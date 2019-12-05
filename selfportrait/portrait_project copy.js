function setup() { 
  createCanvas(600,600);

}


function draw() {
  background(125);
  
  strokeWeight(0);
   //head floof
  fill(153, 0, 0);
  quad(60,400,540,400,450,200,150,200);
  quad(65,420,535,420,450,200,150,200);
  quad(70,440,530,440,450,200,150,200);
  
  //head and ears
  fill(153, 0, 0);
  ellipse(150,100,150,150);
  fill(153, 0, 0);
  ellipse(450,100,150,150);
  fill(153, 0, 0);
  fill(153, 102, 51);
  ellipse(150,100,100,100);
  fill(153, 102, 51);
  ellipse(450,100,100,100);
  fill(153, 0, 0);
  beginShape();
  vertex(525,500);
  vertex(75,500);
  vertex(125,150);
  vertex(220,100);
  vertex(380,100);
  vertex(475,150);
  endShape();
  
  //hat
  fill(245)
  quad(250,105,350,105,340,50,260,50);
  ellipse(260,50,50,50)
  ellipse(340,50,50,50)
  ellipse(300,50,50,50)
  
  
  //eyebrows
  strokeWeight(5);
  line(150,175,230,140);
  line(370,140,450,175);
  //eyes
  strokeWeight(0);
  fill(20);
  ellipse(200,225,50,100);
  fill(250);
  ellipse(210,200,20,15);
  fill(20);
  ellipse(400,225,50,100);
  fill(250);
  ellipse(410,200,20,15);
  
  //muzzle
  fill(153, 102, 51);
  quad(220,270,380,270,500,500,100,500);
  
  //tongue
  fill(255, 153, 153);
  arc(300,420,75,75,0,3.14);
  fill(255, 102, 102);
  rect(299,420,2,20);
  
  //mouth

  fill(30);
  rect(250,420,100,8);
  triangle(260,428,230,430,230,405);
  triangle(340,428,370,430,370,405);
  
 
  
  //nose
  fill(25);
  beginShape();
  vertex(250,275);
  vertex(350,275);
  vertex(375,300);
  vertex(350,375);
  vertex(250,375);
  vertex(225,300);
  endShape();
  
  
  //body
  fill(153, 0, 0);
  quad(75,500,525,500,550,625,50,625);
  fill(153, 102, 51);
  triangle(100,500,500,500,300,800);
  triangle(110,530,490,530,300,800);
  triangle(120,560,480,560,300,800);
  
 
}
