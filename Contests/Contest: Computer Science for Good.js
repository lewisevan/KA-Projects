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

background(140, 171, 162);
//black/grey colors
{
    var colorG = color(130,130,130);
var colorGII = color(20, 20, 20);
}

//red colors
{
var colorR = color(156, 97, 97);
var colorRII = color(54, 12, 12);
}

//Yellow colors
{
var colorY = color(150, 141, 87);
var colorYII = color(110, 95, 26);
}

//Blue colors
{
var colorB = color(86, 124, 148);
var colorBII = color(16, 73, 92);
}


//black, red, yellow, blue


noStroke();

//bottom color on the computer
var computer = function(c,cII,t,tII){
    pushMatrix();
    
    
    translate(t,tII);
    
fill(c);
rect(200,200,120,100,10);

fill(cII);
rect(200,200,120,49,10);
rect(200,215,120,65);



fill(38, 38, 38);
rect(210,210,100,65);

fill(54, 54, 54);
quad(270,210,235,275,259,275,299,210);

quad(310,211,270,275,289,275,310,245);

//arms
strokeWeight(10);
stroke(cII);

line(316,253,333,284);
ellipse(337,287,2,2);
ellipse(179,287,2,2);
line(204,253,182,284);

noStroke();



if (c === colorG){
    //base
    fill(120, 119, 120);
    rect(245,300,30,10);
quad(240,325,245,310,275,310,280,325);

    fill(77, 77, 77);
    rect(245,300,30,4);
    
    //mouth
fill(0, 0, 0);
arc(259,257,50,30,0,180);
fill(107, 2, 2);
rect(252,264,15,7,10);

//eyes
fill(255, 255, 255);
ellipse(245,230,20,30);
ellipse(275,230,20,30);

fill(117, 117, 117);
ellipse(245,230,13,23);
ellipse(275,230,13,23);

fill(0, 0, 0);
ellipse(245,230,7,14);
ellipse(275,230,7,14);

fill(255, 255, 255);
ellipse(250,225,5,5);
ellipse(280,225,5,5);
ellipse(248,231,3,3);
ellipse(278,231,3,3);
    
    
    
}

if (c === colorR){
    //base
    fill(130, 78, 78);
    rect(245,300,30,10);
quad(240,325,245,310,275,310,280,325);

    fill(105, 52, 52);
    rect(245,300,30,4);
    
    //eyes
strokeWeight(4);
noFill();
stroke(0, 0, 0);
arc(241,235,15,10,34,158);
arc(275,235,15,10,34,158);

noStroke();
//mouth
fill(255, 255, 255);
arc(257,250,15,15,0,180);
    
}

if (c === colorY){
    //base
    fill(138, 129, 77);
    rect(245,300,30,10);
quad(240,325,245,310,275,310,280,325);

    fill(112, 92, 40);
    rect(245,300,30,4);
    
   //mouth
strokeWeight(4);
noFill();
stroke(0, 0, 0);
arc(259,245,10,10,17,168);

noStroke();

//eyes
fill(255, 255, 255);
ellipse(243,231,20,20);
ellipse(276,231,20,20);

fill(120, 98, 66);
ellipse(243,231,15,15);
ellipse(276,231,15,15);


fill(255, 255, 255);
ellipse(240,227,8,8);
ellipse(272,227,8,8);

ellipse(244,236,5,5);
ellipse(277,236,5,5);

ellipse(246,231,3,3);
ellipse(280,231,3,3); 
    
}

if (c === colorB){
    //base
    fill(77, 115, 138);
    rect(245,300,30,10);
quad(240,325,245,310,275,310,280,325);

    fill(57, 93, 115);
    rect(245,300,30,4);
    
    //mouth
fill(255, 255, 255);
arc(257,250,45,38,0,180);

fill(224, 224, 224);
rect(238,258,38,3,5);

//eyes
fill(0, 0, 0);
ellipse(240,229,15,15);
ellipse(270,229,15,15);

fill(199, 199, 199);
ellipse(243,227,5,5);
ellipse(273,227,5,5);
    
}









popMatrix();


};
var y = 275;

computer(colorG, colorGII, -185, y);
computer(colorR,colorRII,-32,y);
computer(colorY, colorYII, 120,y);
computer(colorB, colorBII, 276,y);


//Words
{

var T = function (xPos, yPos) {
pushMatrix();
translate(xPos, yPos);
line(245,115,245,210);
line(238,115,254,115);

popMatrix();

};
var S = function (x, y) {
pushMatrix();
translate(x, y);
bezier(309,115, 244,165, 351,160, 291,210);
popMatrix();
};
var E = function (eX, eY) {
pushMatrix();
translate(eX, eY);

line(265,115,265,210);
line(266,115,280,115);
line(266,211,280,211);
line(266,190,280,190);

popMatrix();

};
var N = function (nX, nY) {
pushMatrix();
translate(nX, nY);
line(215,115,215,210);
line(215,115,230,210);
line(230,115,230,210);

popMatrix();

};
var R = function (rX, rY) {
pushMatrix();
translate(rX, rY);
line(319,232,319,328);
arc(324,252,25,40,260,460);
arc(327,279,15,10,180,360);
line(335,281,335,328);



popMatrix();


};
var D = function (dX, dY) {
pushMatrix();
translate(dX, dY);
line(320,346, 320,443);
arc(324,395,25,100,261,465);



popMatrix();


};
var I = function (iX, iY) {
pushMatrix();
translate(iX, iY);
T(102,118);
line(340,328,355,328);



popMatrix();


};

noFill();
strokeWeight(4);
stroke(0, 0, 0);

//Contest
{
    pushMatrix();
    translate(89,82);
    scale(0.8);
  
//c
arc(163,163,21,100,41,314);

//O
ellipse(193,163,20,100);

//N
line(215,115,215,210);
line(215,115,230,210);
line(230,115,230,210);

//T
T();

//E

line(265,115,265,210);
line(266,115,280,115);
line(266,211,280,211);
line(266,190,280,190);


//S
bezier(309,115, 244,165, 351,160, 291,210);

//T

T(79,0);

//:
ellipse(345,203,8,8);
ellipse(345,173,8,8);
popMatrix();
}

pushMatrix();
translate(55,0);
pushMatrix();
scale(0.6);
translate(44,240);
//Computer
{
pushMatrix();
translate(-80,0);


//C
arc(137,277,21,100,41,314);

//O
ellipse(168,277,20,100);

//M
line(185,229,185,327);
line(185,229,193,261);
line(201,229,193,261);
line(201,229,201,327);


//P
line(212,229,212,327);
arc(216,249,25,40,260,460);


//U
arc(247,315,18,30,0,180);
line(256,231,256,313);
line(238,231,238,313);
line(260,328,256,313);




//T
T(30,118);

//E
E(28,118);


//R
line(319,232,319,328);
arc(324,252,25,40,260,460);
arc(327,279,15,10,180,360);
line(335,281,335,328);




popMatrix();

}


//Science

{
    //S
   S(0,118); 
   
   //C
   arc(327,277,15,100,45,314); 
    
    
    
//I
T(102,118);
line(340,328,355,328);  

//E
E(100,118);

//N
N(176,118);

//C
   arc(425,277,15,100,45,329); 
   
 //E
 E(176,118);
   
    
}

popMatrix();

pushMatrix();
scale(0.3);
translate(923,690);
//For
{
//F
pushMatrix();
translate(-116,232);

line(245,115,245,210);
line(247,115,272,115);
line(247,145,261,145);

popMatrix();

//O
ellipse(167,396,20,100);

//R

R(-132,117);
}
popMatrix();

pushMatrix();
scale(0.6);
translate(349,125);
//Good
{
//G
   arc(250,395,20,100,45,314);
line(250,428, 256,428);

//O
ellipse(274,396,20,100);

//O
ellipse(301,396,20,100);

//D
D();

}

popMatrix();

popMatrix();


pushMatrix();
scale(0.3);
translate(510,904);
//Deadline
{
//D
D(-128,0);

//E
E(-48,233);

//A

line(250, 348, 241,444);
line(250, 348, 265,444);
line(260, 423, 243,423);

//D
D(-47,0);

//L
line(298, 348, 298,444);
line(311, 445, 298,445);

//I
I(-20,117);

//N
N(131,235);

//E
E(109,235);

//:
ellipse(404,435,8,8);
ellipse(404,409,8,8);
}

var one = function(oneX, oneY) {
    pushMatrix();
    translate(oneX, oneY);
line(430, 348, 430,444);
line(430, 348, 420,348);
line(440, 445, 420,445);
popMatrix();
};
var two = function(twoX, twoY) {
    pushMatrix();
    translate(twoX, twoY);
arc(459,363,25,30,180,360);
line(471, 363, 449,444);
line(472, 445, 450,445);
popMatrix();
};



//12/27/2019
//1
one(0,0);

//2
two(-1,0);

// /
line(500, 350, 478,445);

//2
two(59,0);

//7
line(570, 348, 545,444);
line(570, 348, 540,348);

// /
line(590, 350, 565,445);

//2
two(148,0);

//0

ellipse(638,395,20,100);

//1

one(235,0);


//9
line(690, 350, 690,445);
arc(690,363,30,30,90,270);



popMatrix();

}



//Border at the top
{

stroke(122, 156, 146);

var border = [-5, -20, -80, -2, 0, -18, -40, -4, -90, -70, -20, -60, -90, -60, -100, -80, -120, -60, -80, -40, -2, -20, -50, -10, 0, -80, -50, -100, -5, -20, 0];

for (var p = -2; p < border.length; p += 1) {

    rect(p*20,border[p],1,200,10);
    ellipse(p*20.1,border[p]+205,10,10);
}
}

// }
