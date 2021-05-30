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
noStroke();

var puzzlePiece = function(x, y, rot, size, color) {   
    pushMatrix();
    //translations
    fill(color);
    translate(x, y);
    rotate(rot);
    scale(size);
    
    //puzzle piece shape
    beginShape();
    vertex(20, 0);
    vertex(50, 0);
    bezierVertex(46, -20, 84, -20, 80, 0);
    vertex(110, 0);
    vertex(110, 30);
    bezierVertex(90, 26, 90, 64, 110, 60);
    vertex(110, 90);
    vertex(80, 90);
    bezierVertex(84, 110, 46, 110, 50, 90);
    vertex(20, 90);
    vertex(20, 60);
    bezierVertex(40, 64, 40, 26, 20, 30);
    vertex(20, 0);
    endShape();
    popMatrix();
};

var footprint = function(x, y, rot, size) {   
    pushMatrix();
    //translations
    translate(x, y);
    rotate(rot);
    scale(size);
    
    fill(82, 80, 76);
    //heel
    beginShape();
    vertex(0, -5);
    bezierVertex(1, 20, 19, 20, 22, -5);
    bezierVertex(19, -8, 1, -8, 0, -5);
    endShape();
    
    //front
    beginShape();
    vertex(0, -13);
    bezierVertex(6, -15, 16, -15, 22, -13);
    bezierVertex(35, -70, -15, -70, 0, -13);
    endShape();
    popMatrix();
};

var backG = function (){
    for(var i = -50; i < 700; i+= 80) {
        for (var j = -50; j < 700; j+= 80) {
            fill(250, 220, 177);
            textSize(50);
            textFont(createFont("Arial Bold"));
            text("?", i, j);
        }
    }
};


background(250, 233, 208);

pushMatrix();
rotate(-40);
translate(-294, 230);
backG();
popMatrix();

puzzlePiece(33, 35, 37, 0.8, color(163, 15, 15));
puzzlePiece(192, 48, 146, 0.7, color(27, 39, 171));
puzzlePiece(153, 96, 73, 0.6, color(40, 130, 35));


puzzlePiece(536, 601, 240, 0.8, color(199, 94, 24));
puzzlePiece(484, 530, 146, 0.7, color(116, 193, 252));
puzzlePiece(513, 509, 210, 0.6, color(227, 235, 0));

footprint(412, 168, 42, 1);
footprint(422, 94, 42, 0.9);
footprint(489, 83, 42, 0.8);
footprint(488, 20, 42, 0.7);

//magnifying glass
fill(43, 43, 43);
pushMatrix();
rotate(20);
rect(268, 432, 165, 22, 10);
popMatrix();
fill(161, 161, 161);
ellipse(100, 500, 120, 120);
fill(128, 218, 245);
ellipse(100, 500, 100, 100);

noFill();
strokeWeight(10);
stroke(255, 255, 255);
arc(100, 500, 70, 70, 134, 208);

//title text 
textFont(createFont("Trebuchet MS Bold"));
noStroke();
fill(0, 0, 0);
textSize(60);
text("Contest:", 23, 278);
textSize(80);
text("Puzzle Game", 99,353);
textSize(28);
text("Deadline: June 26th", 326, 392);

//}
