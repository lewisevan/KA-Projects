/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/

/*  I've been programming X months, and I have learned YY% of Intro to JS.
 
    TODO: Fill that out ^
 
*/

//TODO: Remove starter code below

  
//{
var G = [color(3, 0, 153), color(0, 0, 255)];
var gradients = [color(163, 169, 255), color(0, 187, 255), ];
smooth();
var mist = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s / width * 6);
    fill(255, 255, 255, 10);
    beginShape();
    vertex(0, 0);
    bezierVertex(11, -11, 45, 7, 77, -1);
    bezierVertex(106, -11, 106, 2, 128, -4);
    bezierVertex(119, 6, 118, 2, 93, 1);
    bezierVertex(57, 10, 65, 9, 42, 7);
    bezierVertex(3, 5, 5, -6, 0, 0);
    endShape();
    popMatrix();
};
var earthC = function(c1, c2, clouds) {
    for (var i = 0; i < 80; i++) {
        noStroke();
        fill(lerpColor(c1, c2, i / 80));
        rect(0, i * 7 + -7, 800, 800);
    }
    fill(23, 105, 0, 50);
    beginShape();
    vertex(503, 182);
    bezierVertex(394, 242, 346, 151, 302, 222);
    bezierVertex(273, 307, 236, 279, 236, 343);
    bezierVertex(258, 390, 249, 359, 273, 381);
    bezierVertex(319, 417, 281, 371, 327, 412);
    bezierVertex(346, 426, 317, 371, 343, 394);
    bezierVertex(381, 417, 352, 371, 394, 412);
    bezierVertex(439, 441, 421, 459, 503, 479);
    endShape();
    beginShape();
    vertex(87, 76);
    bezierVertex(77, 121, 158, 151, 95, 197);
    bezierVertex(82, 190, 86, 151, 76, 205);
    bezierVertex(73, 224, 86, 224, 72, 239);
    bezierVertex(73, 291, 86, 262, 47, 291);
    bezierVertex(14, 315, 34, 262, -31, 316);
    endShape();
    beginShape();
    vertex(226, -8);
    bezierVertex(217, 16, 197, 46, 266, 22);
    bezierVertex(290, 7, 281, 55, 302, 28);
    bezierVertex(331, 7, 314, 55, 349, 50);
    bezierVertex(363, 49, 325, -3, 371, 25);
    bezierVertex(402, 49, 428, 19, 417, 3);
    endShape();
    beginShape();
    vertex(226, 58);
    bezierVertex(223, 57, 197, 105, 234, 94);
    bezierVertex(252, 88, 244, 83, 256, 73);
    bezierVertex(273, 26, 224, 51, 227, 57);
    endShape();
    beginShape();
    vertex(283, 58);
    bezierVertex(280, 46, 228, 83, 283, 74);
    bezierVertex(320, 46, 228, 83, 286, 66);
    endShape();
    beginShape();
    vertex(297, 46);
    bezierVertex(333, 46, 248, 83, 324, 78);
    bezierVertex(340, 80, 338, 83, 340, 70);
    bezierVertex(340, 64, 332, 71, 324, 53);
    bezierVertex(320, 26, 274, 40, 297, 46);
    endShape();
    beginShape();
    vertex(76, 498);
    bezierVertex(250, 502, 248, 533, 324, 682);
    endShape();
    if (clouds) {
        for (var i = 0; i < 130; i++) {
            strokeWeight(3);
            fill(255, 255, 255, 10);
            ellipse(random(i + -64, 636), random(9, 565), 90, 9);
            mist(random(0, 400), random(0, 600), random(100, 200));
        }
    }
};
var earth = function(x, y, w, h) {
    // earth
    fill(255, 255, 255);
    ellipse(x, y, w, h);
};
var star = function(x, y, r) {
    pushMatrix();
    translate(x, y);
    scale(100 / width * 6);
    rotate(r);
    translate(0, 0);
    fill(255, 255, 255, 20);
    beginShape();
    vertex(5, 0);
    vertex(-3, -2);
    vertex(-3, 2);
    endShape();
    popMatrix();
};
var starz = function(x, y) {
    pushMatrix();
    translate(x, y);
    for (var i = 0; i < 100; i += 10) {
        rotate(39);
        star(0, 0, 0);
    }
    popMatrix();
};
earthC(gradients[0], gradients[1], true);
var EC = get(0, 0, width, height);
background(0);
earth(305, 302, 600, 600);
var PP = get(-10, 0, width, height);
EC.mask(PP);
 
// other background things
for (var i = 0; i < 600; i++) {
    fill(lerpColor(G[0], G[1], i / 600));
    rect(0, i, width, 1);
}
for (var i = 635; i < 750; i += 10) {
    fill(125, 194, 255, 20);
    ellipse(370 + 41, 302 + 51, i + 55, i);
}
for (var i = 0; i < 100; i++) {
    starz(random(0, 600), random(0, 600));
}
for (var i = 0; i < 400; i++) {
    fill(255, 255, 255, 20);
    ellipse(random(0, 600), random(0, 600), 5, 5);
}
// earth
image(EC, 42, 32, 677, 648);
 
//space shuttle half
var spaceshuttleH = function(x, y, w, c1, c2) {
    pushMatrix();
    translate(x, y);
    scale(w, 1);
    // dark grey part of wings
    fill(66, 66, 66);
    beginShape();
    vertex(59, 155);
    bezierVertex(65, 176, 84, 243, 137, 258);
    bezierVertex(155, 267, 171, 282, 175, 350);
    vertex(0, 350);
    endShape();
    // white part of wings
    fill(232, 232, 232);
    beginShape();
    vertex(173, 350);
    vertex(57, 276);
    vertex(0, 350);
    endShape();
    // light grey part of wings
    fill(207, 207, 207);
    beginShape();
    vertex(59, 206);
    bezierVertex(65, 233, 77, 267, 137, 286);
    bezierVertex(155, 292, 164, 282, 174, 350);
    bezierVertex(93, 314, 70, 290, 50, 278);
    vertex(0, 291);
    endShape();
    // body
    fill(c2);
    beginShape();
    vertex(0, 0);
    bezierVertex(19, 1, 27, 27, 47, 83);
    bezierVertex(49, 91, 61, 114, 60, 150);
    vertex(60, 350);
    vertex(0, 350);
    endShape();
    fill(c1);
    beginShape();
    vertex(0, 0);
    bezierVertex(19, 1, 27, 27, 35, 50);
    vertex(0, 50);
    endShape();
    popMatrix();
};
var spaceShuttleWhole = function(x, y, s, r) {
    pushMatrix();
    translate(x, y);
    scale(s / width * 6);
    // back medal thing
    rotate(r);
    fill(64, 64, 64);
    rect(-50, 140, 100, 30, 3);
    fill(84, 84, 84);
    rect(-50, 140, 80, 30, 3);
    // space-shuttle
    spaceshuttleH(0, -200, 0.8, color(66, 66, 66), color(207, 207, 207));
    spaceshuttleH(0, -200, -0.8, color(84, 84, 84), color(232, 232, 232)); // engines
    fill(66, 63, 66);
    arc(80, 170, 30, -150, 1, 180);
    arc(-80, 170, 30, -150, 1, 180);
    fill(84, 84, 84);
    arc(75, 170, 20, -120, 1, 180);
    arc(-85, 170, 20, -120, 1, 180);
    // visor
    fill(66, 66, 66);
    beginShape();
    vertex(-25, -100);
    bezierVertex(-21, -121, 15, -125, 25, -100);
    bezierVertex(-1, -110, 4, -114, -25, -100);
    endShape();
    popMatrix();
};
spaceShuttleWhole(300, 300, 80, -60);
 
fill(0);
textSize(60);
textFont(createFont("gabriola Bold"));
text("Contest:\nVintage Space", 44, 60);
fill(255);
text("Contest:\nVintage Space", 44, 57);
textSize(40);
fill(0);
text("Deadline: June 24th, 2018", 103, 573);
fill(255);
text("Deadline: June 24th, 2018", 103, 570);
//}
