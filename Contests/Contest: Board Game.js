/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/

/* I've been programming X months, and I have learned YY% of Intro to JS.

TODO: Fill that out ^^^ */ 

//TODO: Remove starter code below 
{
    enableContextMenu();
    var GREY_FILL = color(87, 87, 87);
    var GREY_STROKE = color(64, 64, 64);
    var TAN_FILL = color(245, 233, 182);
    var TAN_STROKE = color(235, 221, 164);
    var FONT = createFont("Trebuchet MS Bold");
    var FONT_SIZE_L = 100;
    var FONT_SIZE_M = 80;
    var FONT_SIZE_S = 32;
    rectMode(CENTER);
    textAlign(CENTER);
    background(255);
    
    
    /** Tan piece **/
    pushMatrix();
    translate(120, 280);
    rotate(15);
    scale(1.0);
    
    noStroke();
    fill(TAN_FILL);
    rect(-1, -11, 76, 163);
    noFill();
    strokeWeight(20);
    stroke(TAN_FILL);
    bezier(-45, -95, -20, -50, -20, 50, -59, 80);
    bezier(45, -95, 20, -50, 20, 50, 59, 80);
    stroke(TAN_STROKE);
    line(-70, 99, 70, 99);
    line(-60, 80, 60, 80);
    noStroke();
    fill(TAN_STROKE);
    rect(0, -100, 110, 20);
    rect(-45, -120, 20, 21);
    rect(0, -120, 35, 21);
    rect(45, -120, 20, 21);
    
    // Shadows
    stroke(0, 0, 0, 30);
    line(-70, 99, 70, 99);
    fill(0, 0, 0, 80);
    noStroke();
    quad(-55, -90, 55, -90, 47, -75, -47, -75);
    popMatrix();
    
    /** Grey piece **/
    pushMatrix();
    translate(480, 280);
    rotate(-20);
    scale(1.0);
    
    fill(GREY_FILL);
    beginShape();
    curveVertex(-12, 20);
    curveVertex(61, 70);
    curveVertex(42, 46);
    curveVertex(39, 12);
    curveVertex(52, -31);
    curveVertex(37, -86);
    curveVertex(-10, -131);
    curveVertex(-25, -156);
    curveVertex(-36, -133);
    curveVertex(-55, -132);
    curveVertex(-51, -119);
    curveVertex(-80, -86);
    curveVertex(-107, -55);
    curveVertex(-93, -34);
    curveVertex(-71, -46);
    curveVertex(-35, -57);
    curveVertex(-18, -53);
    curveVertex(-61, -8);
    curveVertex(-69, 10);
    curveVertex(-53, 29);
    curveVertex(-47, 49);
    curveVertex(-61, 70);
    curveVertex(0, 24);
    endShape();
    
    // Base
    strokeWeight(20);
    stroke(GREY_STROKE);
    strokeWeight(20);
    line(-70, 99, 70, 99);
    line(-60, 80, 60, 80);
    popMatrix();
    
    textFont(FONT, FONT_SIZE_L);
    text("Contest:", width/2, 100);
    textSize(FONT_SIZE_M);
    text("Board Game", width/2, height-90);
    textSize(FONT_SIZE_S);
    text("Deadline: July 27th, 2018", width/2, height-20);
}
