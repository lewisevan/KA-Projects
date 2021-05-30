/*

I have been programming for __ months and have
learned __% of Khan Academy's 'Intro to JS'.

I would prefer to be placed in the [Beginner,
Intermediate, Advanced] bracket.

*/

background(223, 234, 245);

//mountains
noStroke();
fill(199, 199, 199);
triangle(82, 301, 424, 184, 619, 315);
fill(186, 186, 186);
triangle(522, 312, 424, 184, 619, 315);

fill(158, 158, 158);
triangle(-18, 299, 72, 193, 362, 311);
fill(143, 143, 143);
triangle(177, 299, 72, 193, 362, 311);

fill(120, 120, 120);
triangle(85, 301, 259, 161, 500, 311);
fill(102, 102, 102);
triangle(364, 301, 259, 161, 500, 311);

function bone(x, y, s1, s2, r, type) {
    pushMatrix();
        translate(x, y);
        rotate(r);
        scale(s1, s2+0.2);
        
        if(type === 1) {
            fill(247, 244, 244);
            beginShape();
                vertex(1, -4);
                bezierVertex(-12, -22, 24, -21, 9, -2);
                bezierVertex(9, 17, 8, 12, 9, 23);
                bezierVertex(22, 38, -10, 37, 0, 25);
                bezierVertex(4, 21, 0, 1, 1, -4);
            endShape();
        }else {
            fill(247, 244, 244);
            beginShape();
                vertex(-4, -9);
                bezierVertex(18, -1, 10, 37, -7, 36);
                bezierVertex(-14, 29, 18, 20, -4, -9);
            endShape();
        }
        
    popMatrix();
}

strokeWeight(3);
stroke(94, 49, 0);
fill(207, 156, 68);
beginShape();
    vertex(-2, 300);
    for(var i = 20;i < 32; i++) {
        vertex(i*20, random(300, 308));
    }
    vertex(602, 602);
    vertex(-2, 602);
endShape(CLOSE);

fill(179, 136, 68);
beginShape();
    vertex(0, 306);
    vertex(8, 344);
    vertex(22, 371);
    vertex(27, 403);
    vertex(45, 445);
    vertex(102, 453);
    vertex(207, 447);
    vertex(247, 463);
    vertex(267, 463);
    vertex(267, 451);
    vertex(319, 456);
    vertex(352, 434);
    vertex(371, 381);
    vertex(407, 357);
    vertex(436, 309);    
    for(var i = 0;i < 32; i++) {
        vertex(i*-20+436, random(300, 308)-5);
    }
endShape();

stroke(0);
function shoe (x, y, r) {
    pushMatrix();
        translate(x, y);
        rotate(r);
        
        fill(201, 142, 58);
        beginShape();
            vertex(-1, 0);
            bezierVertex(2, 1, 32, 6, 28, 16);
            vertex(-18, 16);
            vertex(-18, 7);
        endShape(CLOSE);
        
        
        
    popMatrix();
}

strokeWeight(2);
pushMatrix();
    translate(249, 247);
    scale(0.8);
    
    shoe(28, 243);
    
    //front leg
    fill(227, 208, 193);
    beginShape();
        vertex(10, 144);
        bezierVertex(48, 147, 19, 213, 26, 243);
        vertex(12, 243);
        bezierVertex(7, 200, 2, 213, 7, 168);
    endShape();
    
    //back leg
    pushMatrix();
    translate(0, -6);
    
    fill(224, 201, 182);
    beginShape();
        vertex(-65, 231);
        bezierVertex(-66, 282, -107, 242, -170, 258);
        vertex(-165, 244);
        bezierVertex(-138, 240, -123, 225, -96, 233);
        bezierVertex(-86, 240, -98, 230, -93, 221);
    endShape();  
    
    popMatrix();
    
    //shorts
    fill(247, 220, 170);
    beginShape();
        vertex(-41, 141);
        bezierVertex(-16, 141, -13, 140, 10, 143);
        bezierVertex(11, 150, 14, 161, 1, 180);
        bezierVertex(1, 179, -27, 182, -51, 178);
        bezierVertex(-48, 144, -54, 182, -59, 222);
        bezierVertex(-78, 229, -74, 221, -95, 224);
        bezierVertex(-99, 206, -84, 140, -76, 126);
    endShape();
    
    noStroke();
    fill(0, 20);
    beginShape();
        vertex(-38, 141);
        bezierVertex(-16, 141, -13, 170, 7, 170);
        bezierVertex(11, 150, 14, 161, 1, 180);
        bezierVertex(1, 179, -27, 182, -51, 178);
        bezierVertex(-48, 144, -54, 182, -59, 222);
        bezierVertex(-78, 229, -74, 221, -87, 224);
        bezierVertex(-90, 206, -67, 140, -53, 126);
    endShape();
    
    stroke(0);
    
    //back shoe
    shoe(-173, 252, -207);

    //arm in the back
    fill(237, 223, 211);
    beginShape();
        vertex(4, 66);
        bezierVertex(1, 79, 0, 118, -4, 126);
        bezierVertex(1, 126, 0, 118, 45, 138);
        bezierVertex(53, 152, 52, 151, 52, 160);
        bezierVertex(45, 168, 52, 151, 41, 146);
        vertex(41, 152);
        vertex(44, 157);
        bezierVertex(44, 170, 34, 151, 35, 146);
        bezierVertex(28, 139, 34, 151, -38, 133);
        
    endShape();
    
    //mid section    
    fill(232, 191, 114);
    pushMatrix();    
    translate(5, 0);
    rotate(3);
        beginShape();
            vertex(1, 47);
            bezierVertex(5, 66, 1, 84, -9, 107);
            bezierVertex(-16, 122, -22, 134, -34, 142);
            bezierVertex(-52, 141, -67, 139, -76, 131);
            bezierVertex(-58, 100, -57, 45, -30, 42);
        endShape();
        noStroke();
        fill(0, 20);
        beginShape();
            vertex(-1, 47);
            bezierVertex(5, 66, 1, 84, -9, 107);
            bezierVertex(-16, 122, -22, 134, -34, 142);
            bezierVertex(-35, 147, -50, 139, -53, 137);
            bezierVertex(-51, 100, -24, 45, -8, 42);
        endShape();
        stroke(0);
    popMatrix();
    
    //shovel
    pushMatrix();
        translate(5, 227);
        rotate(-19);
        scale(0.6, 0.8);
            rect(-6, -127, 12, 136);
            fill(219, 216, 216);
            beginShape();
                vertex(-27, 0);
                vertex(27, 0);
                bezierVertex(27, 30, 13, 55, 0, 60);
                bezierVertex(-13, 55, -27, 30, -27, 0);
            endShape();
    
    popMatrix();

    //arm closest to the screen
    pushMatrix();
    translate(18, 34);
    rotate(16);
        fill(242, 230, 220);
        beginShape();
            vertex(-29, 54);
            bezierVertex(-20, 68, -16, 82, -12, 102);
            bezierVertex(0, 119, 6, 129, 12, 148);
            bezierVertex(21, 148, 28, 155, 23, 159);
            bezierVertex(13, 148, 13, 166, 24, 170);
            bezierVertex(10, 189, 0, 158, 2, 153);
            bezierVertex(-9, 140, -17, 130, -21, 119);
            bezierVertex(-25, 104, -40, 96, -46, 67);
        endShape();
    
    translate(-6, -13);    
    rotate(2);
        fill(232, 191, 114);
        beginShape();
            vertex(-32, 49);
            bezierVertex(-22, 58, -29, 53, -16, 71);
            bezierVertex(-22, 80, -27, 93, -40, 91);
            bezierVertex(-45, 80, -43, 93, -50, 70);
        endShape();
        
    popMatrix();
    
    //neck
    fill(230, 210, 193);
    beginShape();
        vertex(-20, 10);
        bezierVertex(-20, 22, -20, 34, -28, 41);
        bezierVertex(-22, 45, -19, 52, 2, 48);
        vertex(5, 35);
    endShape();
    
    fill(237, 219, 204);
    // head + hat
    pushMatrix();
        translate(3, 3);
        
        ellipse(0, 0, 50, 50);
        beginShape();
            vertex(25, -4);
            bezierVertex(24, 16, 13, 30, 0, 38);
            bezierVertex(-15, 31, -17, 30, -22, 7);
        endShape();
        noStroke();
        fill(0, 10);
        beginShape();
            vertex(25, -4);
            bezierVertex(24, 16, 13, 22, 0, 28);
            bezierVertex(-15, 26, -17, 30, -22, 6);
        endShape(); 
        
        stroke(0);
        //hat
        fill(245, 196, 139);
        beginShape();
            vertex(-32, -5);
            bezierVertex(-46, -7, 6, 16, 34, 11);
            bezierVertex(39, 9, 27, 4, 27, 3);
            bezierVertex(35, 2, 4, 4, -25, -5);
            bezierVertex(-24, -9, -40, -5, -32, -5);
        endShape();
        
        fill(176, 116, 48);
        ellipse(4, -24, 28, 5);
        
        fill(245, 196, 139);
        beginShape();
            vertex(24, 1);
            bezierVertex(27, -17, 25, -17, 20, -22);
            bezierVertex(18, -27, 15, -17, -6, -26);
            bezierVertex(-19, -27, -21, -12, -24, -7);
            bezierVertex(-19, 0, 1, -1, 24, 1);
        endShape();
    popMatrix();
popMatrix();

bone(462, 367, 1, 1, 41, 2);
bone(539, 431, 1, 1, -64, 2);
bone(562, 338, 1, 1, 41, 1);


pushMatrix();
translate(-6, 51);
scale(0.9);

    //D
    bone(48, 497, 1.3, 1.2, -4, 2);
    bone(30, 506, 1, 1, 0, 1);
    
    //E
    bone(103, 534, 0.8, 0.5, 85, 1);
    bone(99, 513, 0.8, 0.5, 85, 1);
    bone(105, 489, 0.8, 0.5, 85, 1);
    bone(69, 506, 1, 1, 0, 1);
    
    //A
    bone(134, 504, 1, 1, 17, 1);
    bone(147, 504, 1, 1, -18, 1);
    bone(152, 514, 1, 0.5, 80, 1);
    
    //D
    bone(201, 497, 1.3, 1.2, -4, 2);
    bone(182, 506, 1, 1, 0, 1);
    
    //L
    bone(228, 506, 1, 1, 0, 1);
    bone(252, 531, 1, 0.5, 73, 1);
    
    //I
    bone(280, 506, 1, 1, 0, 1);
    
    //N
    bone(308, 506, 1, 1, 16, 1);
    bone(315, 506, 1, 1, -9, 1);
    bone(332, 506, 1, 1, 13, 1);
    
    //E
    bone(385, 534, 0.8, 0.5, 85, 1);
    bone(381, 513, 0.8, 0.5, 85, 1);
    bone(384, 489, 0.8, 0.5, 85, 1);
    bone(353, 506, 1, 1, 0, 1);

    bone(438, 512, 0.8, 0.5, 85, 1);
    
    
    //2/21/2021
    //2
    bone(477,506, 1.5,0.7, -10, 2);
    bone(500,537, 1,0.7, 93, 1);
    
    //\
    bone(535,513, 0.5,1, 19, 1);
    
    //2
    bone(566,506, 1.5,0.7, -10, 2);
    bone(588,537, 1,0.7, 93, 1);
    
    //1
    bone(607,514, 1.0,0.9, -2, 1);
popMatrix();

textFont(loadFont("Impact", 55));

fill(147, 193, 217);
textAlign(CENTER, CENTER);
text("Contest:\nArchaeological Dig", width/2, 103);

