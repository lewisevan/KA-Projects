/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/
/*  CONTEST: SPORTS

    I've been programming ## months, 
    and I have learned ##% of Intro to JS.
    
    I would prefer to be placed in the 
    (Beginner, Intermediate, or Advanced) bracket.
    
    TODO: Fill that out ^
    TODO: Remove the starter code below
    TODO: Save as Spin-off
*/

/** PLAYFIELD */
//{
background(0, 107, 25);
rectMode(CENTER);
strokeCap(SQUARE);
strokeWeight(2);
stroke(255, 255, 255);
noFill();
rect(300, 300, 400, 550);
line(101, 300, 498, 300);
ellipse(300, 300, 100, 100);
rect(300, 550, 150, 50);
rect(300, 520, 302, 109);
arc(300, 488, 100, 100, 207, 334);
rect(300, 579, 50, 9);
rect(300, 50, 150, 50);
rect(300, 79, 302, 109);
arc(300, 112, 100, 100, 27, 155);
rect(300, 20, 50, 9);
//}

/** INFORMATION  */
//{
var banner = "DEADLINE";
var endDate = "21 August 2020";

textFont(createFont('Arial Bold', 60));
textAlign(CENTER, CENTER);
fill(0);
text("CONTEST:", 300, 105);
textSize(101);
text("S P O R T S", 300, 210);
fill(0, 100);
noStroke();
rect(300, 521, 300, 106);
textSize(50);
fill(0);
text(banner, 307, 500);
fill(255);
text(banner, 300, 496);
textSize(35);
fill(0);
text(endDate, 303, 547);
fill(255);
text(endDate, 300, 543);
//}

/** BASKETBALL */
//{
noStroke();
fill(240, 96, 0);
ellipse(308, 290, 125, 120);
strokeWeight(2);
stroke(0);
strokeCap(SQUARE);
line(308, 230, 308, 350);
noFill();
arc(220, 290, 145, 145, -42, 44);
arc(398, 290, 145, 145, 138, 223);
arc(308, 486, 400, 400, 253, 288);
noStroke();
fill(0, 50);
ellipse(316, 300, 110, 110);
//}

/** SOCCERBALL */
//{
var shapes = function(x, y, r) {
	pushMatrix();
	translate(x, y);
	rotate(r);
	fill(0);
	beginShape();
	vertex(0, 0);
	vertex(-10, 10);
	vertex(-2, 50);
	vertex(11, 57);
	bezierVertex(16, 46, 6, -3, 0, 0);
	endShape();
	popMatrix();
};

pushMatrix();
translate(385, 310);
scale(0.5);
stroke(0);
strokeWeight(3);
fill(255);
ellipse(0, 0, 200, 200);
strokeWeight(2);
shapes(37, -89, -41);
shapes(-87, -42, 233);
shapes(-76, 60, 172);
shapes(98, 0, 30);
shapes(31, 93, 102);
fill(0);
strokeWeight(4);
beginShape();
vertex(-33, -10);
vertex(-22, 30);
vertex(22, 30);
vertex(33, -10);
vertex(0, -35);
endShape(CLOSE);
strokeWeight(2);
line(20, 29, 42, 51);
line(42, 51, 70, 42);
line(42, 51, 24, 79);
line(-22, 29, -39, 51);
line(-39, 51, -18, 79);
line(-39, 51, -66, 49);
line(-35, -11, -59, -15);
line(-70, -37, -59, -15);
line(-80, 11, -59, -15);
line(-3, -62, 1, -35);
line(-3, -62, 36, -77);
line(-3, -62, -45, -72);
line(34, -10, 61, -20);
line(81, 2, 61, -20);
line(68, -49, 61, -20);
noStroke();
fill(0, 50);
ellipse(15, 4, 166, 189);
popMatrix();
//}

/** FOOTBALL */
//{
fill(145, 91, 10);
beginShape();
vertex(148,268);
bezierVertex(271,252,294,338,298,377);
bezierVertex(194,400,150,331,148,268);
endShape();
stroke(255);
strokeWeight(11);
noFill();
bezier(288, 335, 280, 338, 257, 351, 258, 380);
bezier(183, 266, 183, 296, 172, 304, 156, 311);
strokeWeight(5);
bezier(197, 300, 227, 317, 236, 325, 248, 341);
line(192, 306, 201, 293);
line(201, 312, 209, 300);
line(208, 317, 217, 305);
line(216, 322, 225, 310);
line(224, 328, 233, 315);
line(231, 333, 240, 321);
line(238, 339, 247, 328);
line(245, 346, 255, 335);
stroke(0, 50);
strokeWeight(14);
bezier(155, 267, 157, 359, 234, 387, 297, 370);
//}

/** VOLLEYBALL */
//{
stroke(0);
strokeWeight(1);
fill(255, 255, 255);
ellipse(305, 345, 100, 100);
noFill();
arc(305, 306, 100, 100, 90, 157);
arc(301, 322, 100, 100, 80, 156);
arc(300, 336, 100, 100, 78, 144);
arc(350, 378, 100, 100, 207, 272);
arc(335, 362, 100, 100, 192, 280);
arc(318, 348, 100, 100, 190, 274);
arc(261, 380, 100, 100, 331, 377);
arc(281, 371, 100, 100, 321, 383);
arc(299, 364, 100, 100, 319, 368);
fill(0, 50);
noStroke();
ellipse(314, 349, 80, 84);
//}

/** TENNISBALL */
//{
noStroke();
fill(183, 255, 0);
ellipse(370, 370, 60, 60);
strokeWeight(5);
stroke(255, 255, 255);
noFill();
arc(305, 370, 110, 110, -27, 28);
arc(434, 370, 110, 110, 153, 208);
fill(0, 50);
noStroke();
ellipse(374, 374, 52, 52);
//}

/** BASEBALL */
//{
noStroke();
fill(255, 255, 255);
ellipse(230, 370, 60, 60);
strokeWeight(1);
stroke(189, 0, 0);
noFill();
arc(156, 370, 130, 112, -25, 28);
arc(305, 370, 130, 112, 153, 207);
strokeWeight(1.5);
for(var i = 355; i < 366; i++){
    line(162+cos(i*5)*56, 370+sin(i*5)*55, 
         162+cos(i*5)*60, 370+sin(i*5)*60);
    line(298-cos(i*5)*56, 370+sin(i*5)*55, 
         298-cos(i*5)*60, 370+sin(i*5)*60);
}
fill(0, 50);
noStroke();
ellipse(232, 374, 53, 53);
//}
