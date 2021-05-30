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

// {
background(0, 0, 0);
//stars
for(var i = 0; i < 100; i++) {
    stroke(255, 255, 255);
    strokeWeight(3);
    point(random(0, width), random(0, height));
}

var jupiter = function(x, y) {
    noStroke();
    fill(179, 159, 125);
    ellipse(x, y, 200, 200);
    noFill();
    strokeWeight(19);
    stroke(150, 87, 32);
    arc(x, y + -26, 200, 65, 221, 321);
    arc(x, y + 15, 231, -5, 221, 321);
    strokeWeight(15);
    arc(x, y + 68, 116, -34, 212, 328);
    strokeWeight(19);
    stroke(207, 195, 174);
    arc(x, y + 0, 205, 49, 211, 330);
    arc(x, y + 36, 194, 27, 40, 142);
    strokeWeight(12);
    arc(x, y + -63, 137, 45, 221, 321);
};

var saturn = function(x, y) {
    noStroke();
    fill(201, 188, 125);
    arc(x, y, 140, 140, 0, 190);
    noFill();
    strokeWeight(10);
    stroke(158, 139, 95);
    ellipse(x, y, 269, 40);
    stroke(161, 149, 100);
    ellipse(x, y + 2, 291, 67);
    stroke(117, 99, 56);
    ellipse(x, y + 1, 281, 58);
    strokeWeight(4);
    noStroke();
    fill(201, 188, 125);
    arc(x, y, 140, 140, 180, 370);
};


var alien = function(x, y, color, accentCol, size, rot) {
    pushMatrix();
    translate(x, y);
    rotate(rot);
    scale(size);
    noFill();
    //arms
    stroke(accentCol);
    strokeWeight(7);
    arc(-19, 8, 45, 45, 90, 180);
    arc(19, 53, 45, 45, 270, 360);
    
    //antenna
    strokeWeight(5);
    line(-27, -41, -13, -15);
    line(27, -41, 13, -15);
    strokeWeight(10);
    point(-27, -41);
    point(27, -41);
    
    noStroke();
    //body
    fill(color);
    ellipse(0, 0, 50, 50);
    ellipse(0, 37, 38, 72);
    
    noFill();
    stroke(0, 0, 0);
    point(-10, -7);
    point(10, -7);
    strokeWeight(3);
    arc(0, 6, 20, 10, 0, 180);
    stroke(255, 255, 255);
    point(-8, -9);
    point(12, -9);
    popMatrix();
};

//scene
pushMatrix();
rotate(-15);
jupiter(109, 184);
popMatrix();

pushMatrix();
rotate(10);
saturn(525, 347);
popMatrix();

alien(273, 536, color(83, 207, 91), color(49, 150, 54), 1.2, 0);

alien(183, 551, color(83, 207, 91), color(49, 150, 54), 0.9, 0);

alien(44, 387, color(136, 128, 237), color(84, 46, 166), 1.1, 55);

alien(452, 70, color(255, 166, 71), color(158, 68, 0), 1.3, 180);

fill(255, 255, 255);
textFont(createFont("monospace"));

textSize(37);
text("Contest: Extraterrestrials", 12, 298);
textSize(29);
text("Deadline: September 28, 2019", 100, 343);
//}
