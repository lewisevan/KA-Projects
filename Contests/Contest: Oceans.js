/*

  MARCH-APRIL 2021 CONTEST: Oceans
 
1. FILL OUT THESE STATEMENTS:

  I have been programming for ## months
  I have completed ##% of the Intro to JS course
  I would prefer to be placed in the [Beginner, Intermediate, or Advanced] bracket.
  
2. MAKE A SPIN OFF  

3. WORK ON YOUR ENTRY UNTIL APRIL 25

4. BE CREATIVE - HAVE FUN!

*/

// variables
var titleFont = createFont('arial', 40);
var contestFont = createFont('arial black', 20);
var img = 0, ctx = 0, tick = 0;

// style presets
textFont(createFont('arial', 30), 30);
textAlign(CENTER, CENTER);
frameRate(30);

// initialization
var initGfx = function(){
    img = createImage(120, 100, ARGB);
    ctx = img.sourceImg.getContext("2d");
    ctx.font = "64pt 'arial black', sans-serif";
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 4;
};

// sea floor image
var seaFloor = (function(){
	var sea = createGraphics(200, 200, P2D);
	sea.background(0, 90, 120);
	sea.noStroke();
	sea.fill(250, 240, 220);
	sea.rect(0, 44, 100, 50);
	sea.fill(0, 90);
	sea.rect(0, 13, 100, 46);
	sea.rect(0, 41, 100, 6);
	sea.filter(BLUR, 3);
	sea.image(sea.get(10, 0, 50, 50), 0, 0, 200, 200);
	sea.fill(0, 90);
	sea.filter(BLUR, 3);
	sea.ellipse(20, 150, 5, 2);
	sea.ellipse(120, 152, 5, 2);
	sea.ellipse(180, 160, 6, 3);
	return sea.get();
})();

// draw letter (OCEAN)
var showText = function(ltr, x, y){
	ctx.clearRect(0, 0, img.width, img.height);
	ctx.strokeText(ltr, 12, 80);
    image(img, x, y);
};

draw = function(){
    if (!img){initGfx();}
	tick += 2;
	background(0);
	image(seaFloor, 20, 20, 460, 460);
	// ocean waves
	ctx.setTransform(1, 0, sin(tick)/8, 1, sin(tick+90)*7, 0);
	for (var i=6; i--;){
		showText("OCEANS"[i], 28+i*72, 140);
	}
	// info text
	textFont(titleFont, 40);
	fill(255);
	text("25 APRIL 2021", 250, 420);
	fill(255, 120);
	textFont(contestFont, 20);
	text("CONTEST DEADLINE", 250, 380);
};
