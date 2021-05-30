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
background(0);
noFill();

var futuristicArcs = function(x, y){
    
    pushMatrix();
    translate(x, y);
    
    strokeCap(SQUARE);
    
    stroke(13, 101, 117);
    strokeWeight(8);
    arc(200, 200, 350, 350, 23, 307);
    //
    
    stroke(28, 145, 166);
    strokeWeight(15);
    arc(200, 200, 290, 290, 52, 296);
    
    stroke(82, 216, 240);
    strokeWeight(24);
    arc(200, 200, 300, 300, 242, 303);
    
    stroke(59, 195, 219, 120);
    strokeWeight(28);
    arc(200, 200, 300, 300, -2, 73);
    //
    
    stroke(0, 128, 148);
    strokeWeight(9);
    arc(200, 200, 230, 230, 212, 300);
    
    stroke(38, 185, 204);
    strokeWeight(9);
    arc(200, 200, 230, 230, 84, 192);
    //
    
    stroke(0, 196, 255);
    strokeWeight(4);
    arc(200, 200, 210, 210, 113, 382);
    
    //
    stroke(13, 101, 117);
    strokeWeight(8);
    arc(200, 200, 180, 180, 50, 295);
    
    stroke(0, 247, 255, 150);
    strokeWeight(13);
    arc(200, 200, 173, 173, 4, 65);
    strokeWeight(15);
    stroke(105, 253, 255, 150);
    arc(200, 200, 185, 185, 218, 263);
    //
    strokeWeight(5);
    stroke(110, 241, 255);
    arc(200, 200, 150, 150, 244, 382);
    
    stroke(12, 119, 201);
    arc(200, 200, 150, 150, 115, 204);

    popMatrix();
};

futuristicArcs(117, 26);

fill(139, 218, 247);
textFont(createFont("monospace Bold"), 26);
text("Contest:\nFuturistic Tech\nDeadline: September 26, 2018", 15, 425);
//}
