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
{
background(240, 240, 240);
//width & height of the heads.
var wh = 200;
}

//winston
{

noStroke();

// face
fill(242, 242, 0);
ellipse(130, 200, wh, wh);

fill(255,255,0);
ellipse(135,200,wh-10,wh);

// eyes
fill(0, 0, 0);
ellipse(115, 165, wh -170, wh-170);
ellipse(195, 165, wh - 170, wh - 170);

fill(26, 26, 26);
ellipse(117, 165, wh - 175, wh - 170);
ellipse(197, 165, wh - 175, wh - 170);

// mouth
fill(204, 0, 0);
ellipse(166, 240, wh - 120, wh - 115);


fill(255, 0, 0);
ellipse(170, 240, wh - 129, wh - 115);


//Speech bubble
noFill();
strokeWeight(4);
stroke(0, 0, 0);
rect(278,179,279,100,10);

noStroke();

fill(38, 38, 38);
triangle(228,253,280,270,280,235);


fill(0, 0, 0);
triangle(240,253,280,270,280,235);
}


//Oh Noes
{
var yAdjust = -77;

//face
fill(176, 204, 163);
ellipse(491, 476+yAdjust, wh, wh);

fill(190,223,176);
ellipse(485, 476+yAdjust, wh-10, wh);

//mouth

fill(105, 17, 20);

arc(459,520+yAdjust,wh - 130,wh - 95,180,360);

fill(120,18,20);

arc(455,520+yAdjust,wh - 140,wh - 101,180,360);

fill(190,223,176);

arc(459,528+yAdjust,wh - 116,wh - 172,180,360);


//eyes
fill(255, 255, 255);
ellipse(431,437+yAdjust,wh - 165,wh - 150);
ellipse(497,437+yAdjust,wh - 165,wh - 150);
fill(0, 0, 0);
ellipse(424,441+yAdjust,wh - 180,wh - 175);
ellipse(490,441+yAdjust,wh - 180,wh - 175);

fill(2, 0, 36);
ellipse(422,441+yAdjust,wh - 185,wh - 177);
ellipse(488,441+yAdjust,wh - 185,wh - 177);



fill(255, 255, 255);
ellipse(420,441+yAdjust,wh - 193,wh - 190);
ellipse(486,441+yAdjust,wh - 193,wh - 190);



//eyebrows????
{
strokeWeight(10);
stroke(159,203,148);

line(443,410+yAdjust,418,417+yAdjust);

line(486,410+yAdjust,512,417+yAdjust);
}

//semicolon
noStroke();
fill(136,167,127);

ellipse(463,403+yAdjust,wh - 190,wh - 190);

ellipse(463,421+yAdjust,wh - 190, wh - 190);
arc(462,423+yAdjust,wh - 190,wh - 186,-90,90);


//Speech bubble
noFill();
strokeWeight(4);
stroke(0, 0, 0);
rect(47,462+yAdjust,293,100,10);

noStroke();

fill(38, 38, 38);
triangle(388,516+yAdjust,340,551+yAdjust,340,512+yAdjust);


fill(0, 0, 0);
triangle(377,516+yAdjust,340,551+yAdjust,340,512+yAdjust);

}

//text
{
var font = createFont("Arial");
textFont(font);

textSize(48);
text("Contest: Avatars", 124, 52);
textSize(30);
text("Deadline: Jan. 28th, 2019", 230, 581);
textSize(20);
var string = "of the ";
var newX = textWidth(string);
text("Have you seen the theme \nof the        contest?", 302, 225);
fill(30, 0, 255);
text("new", newX+301, 248);

var string = "Oh noes! ";
var boxX = textWidth(string);
fill(173, 173, 173);
rect(boxX + 53, 401, 71, 22);

fill(0, 0, 0);
text("Oh noes! contest is not defined. \nMake sure you're spelling it \ncorrectly.", 55, 419);
}
//}
