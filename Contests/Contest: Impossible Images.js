/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/

/* 
    I've been programming X months, and I have learned YY% of Intro to JS.
    TODO: Fill that out ^
    
    TODO: Remove starter code below.
*/

//{
var r = 0;
draw = function(){
  
  background(255);
  
  for(var i = 0; i < width; i += 100){
        for(var j = 0; j < height; j += 80){
            strokeWeight(2);
            noFill();
            stroke(0, 0, 0, 8 + sin((i+j)+frameCount*3)*29);
            rect(i, j, 166, 138);
        }
  }
  
  fill(0);
  stroke(255);
  strokeWeight(2);
  
  pushMatrix();
  translate(300, 338);
  rotate(r);
  scale(1.3);
  
  pushMatrix();
  translate(-153, -230);
  
  beginShape();
  vertex(99,141);
  vertex(118,128);
  vertex(254,227);
  vertex(120,290);
  vertex(122,262);
  vertex(217,221);
  endShape(CLOSE);
  
  beginShape();
  vertex(217,221);
  vertex(99,142);
  vertex(78,302);
  vertex(96,320);
  vertex(114,175);
  vertex(192,232);
  endShape(CLOSE);
  
  beginShape();
  vertex(254,226);
  vertex(246,251);
  vertex(96,320);
  vertex(114,175);
  vertex(133,190);
  vertex(120,287);
  endShape(CLOSE);
  
  popMatrix();
  popMatrix();
  
  r ++;
  textAlign(CENTER, CENTER);
  textFont(createFont("arial Bold"), 40);
  textFont(createFont("bauhaus 93"), 59);
  text("Contest:\nIMPOSSIBLE IMAGES", 300, 100);
  textFont(createFont("arial Bold"), 40);
  text("Deadline: April 26th, 2019", 300, 540);
  
};
//}
