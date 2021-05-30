/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/

/* I've been programming X months, and I have learned YY% of Intro to JS.
TODO: Fill that out ^ */

//Entries will be divided into categories based on skill level. So even if you don't have much programming experience you'll still have a fair chance at winning :)

//TODO: Remove starter code below
{background(255, 0, 0);

noStroke();
//sky
for(var i = 0; i < 600; i+=5) {
    for(var j = 0; j < 600; j+=5) {
        fill(noise(i/200, j/100) *85, noise(i/190, j/66)*110, noise(i/250,j/150)*150);
        rect(i, j, 5, 5);
    }
}
//stars
for(var i = 0; i < 600; i += 3){
    var x = random(width);
    var y = random(height);
    var x2 = random(width);
    var y2 = random(height);
    var sz = random(20);
    
    fill(255, 255, 255, random(100, 255));
    ellipse(x, y, 1, 1);
    fill(187, 0, 255, 2);
    ellipse(x, y, 20, 20);
    
    fill(255, 255, 255, random(50));
    ellipse(x2, y2, sz, 2);
    ellipse(x2, y2, 2, sz);
    fill(255, 255, 255);
    ellipse(x2, y2, random(0.5, 2), random(0.5, 2));
}
for(var i = 0; i < 604; i += 3){
    
   
    fill(130, 130, 130, 5);
    ellipse(random(-15, 200), random(100, 141),random(40), random(40));
    ellipse(random(525, 200), random(300, 186),random(40), random(40));
}

var leaf = function(x, y, r, s, col){
    fill(col);
    pushMatrix();
    translate(x, y);
    pushMatrix();
    translate(250, 250);
    rotate(r);
    scale(s/100);
    beginShape();
    vertex(0, 40);
    bezierVertex(30, 5, 13, -5, 0, -40);
    bezierVertex(-28, -5, -10, 6, 0, 40);
    endShape();
    popMatrix();
    popMatrix();
};
var trees = function(){
    
    //leaves at the back
    for(var i = 0; i < 300; i ++){
        var leafsz = random(50, 150);
        var leafx = random(-45, 200);
        var leafy = random(-54, 195);
        fill(22, random(50, 150), 18,100);
        noStroke();
        if(dist(151, -41, leafx, leafy) < 70) {
            leaf(leafx-184, leafy+66, random(0, -45), leafsz, color(22, random(50, 150), 18,140));
           
        }
    }
    
    noFill();
//trees
    strokeWeight(48);
    stroke(84, 70, 40);
    bezier(200, 335, 186, 238, 148, 97, 300, 18);
    stroke(120, 99, 54);
    bezier(192, 335, 172, 238, 148, 97, 300, 18);
    strokeWeight(45);
    stroke(135, 111, 59);
    bezier(184, 324, 160, 238, 84, 97, 110, 152);
    stroke(61, 49, 21);
    bezier( 87, 441, 68, 339, 111, 300, 43, 139);
    stroke(125, 101, 41);
    bezier(17, 586, 46, 163, 73, 142, 208, 69);
    stroke(87, 68, 25);
    bezier(58, 589, 228, 218, 0, 184, 83, 32);
    stroke(92, 75, 37);
    bezier(70, 593, 278, 406, 68, 106, 160, 24);
    stroke(102, 84, 43);
    bezier(162, 590, 81, 418, 100, 113, 230, 38);
    stroke(92, 74, 33);
    bezier(38, 574, 115, 366, 2, 210, 22, 37);

    stroke(69, 51, 28);
    strokeWeight(2);
    bezier(179, 595, 159, 515, 131, 500, 135, 450);
    bezier(170, 596, 164, 546, 84, 448, 133, 405);
    bezier(165, 595, 164, 546, 84, 448, 122, 405);
    bezier(136, 120, 157, 105, 84, 105, 154, 1);
    bezier(123, 142, 125, 107, 112, 114, 119, 92);
    bezier(174, 311, 182, 229, 138, 266, 158, 174);
    bezier(150, 93, 144, 62, 139, 40, 179, 18);
    bezier(189, 356, 148, 331, 191, 260, 144, 244);
    bezier(151, 274, 148, 331, 176, 350, 180, 431);
    bezier(149, 276, 122, 313, 176, 350, 151, 494);
    bezier(86, 596, 106, 594, 97, 551, 123, 565);
    bezier(63, 599, 106, 590, 86, 552, 111, 512);
    bezier(63, 599, 106, 590, 86, 552, 111, 512);
    bezier(101, 384, 149, 223, 112, 97, 236, 15);
    bezier(126, 499, 81, 475, 99, 383, 138, 356);
    bezier(119, 263, 90, 280, 100, 380, 90, 371);
    bezier(125, 180, 134, 214, 115, 255, 96, 279);
    bezier(142, 123, 100, 196, 129, 188, 104, 251);
    bezier(250, 36, 235, 56, 180, 83, 188, 120);
    bezier(201, 69, 168, 96, 181, 135, 157, 150);
    bezier(149, 592, 131, 570, 141, 523, 113, 502);
    bezier(51, 193, 92, 168, 72, 141, 114, 109);
    bezier(68, 258, 90, 197, 64, 188, 87, 166);
    bezier(34, 326, 30, 350, 50, 431, 22, 519);
    bezier(24, 358, 12, 372, 50, 431, 18, 456);
    bezier(16, 436, 3, 449, 17, 468, 18, 496);
    bezier(83, 225, 81, 186, 102, 165, 119, 156);
    bezier(23, 329, 28, 315, 17, 323, 32, 290);
    bezier(84, 137, 85, 130, 66, 91, 87, 63);
    bezier(63, 170, 54, 143, 31, 82, 61, 67);
    bezier(73, 20, 50, 56, 78, 62, 70, 97);
    bezier(66, 153, 60, 124, 84, 124, 59, 94);
    bezier(98, 191, 100, 192, 93, 209, 105, 207);
    bezier(89, 219, 88, 232, 91, 243, 97, 247);
    bezier(41, 45, 4, 80, 26, 211, 48, 212);
    bezier(7, 38, 28, 73, 1, 159, 36, 222);
    bezier(71, 334, 93, 333, 50, 235, 51, 197);
    bezier(64, 314, 17, 298, 46, 242, 7, 176);
    bezier(9, 152, 15, 96, 1, 117, 8, 79);
    bezier(43, 281, 31, 264, 45, 251, 44, 227);
    bezier(50, 374, 35, 334, 65, 339, 39, 306);
    bezier(50, 374, 35, 334, 65, 339, 39, 306);
    bezier(83, 439, 66, 384, 99, 359, 58, 331);
    bezier(71, 482, 66, 384, 50, 451, 42, 372);
    bezier(37, 597, 69, 570, 62, 497, 85, 468);
    bezier(50, 552, 38, 523, 77, 484, 51, 437);
    bezier(45, 575, 19, 552, 48, 508, 48, 478);
    bezier(203, 334, 188, 329, 196, 311, 183, 278);
    bezier(58, 32, 51, 8, 46, 34, 30, 1);
    bezier(113, 101, 104, 85, 84, 97, 100, 57);
    bezier(206, 345, 228, 305, 190, 270, 202, 251);
    bezier(194, 277, 168, 246, 211, 236, 191, 211);
    bezier(183, 225, 165, 193, 208, 193, 218, 122);
    bezier(184, 168, 188, 178, 179, 124, 209, 98);
    bezier(193, 168, 205, 140, 179, 124, 241, 100);
    bezier(176, 186, 199, 157, 179, 124, 188, 131);
    
//leaves  
    for(var i = 0; i < 300; i ++){
        var leafsz = random(50, 150);
        var leafx = random(-45, 200);
        var leafy = random(-54, 195);
        fill(22, random(50, 150), 18,100);
        noStroke();
        if(dist(39, 19, leafx, leafy) < 144) {
            leaf(leafx-100, leafy-286, random(45), leafsz, color(22, random(50, 150), 18,140));
            leaf(leafx-200, leafy-286, random(45), leafsz, color(22, random(50, 150), 18,140));
            leaf(leafx-171, leafy+355, random(0, -45), leafsz, color(22, random(50, 150), 18,140));
           
        }
    }

};

//ground
fill(69, 46, 24);
quad(72, 327, 500, 327, 600, 595, 50, 600);

//stones
fill(120, 103, 76);
ellipse(300, 336, 80, 30);
fill(107, 88, 57);
ellipse(276, 360, 116, 40);
fill(115, 106, 92);
ellipse(282, 395, 172, 54);
fill(133, 110, 75);
ellipse(364, 433, 182, 65);
fill(105, 94, 79);
ellipse(272, 468, 232, 59);
fill(115, 106, 92);
ellipse(364, 505, 260, 59);
fill(125, 118, 106);
ellipse(300, 567, 306, 88);

//trees (left
pushMatrix();
translate(-17, 0);
trees();
popMatrix();

//trees (right)
pushMatrix();
scale(-1, 1);
translate(-616, 11);
trees();
popMatrix();

//title
textAlign(CENTER, CENTER);
textFont(createFont("gabriola"), 81);

fill(109, 237, 233);

for(var i = 0; i < 360; i += 12){
    fill(193, 183, 201, 10);
    text("Fantasy\nLandscape", 300+cos(i)*10, 300+sin(i)*10);
}

fill(89, 89, 89);
text("Fantasy\nLandscape", 300, 305);

fill(109, 237, 233);
text("Fantasy\nLandscape", 300, 300);

fill(224, 227, 223);
textSize(35);
textFont(createFont("gabriola Bold"), 37);

text("Deadline: March 24th, 2018", 300, 544);

//shading
noFill();
stroke(0, 0, 0, 10);
for(var k = 5; k < 197; k += 6){
    strokeWeight(k);
    rect(0, -103, 600, 800);
}

//sparkles
for(var t = 0; t < 300; t++){
    var rand = random(1, 5);
    fill(255, 255, 255, random(20, 100));
    noStroke();
    ellipse(random(176, 443), random(136, 553), rand, rand);
}

}
