/**
 * This contest has already ended!
 * To view the winners, please visit this program: 
 * https://www.khanacademy.org/computer-programming/kacp-challenge-council/5745407636209664
*/
/*  CONTEST: MUSIC

    I've been programming ## months, 
    and I have learned ##% of Intro to JS.
    
    I would prefer to be placed in the 
    (Beginner, Intermediate, or Advanced) bracket.
    
    TODO: Fill that out ^
    TODO: Remove promo code below.
    TODO: Save as Spin-off
    TODO: Create contest entry
*/
//{
// constants
var data = {
	colors : [color(255, 0, 0), color(9, 0, 255), color(0, 196, 255), color(234, 0, 255), color(170, 0, 255), color(255, 234, 0), color(255, 183, 0), color(0, 255, 170), color(3, 156, 82), color(8)],
	chars  : ['\u2669', '\u266A', '\u266B', '\u266C', '\u266D', '\u266E', '\u266F', '\u2669'],
	musicFont : createFont('arial black', 30),
};

smooth();
textAlign(CENTER, CENTER);

var note = function(chr){
	// direction
	var dir = random(3600);
	chr.dx = cos(dir);
	chr.dy = sin(dir);
	// speed / distance
	chr.spd = random(2, 5);
	chr.dst = 2;
	// rotation angle / speed
	chr.ang = 0;
	chr.rot = random(-3, 3);
	// speed up slower rotations
	if (abs(chr.rot)<0.3){chr.rot *= 20;}
	// note / color
	chr.note = data.chars[floor(random(data.chars.length))];	
	chr.color = data.colors[floor(random(data.colors.length))];
	return chr;
};

// build 30 element array of notes
var notes = Array.from({length:30}, function(){return note({});});

var fling = function(itm){
	// animate flying notes
	itm.ang += itm.rot;
	itm.dst += itm.spd;
	itm.spd += 0.1;
	var klr = (constrain((itm.dst*1.5-80), 0, 255) << 24) | (itm.color & 0xFFFFFF);
	// display
	pushMatrix();
	translate(280 + itm.dx * itm.dst, 300 + itm.dy * itm.dst);
	rotate(itm.ang);
	scale(1 + sqrt(itm.dst)/8);
	fill(klr);
	text(itm.note, 0, 0);
	popMatrix();
	// renew (not spliced)
	if (itm.dst > 600){
		note(itm);
	}
};

var cabnet = function(){
	var clr = [0x3FF6E0BC, 0x3FFFEEDD, 0x4F774400, 0x0FAA5500,
			   0x3FFFE0AD, 0x3FF0CD8C]; 
	imageMode(CENTER);
	// memoizing cabnet image
	if (cabnet.img){
		image(cabnet.img, 300, 300);
	}else{
		background(80, 48, 8);
		strokeWeight(0.7);
		// wood grain
		for (var y=0; y<1; y+=0.002){
			for (var x=0; x<1; x+=0.03){
				var n = floor(40*noise(x*2, y*12))%6;
				stroke(clr[n]);
				line(x*width-random(5, 20), y*height, x*width+random(5, 20), y*height);
			}
		}
		// volume controls 
		strokeWeight(5);
		stroke(16);
		line(520, 480, 520, 580);
		line(560, 480, 560, 580);
		// tick marks
		strokeWeight(1.5);
		for(var y=480; y<=580; y+=20){
			line(510, y, 514, y);
			line(526, y, 530, y);
			line(550, y, 554, y);
			line(566, y, 570, y);
		}
		// knobs
		stroke(0);
		fill(90, 50, 0);
		rect(512, 530, 16, 20, 3);
		rect(552, 526, 16, 20, 3);
		strokeWeight(1);
		for (var y=4; y--;){
			stroke(0, 90);
			line(515, 532+y*5, 525, 532+y*5);
			line(555, 528+y*5, 565, 528+y*5);
			stroke(0, 140);
			line(515, 534+y*5, 525, 534+y*5);
			line(555, 530+y*5, 565, 530+y*5);
		}
		// capture image
		cabnet.img = get();
	}
};
cabnet.img = null;

var vinyl = function(){
	// memoizing album vinyl image
	if (vinyl.img){
		pushMatrix();
		translate(280, 300);
		rotate(sin(frameCount*3)*8);
		image(vinyl.img, 0, 0);
		popMatrix();
	}else{
	    // groove shine
		var lp = createGraphics(50, 50, P2D);
		lp.background(36);
		lp.noStroke();
		lp.fill(200, 24);
		lp.ellipse(5, 30, 60, 30);
		lp.ellipse(60, 30, 60, 30);
		lp.ellipse(5, 30, 60, 10);
		lp.ellipse(60, 30, 60, 10);
		lp.filter(BLUR, 5);
		var shine = lp.get();
		// album mask
		lp = createGraphics(500, 500, P2D);
		lp.background(0);
		lp.fill(255);
		lp.ellipse(250, 250, 490, 490);
		lp.stroke(0);
		var msk = lp.get();
		// album color
		lp.image(shine, 0, 0, 500, 550);
		lp.stroke(0);
		lp.noFill();
		// start/center sections
		lp.strokeWeight(9);
		lp.ellipse(250, 250, 490, 490);
		lp.strokeWeight(23);
		lp.ellipse(250, 250, 190, 190);
		lp.strokeWeight(1);
		// between tracks
		lp.ellipse(250, 250, 265, 265);
		lp.ellipse(250, 250, 320, 320);
		lp.ellipse(250, 250, 380, 380);
		lp.ellipse(250, 250, 435, 435);
		lp = lp.get();
		// apply mask
		lp.mask(msk);
		imageMode(CORNER);
		image(lp, 30, 50);
		// cache vinyl image
		vinyl.img = lp;
	}
};
vinyl.img = null;

var label = function(){
	imageMode(CENTER);
	if (label.img){
	    // spin label
		pushMatrix();
		translate(280, 300);
		rotate(frameCount*2);
		image(label.img, 0, 0);
		popMatrix();
	}else{
		var lbl = createGraphics(200, 200, P2D);
		lbl.background(0, 0);
		// label
		lbl.fill(200, 0, 30);
		lbl.ellipse(100, 100, 161, 161);
		// center hole
		lbl.fill(16);
		lbl.stroke(0);
		lbl.ellipse(100, 100, 15, 15);
		// text
		lbl.textFont(data.musicFont);
		lbl.textAlign(CENTER, CENTER);
		lbl.fill(80, 0, 0);
		lbl.text("MUSIC", 102, 71);
		lbl.fill(240, 220, 200);
		lbl.text("MUSIC", 100, 70);
		lbl.textSize(14);
		lbl.fill(80, 0, 0);
		lbl.text("CONTEST", 100, 44);
		lbl.text("DEADLINE", 100, 125);
		lbl.fill(240, 220, 200);
		lbl.text("21 June 2020", 100, 145);
		image(lbl, 280, 300);
		label.img = lbl;
	}
};
label.img = null;

var toneArm = function(){
    var play = false, move = 0;
	if (toneArm.img){
	    // tone arm timing
        pushMatrix();
        translate(520, 110);
        // wait
        if (frameCount < 300){
        // move to album
        }else if (frameCount < 425){
            rotate((frameCount-300)/10);
        // play music
        }else if (frameCount<51000){
            rotate(12+(frameCount)/2000);
            play = true;
        //retract    
        }else if (frameCount<51370){
            move = frameCount-51000;
            rotate(37-move/10);
        // reset
        }else{
            var sync = frameCount % 720;
            if (sync === 0){
                frameCount = 0;
            }
        }
        image(toneArm.img, 0, 0);
        popMatrix();
        return play;
	}else{
	    textFont(data.musicFont);
		var arm = createGraphics(110, 700, P2D);
		arm.background(0, 0);
		// arm
		arm.strokeWeight(13);
		arm.stroke(40);
		arm.noFill();
		var bend = [27, 280, 100, 680, 100, 550, 80, 680];
		arm.bezier.apply(null, bend); 
		arm.strokeWeight(11);
		arm.stroke(160);
		arm.bezier.apply(null, bend); 
		arm.strokeWeight(5);
		arm.stroke(190);
		arm.bezier.apply(null, bend); 
		// pivot
		arm.strokeWeight(1);
		arm.stroke(0);
		arm.fill(80, 40, 0);
		arm.ellipse(40, 350, 60, 60);
		arm.fill(202);
		arm.ellipse(40, 350, 10, 10);
		// counter weight
		arm.fill(80, 40, 0);
		arm.pushMatrix();
		arm.translate(27, 280);
		arm.rotate(-0.2);
		arm.rect(-11, -30, 20, 60, 3);
		arm.popMatrix();
		// needle
		arm.beginShape();
		arm.vertex(74, 650);
		arm.vertex(96, 654);
		arm.vertex(88, 694);
		arm.vertex(77, 695);
		arm.vertex(67, 690);
		arm.endShape(CLOSE);
		image(arm, 520, 110);
		toneArm.img = arm;
	}
};
toneArm.img = null;

draw = function() {
	// animate album and tone arm
    cabnet();
	vinyl();
	label();
	if (toneArm()){
	    notes.forEach(fling);
	}
};
//}
