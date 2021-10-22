/*

    Contest: Mapmaking
    
    
    I have been programming for ## months.
    
    I have completed ### percent of Khan Academy's
    'Intro to JS' course.
    
    I would prefer to be placed in the
    [Beginner, Intermediate, or Advanced] bracket

    TODO:
        - Fill out the questionaire above
        - Save a spin-off of this project
        - Create an illustrative work
        - Have fun!
*/




resetMatrix();
pushMatrix();  // save for easier editing

var paper = function(){
    beginShape();
    vertex(87,336);
    bezierVertex(90,318,83,247,75,198);
    bezierVertex(71,173,69,165,54,122);
    bezierVertex(48,105,36,102,59,94);
    bezierVertex(104,83,124,87,188,92);
    bezierVertex(274,108,232,121,331,116);
    bezierVertex(364,112,360,101,382,113);
    bezierVertex(394,123,410,169,400,159);
    bezierVertex(386,169,400,156,382,170);
    bezierVertex(376,178,364,186,403,166);
    bezierVertex(418,195,418,207,433,254);
    bezierVertex(462,321,450,298,471,358);
    bezierVertex(476,394,477,379,479,395);
    bezierVertex(492,401,477,426,446,421);
    bezierVertex(408,421,386,415,330,405);
    bezierVertex(279,396,293,405,237,396);
    bezierVertex(184,395,172,403,138,426);
    bezierVertex(122,435,127,441,88,438);
    bezierVertex(72,436,74,413,74,396);
    bezierVertex(70,375,86,363,78,355);
    bezierVertex(110,345,110,324,104,341);
    bezierVertex(116,323,96,345,86,335);
    endShape(CLOSE);
};

var lake = function(){
    beginShape();
    vertex(99,301);
    bezierVertex(99,301,100,301,96,322);
    bezierVertex(90,335,102,334,116,328);
    bezierVertex(125,326,130,328,115,340);
    bezierVertex(108,348,117,346,101,357);
    bezierVertex(96,363,98,357,88,366);
    bezierVertex(72,380,86,390,84,410);
    bezierVertex(84,426,86,429,102,428);
    bezierVertex(122,436,120,435,136,415);
    bezierVertex(170,388,162,399,194,384);
    bezierVertex(213,383,224,388,208,370);
    bezierVertex(191,341,190,349,180,339);
    bezierVertex(142,316,182,318,157,296);
    bezierVertex(146,270,151,261,126,271);
    bezierVertex(112,277,102,265,99,301);
    endShape(CLOSE);
};

var shore = function(){
    beginShape();
    vertex(98,259);
    bezierVertex(119,252,113,253,127,252);
    bezierVertex(139,250,139,248,151,251);
    bezierVertex(168,262,161,277,169,287);
    bezierVertex(177,294,180,292,182,305);
    bezierVertex(181,312,176,315,181,325);
    bezierVertex(189,342,202,339,219,357);
    bezierVertex(232,368,236,370,231,379);
    endShape();
};

// paper
noFill();
strokeWeight(5);
stroke(0);
paper();
translate(-3, -3);
paper();
translate(3, 3);
strokeWeight(2);
fill(235, 217, 171);
paper();

// lake
noStroke();
fill(95, 108, 250);
lake();

// shore
translate(-5, 5);
noFill();
strokeWeight(3);
stroke(0);
shore();
translate(-3, -2);
shore();
translate(3, 2);

// boat
fill(125, 40, 0);
bezier(150, 360, 140, 385, 210, 380, 200, 360);
fill(95, 108, 250);
bezier(150, 360, 155, 366, 200, 364, 200, 360);
strokeWeight(4);
line(175, 363, 174, 330);
strokeWeight(2);
fill(255, 0, 0);
beginShape();
vertex(172, 330);
vertex(160, 340);
vertex(172, 341);
endShape();
beginShape();
vertex(177, 335);
vertex(200, 350);
vertex(178, 355);
endShape();

// waves
noFill();
bezier(105, 400, 115, 391, 120, 421, 130, 411);
bezier(112, 297, 115, 309, 120, 296, 130, 313);
bezier(125, 336, 134, 345, 139, 335, 148, 347);
bezier(105, 362, 115, 383, 120, 359, 130, 375);
bezier(135, 299, 145, 291, 150, 321, 160, 311);

// red X
strokeWeight(15);
line(242, 179, 292, 133);
line(244, 179, 292, 131);
line(240, 127, 300, 180);
line(242, 127, 300, 182);
stroke(255, 0, 0);
strokeWeight(11);
line(243, 179, 292, 132);
line(241, 127, 300, 181);

// dotted path
noFill();
stroke(0);
strokeWeight(5);
beginShape();
vertex(212,366);
bezierVertex(229,365,235,356,240,350);
bezierVertex(255,336,272,340,282,350);
bezierVertex(295,365,306,358,320,369);
bezierVertex(339,382,343,396,372,395);
bezierVertex(388,392,401,390,414,378);
bezierVertex(423,370,427,360,425,336);
bezierVertex(423,306,424,302,417,276);
bezierVertex(404,250,401,245,377,226);
bezierVertex(353,212,342,212,317,212);
bezierVertex(280,214,274,213,239,223);
bezierVertex(191,232,178,249,138,222);
bezierVertex(111,205,114,203,97,180);
bezierVertex(78,156,86,132,95,120);
bezierVertex(108,108,121,106,137,100);
bezierVertex(158,99,192,103,219,115);
endShape();

// way point data (path dots)
var waypt = [
230,359, 254,343, 282,352, 312,365, 334,381,
362,396, 392,391, 418,373, 424,344, 423,314,
420,283, 404,255, 383,233, 358,217, 330,212,
301,212, 277,215, 250,220, 223,227, 196,234,
170,236, 146,230, 127,216, 106,196, 92,176,
84,151, 91,126, 106,112, 130,102, 154,100,
177,103, 199,108];

fill(235, 217, 171);
noStroke();
for (var i=0; i<waypt.length; i += 2){
    ellipse(waypt[i], waypt[i+1], 15, 15);
}


// tree
stroke(0);
strokeWeight(3);
fill(155, 0, 0);
beginShape();
vertex(151,197);
bezierVertex(154,180,153,166,148,152);
bezierVertex(151,140,157,138,161,153);
bezierVertex(162,171,160,181,167,196);
endShape();
fill(0, 130, 0);
beginShape();
vertex(166,162);
bezierVertex(180,164,187,146,172,144);
bezierVertex(180,134,174,120,162,126);
bezierVertex(159,112,136,114,140,125);
bezierVertex(130,115,113,128,128,136);
bezierVertex(118,126,109,160,134,152);
bezierVertex(115,168,143,180,146,160);
bezierVertex(145,181,172,174,165,160);
endShape();


// mountains
fill(160);
stroke(0);
triangle(340, 324, 370, 280, 390, 325);
triangle(340, 325, 370, 280, 388, 324);
triangle(300, 326, 330, 260, 360, 325);
triangle(300, 325, 329, 262, 357, 324);
strokeWeight(19);
stroke(235, 217, 171);
noFill();
bezier(411, 327, 386, 333, 374, 333, 347, 325);
bezier(270, 327, 298, 318, 312, 321, 347, 325);
strokeWeight(2);
stroke(0);
bezier(411, 322, 386, 324, 393, 328, 347, 316);
bezier(270, 320, 298, 313, 312, 311, 347, 316);


// context text
textFont(createFont('arial black'), 50);
fill(0, 0, 160);
text("Mapmaking", 180, 55);
textFont(createFont('arial'), 20);
text("CONTEST ENDS:", 160, 440);
text("23 OCT 2021", 180, 470);


popMatrix();  // restore default settings
