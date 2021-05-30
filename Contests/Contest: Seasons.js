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
background(221, 255, 219);

var rectSize = 195;
var margin = 50; // top margin
var gap = 18; // space between rects

fill(0, 0, 0);
textFont(createFont("Trebuchet MS Bold"));
textSize(40);
textAlign(CENTER);
//Change font
text("Contest: Seasons", -1, 50, 600, 50);
textSize(30);
text("Deadline: July 28th, 2019", 302, 580);

//Winter
fill(71, 197, 222);
noStroke();
rect(300 - gap - rectSize, (600-margin)/2 - gap - rectSize + margin, rectSize, rectSize);
fill(255, 250, 255);
ellipse(300 - gap - rectSize+rectSize/2, (600-margin)/2 - gap - rectSize + margin+rectSize/2, 25, 25);
stroke(255, 255, 255);
strokeWeight(8);
line(300 - gap - rectSize+rectSize/2, (600-margin)/2 - gap - rectSize + margin+rectSize/2 - 75, 300 - gap - rectSize+rectSize/2, (600-margin)/2 - gap - rectSize + margin+rectSize/2 + 75);
/*line(300 - gap - rectSize+rectSize/2 - 75, (600-margin)/2 - gap - rectSize + margin+rectSize/2 - 34, 300 - gap - rectSize+rectSize/2 + 75, (600-margin)/2 - gap - rectSize + margin+rectSize/2+31);
line(300 - gap - rectSize+rectSize/2 - 75, (600-margin)/2 - gap - rectSize + margin+rectSize/2 + 30, 300 - gap - rectSize+rectSize/2 + 75, (600-margin)/2 - gap - rectSize + margin+rectSize/2-33);*/

line(300 - gap - rectSize+rectSize/2, 163, 168, 146);
line(300 - gap - rectSize+rectSize/2, 162, 201, 146);
line(300 - gap - rectSize+rectSize/2, 182, 161, 165);
line(300 - gap - rectSize+rectSize/2, 183, 207, 166);
line(300 - gap - rectSize+rectSize/2, 263, 167, 280);
line(300 - gap - rectSize+rectSize/2, 263, 203, 280);
line(300 - gap - rectSize+rectSize/2, 236, 162, 258);
line(300 - gap - rectSize+rectSize/2, 236, 209, 255);

var x = 84;
var y = -288;
rotate(65);
line(185+x, 135+y, 185+x, 279+y);
line(185+x, 162+y, 170+x, 146+y);
line(185+x, 162+y, 201+x, 146+y);
line(185+x, 183+y, 164+x, 163+y);
line(185+x, 183+y, 202+x, 163+y);
line(185+x, 263+y, 165+x, 280+y);
line(185+x, 263+y, 202+x, 280+y);
line(185+x, 236+y, 167+x, 259+y);
line(185+x, 236+y, 201+x, 262+y);
rotate(-65);

var x = -296;
var y = 45;
rotate(-65);
line(185+x, 135+y, 185+x, 279+y);
line(185+x, 162+y, 170+x, 146+y);
line(185+x, 163+y, 202+x, 146+y);
line(185+x, 183+y, 166+x, 163+y);
line(185+x, 183+y, 204+x, 163+y);
line(185+x, 263+y, 167+x, 280+y);
line(185+x, 263+y, 202+x, 280+y);
line(185+x, 236+y, 165+x, 259+y);
line(185+x, 236+y, 202+x, 262+y);
rotate(65);

fill(71, 197, 222);
noStroke();
ellipse(300 - gap - rectSize+rectSize/2, (600-margin)/2 - gap - rectSize + margin+rectSize/2, 10, 10);

//Spring
fill(182, 235, 138);
noStroke();
rect(300 + gap, (600-margin)/2 - gap - rectSize + margin, rectSize, rectSize);
/*stroke(67, 122, 4);
line(416, 237, 416, 288);
rotate(-38);
image(getImage("avatars/leaf-green"), 166, 364, 90, 90);
rotate(38);
image(getImage("avatars/leaf-green"), 405, 177, 90, 90);
rotate(-73);
image(getImage("avatars/leaf-green"), -144, 392, 90, 90);
rotate(73);*/
stroke(58, 105, 0);
line(416, 184, 416, 287);
fill(58, 105, 0);
noStroke();
rotate(15);
ellipse(477, 134, 13, 81);
rotate(-15);
rotate(-15);
ellipse(326, 337, 13, 70);
rotate(15);
fill(255, 197, 5);
ellipse(416, 172, 40, 40);
stroke(255, 197, 5);
line(416, 172, 416, 135);
line(416, 172, 378, 172);
line(416, 172, 453, 172);
line(416, 172, 443, 146);
line(416, 172, 443, 194);
line(416, 172, 391, 194);
line(416, 172, 386, 146);



//Summer
translate(rectSize+2*gap, 0);
fill(255, 255, 166);
noStroke();
rect(300 - gap - rectSize, (600-margin)/2 + gap + margin, rectSize, rectSize);
fill(255, 162, 0);
arc(300 - gap - rectSize + rectSize/2, (600-margin)/2 + gap + margin + rectSize/2, 100, 100, -90, 90);
fill(255, 222, 5);
arc(300 - gap - rectSize + rectSize/2, (600-margin)/2 + gap + margin + rectSize/2, 100, 100, 90, 270);
stroke(255, 222, 5);
strokeWeight(5);
line(99, (600-margin)/2 + gap + margin + rectSize/2, 124, (600-margin)/2 + gap + margin + rectSize/2);
line(185, 524, 185, 500);
line(185, 355, 185, 381);
line(141, 366, 155, 390);
line(144, 514, 155, 494);
line(109, 484, 132, 471);
line(109, 401, 132, 415);

stroke(255, 162, 0);
line(99+170, (600-margin)/2 + gap + margin + rectSize/2, 124+122, (600-margin)/2 + gap + margin + rectSize/2);
line(234, 366, 218, 390);
line(226, 514, 213, 494);
line(260, 484, 235, 471);
line(264, 401, 239, 415);

//Fall
translate(-2*rectSize-4*gap, 0);
fill(255, 166, 89);
noStroke();
rect(300 + gap, (600-margin)/2 + gap + margin, rectSize, rectSize);
stroke(128, 5, 5);
strokeWeight(8);
line(300 + gap+rectSize/2, (600-margin)/2 + gap + margin + rectSize-15, 300 + gap+rectSize/2, (600-margin)/2 + gap + margin+15);
noFill();
arc(300 + gap+rectSize/2+1, 416, 82, 117, -90, 90);
arc(300 + gap+rectSize/2+1, 416, 82, 117, 90, 270);
line(418, 389, 437, 372);
line(418, 414, 451, 388);
line(418, 441, 457, 413);
line(418, 463, 454, 440);
line(418, 389, 393, 372);
line(418, 414, 381, 388);
line(418, 441, 378, 413);
line(418, 464, 381, 440);
//}
