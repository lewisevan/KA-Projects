/* 
    I've been programming X months, and I have learned YY% of Intro to JS.
    I would prefer to be placed in the (Beginner, Intermediate, or Advanced) bracket.
    TODO: Fill that out ^
    
    TODO: Remove starter code below.
*/
//{
rectMode(CENTER);
textAlign(CENTER, CENTER);
var mPos;
var MNT = function(x, y, size, Size) {
    noStroke();
    pushMatrix();
    translate(x, y);
    
    for(var m = -181; m < Size * 3.30; m+=29){
        noStroke();
        fill(105, 138, 60);
        triangle(m - random(1, 5), -64, m + 18, random(-80, -110), m + 38 + random(1, 5), -64);
    }
    for(var m = -225; m < size * 3.32; m+=29){
        noStroke();
        fill(131, 173, 73);
        triangle(m - random(-3, 8), -64, m + 18, random(-80, -110), m + 38 + random(-8, 3), -64);
    }
    
    noLoop();
    popMatrix();
};
var sky = function(x, y) {
    pushMatrix();
    translate(x, y);
    stroke(255, 191, 0);
    strokeWeight(2);
    noFill();
    ellipse(20, -423, 64, 64);
    strokeWeight(1);
    fill(255, 184, 61);
    ellipse(20, -423, 55, 55);
    fill(255, 192, 82);
    arc(20, -423, 55, 55, 90, 270);
    
    stroke(252, 252, 252, 180);
    strokeWeight(20);
    line(-403, -333, -242, -333);
    strokeWeight(14);
    line(-358, -402, -212, -402);
    strokeWeight(5);
    line(-260, -387, -175, -387);
    strokeWeight(16);
    line(-154, -433, -107, -433);
    strokeWeight(9);
    line(-121, -415, -88, -415);
    strokeWeight(15);
    line(-50, -420, 25, -420);
    line(-16, -390, 77, -390);
    strokeWeight(5);
    line(-175, -362, -49, -362);
    popMatrix();
};
var lPlot = function(x, y, size) {
    pushMatrix();
    translate(x, y);
    scale(size);
    sky(187, 200);
    
    
        MNT(7, 51, random(40, 60), random(40, 60));
    noLoop();

    noStroke();
    fill(145, 194, 80);
    rect(-117, 23, 84, 30);
    rect(-71, 55, 17, 10);
    rect(40, 30, 52, 50);
    rect(181, 25, 42, 16);
    rect(199, 49, 8, 8);
    fill(245, 235, 239);
    stroke(145, 194, 80);
    strokeWeight(3);
    arc(-166, 23, 15, 15, -90, 90);
    arc(-69, 23, 15, 15, 90, 280);
    arc(-84, 55, 10, 10, -90, 90);
    arc(-56, 55, 10, 10, 90, 237);
    arc(-7, 32, 51, 40, -90, 85);
    arc(85, 33, 51, 40, 90, 280);
    arc(153, 21, 15, 15, -90, 90);
    arc(210, 21, 15, 15, 90, 280);
    arc(193, 48, 8, 8, -90, 90);
    arc(208, 47, 8, 8, 90, 280);
    strokeWeight(35);
    line(-215, 0, 225, 0);
    strokeWeight(24);
    line(-190, 40, -62, 40);
    strokeWeight(28);
    line(5, 60, 93, 60);
    strokeWeight(14);
    line(-85, 65, -40, 65);
    strokeWeight(21);
    line(133, 35, 205, 35);
    strokeWeight(10);
    line(195, 54, 238, 54);
    noStroke();
    fill(255);
    rect(-185, -52, 29, 70);
    stroke(230, 230, 230);
    strokeWeight(1);
    fill(194, 194, 194, 100);
    rect(-187, -55, 35, 25, 50);
    fill(255);
    rect(-185, -56, 52, 25, 50);
    fill(194, 194, 194, 100);
    rect(-187, -88, 35, 25, 50);
    fill(255);
    rect(-185, -89, 52, 25, 50);
    for(var w = -202; w < -162; w+=9) {
        for(var W = -92; W < -41; W+=33) {
            noStroke();
            fill(156, 226, 252);
            ellipse(w, W, 6, 6);
        }
    }
    fill(255);
    triangle(-201, -101, -199, -137, -198, -101);
    rect(-171, -107, 6, 12);
    stroke(230, 230, 230);
    strokeWeight(1);
    fill(255);
    rect(-168, -115, 22, 10, 50);
    noStroke();
    fill(156, 226, 252);
    ellipse(-173, -116, 3, 3);
    ellipse(-168, -116, 3, 3);
    ellipse(-163, -116, 3, 3);
    fill(156, 226, 252);
    ellipse(-91, -44, 68, 55);
    fill(255);
    ellipse(-91, -38, 50, 37);
    rect(-101, -27, 197, 6);
    rect(-91, -25, 80, 16);
    quad(-131, -33, -51, -33, -57, -41, -126, -41);
    fill(196, 196, 196, 100);
    triangle(-129, -36, -53, -41, -126, -41);
    fill(255);
    ellipse(-20, -61, 36, 35);
    rect(-91, -43, 68, 3);
    rect(-20, -37, 36, 40);
    noStroke();
    for(var w = -65; w < -23; w+=10) {
        fill(156, 226, 252);
        ellipse(-30, w, 7, 7);
    }
    fill(156, 226, 252);
    rect(-17, -40, 4, 46);
    fill(255);
    rect(42, -48, 91, 9);
    rect(88, -63, 12, 91);
    fill(194, 194, 194, 100);
    rect(88, -68, 18, 17, 50);
    fill(255);
    strokeWeight(1);
    stroke(230, 230, 230);
    rect(88, -69, 38, 14, 50);
    noStroke();
    fill(156, 226, 252);
    rect(89, -71, 30, 3, 10);
    ellipse(89, -113, 44, 28);
    fill(255);
    strokeWeight(1);
    stroke(230);
    rect(88, -104, 48, 20, 6, 6, 0, 0);
    rect(88, -113, 54, 3, 6);
    fill(156, 226, 252);
    noStroke();
    rect(88, -96, 53, 3, 10);
    for(var w = 72; w < 110; w+=11) {
        fill(156, 226, 252);
        ellipse(w, -105, 6, 6);
    }
    fill(255);
    rect(105, -30, 23, 6);
    rect(128, -27, 38, 20);
    ellipse(128, -36, 38, 38);
    fill(156, 226, 252);
    rect(128, -35, 30, 4);
    fill(255);
    rect(172, -36, 7, 36);
    fill(194, 194, 194, 100);
    ellipse(176, -53, 14, 15);
    fill(255);
    triangle(213, -58, 213, -18, 169, -58);
    rect(191, -86, 44, 56, 0, 13, 0, 0);
    for(w = 177; w < 200; w+=10) {
        noStroke();
        fill(156, 226, 252);
        rect(w, -86, 8, 47, 50);
    }
    
    popMatrix();
};
var txt = function(text, x, y, size, col) {
    noFill();
    strokeWeight(size/15);
    stroke(col);
    
    for(var i = 0; i < text.length; i++) {
        var t = text[i];
        if(t === "a" || t === "A") {
            line(x - size/0.8, y + size/2, x - size/1.1, y - size/2);
            line(x - size/2.1, y + size/2, x - size/1.1, y - size/2);
            line(x - size/1.6, y + size/2, x - size/1.04, y - size/3.2);
        }else if(t === "i" || t === "I") {
            line(x - 22, y + size/2.1, x - 22, y - size/1.9);
            line(x + -16, y + size/2.1, x + -16, y - size/1.9);
            
        }else if(t === "o" || t === "O") {
            ellipse(x - size/11, y + size/24.9, size/0.9, size/0.9);
            arc(x - size/11, y + size/24.9, size/1.1, size/1.1, 90, 270);
            
            
        }else if(t === "p" || t === "P") {
            line(x - size/2, y + size/2, x - size/2, y - size/2.2);
            line(x - size/3.4, y - size/2.1, x - size/3.4, y - size/-2.0);
            line(x + size/10.1, y - size/2, x - size/2.0, y - size/2);
            line(x + size/8.9, y - size/153, x - size/3.7, y - size/176);
            //line(x - size/2, y, x + size/2.5, y);
            arc(x + size/6.1, y - size/4.0, size/2, size/2, -90, 90);
            
        }else if(t === "t" || t === "T") {
            line(x, y + size/2, x, y - size/3);
            line(x - size/2, y - size/2, x + size/2, y - size/2);
            line(x - size/2, y - size/3, x + size/2, y - size/3);
        } else if(t === "u" || t === "U") {
            line(x - size/4.4, y + size/5.6, x - size/4.4, y - size/2);
            line(x + size/2.0, y - size/2.0, x + size/2.0, y + size/5.6);
            arc(x + size/7.63, y + size/6.5, size/1.37, size/1.34, 0, 180);
            arc(x + size/7.63, y + size/6.5, size/1.92, size/1.92, 0, 180);
        }
        x += size*1.25;
    }
    
};

draw = function() {
    background(245, 235, 239);
    pushStyle();
    colorMode(HSB, 100);
	noFill();
	strokeWeight(9);
	for (var x = 0; x<73; x+=9){
		stroke(x, 100, 100, 15);
		ellipse(280+x/10, 450-x/10, 500+x/3, 520+x/4);
	}
	popStyle();
	noStroke();
	fill(245, 235, 239);
	rect(0, 348, 600, 300);
  rectMode(CENTER);
    lPlot(294, 351, 1.2);
    txt("UTOPIA", 158, 505, 56, color(32, 66, 24));
    textFont(createFont("Arial Black Italic"), 24);
    fill(32, 66, 24);
    text("Deadline: April 21, 2020", 300, 572);
};
//}
