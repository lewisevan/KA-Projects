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
/* --- Tree generating code adapted from Tegoon, https://khanacademy.org/cs/i/6414466178482176 --- */
//How many branches a tree can have
var maxBranches = 400;

var treesArr = [];

//For cross-referencing
var tree = {};
var branch = {};

var tree = function (x, y, rot, length) {
    this.branches = [];
    this.branches.push(new branch(x, y, rot, length, this, 0));
};

tree.prototype.draw = function () {
    for (var i = this.branches.length-1; i >= 0; i--) {
        this.branches[i].draw();
    }
};

var branch = function(x, y, rotation, length, parent, distance) {
    this.p = parent;
    if (parent instanceof tree) {
        this.tree = parent;
    }else {
        this.tree = this.p.tree;
    }
    this.distance = distance; //Distance from trunk
    this.strokeW = (Math.log2(maxBranches + 1) - Math.log2(this.tree.branches.length + 1))/4;
    this.x = x;
    this.y = y;
    this.r = rotation;
    this.l = length;
    this.isNew = true;
    this.grow();
};

branch.prototype.draw = function() {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.r);
    strokeWeight(this.strokeW);
    stroke(46, 30, 0);
    line(0,0,0,this.l);
    popMatrix();
};

branch.prototype.grow = function () {
    //If this is the first time we're updating this branch
    //And there are less than the max branches
    if (this.distance < 6) {
        //Add between 1 and 3 new branches (weighted towards 2)
        for (var i = 0; i < random(0.5, 2.5); i++) {
            this.tree.branches.push(new branch(
                this.x + cos(this.r-270)*this.l,
                this.y + sin(this.r-270)*this.l,
                this.r + random(-25,25),
                this.l + random(-10,10) - this.tree.branches.length/40,
                this.tree, this.distance + 1
            ));
        }
    }
};

for (var x = 0; x < width; x += 80) {
    treesArr.push(new tree(x, height * (3/4) - x/4, 180, 25));
}

/* --- End tree code --- */

//Window function
var drawWindow = function (x, y) {
    fill(255, 221, 0, 40);
    for (var i = 0; i < 5; i++) {
        rect(x-i, y-i, 25 + i*2, 30 + i*2, 6);
    }
    
    fill(255, 221, 0);
    rect(x, y, 25, 30);
};

//Draw Sky
noStroke();
for (var i = (width-100)*2*sqrt(2); i >= 0; i-=2) {
    fill(
        lerpColor(color(224, 107, 56), color(107, 13, 44), i/(width*2*sqrt(2)-100)));
    ellipse(100, 100, i, i);
}

//Draw ground
fill(26, 2, 28);
noStroke();
beginShape();
curveVertex(0, 472);
curveVertex(0, 424);
curveVertex(244, 386);
curveVertex(568, 303);
curveVertex(width, 347);
vertex(width, height);
vertex(0, height);
endShape(CLOSE);

//Display Trees
for (var i = treesArr.length-1; i >= 0; i--) {
    treesArr[i].draw();
    if (treesArr[i].branches.length >= maxBranches) {
        treesArr.splice(i, 1);
    }
}

//Draw house. Points generated from https://khanacademy.org/cs/i/5532709309579264
var housePoints = [{"x":26,"y":256},{"x":26,"y":92},{"x":12,"y":110},{"x":0,"y":102},{"x":38,"y":43},{"x":38,"y":0},{"x":83,"y":0},{"x":83,"y":16},{"x":107,"y":3},{"x":155,"y":30},{"x":212,"y":100},{"x":199,"y":110},{"x":185,"y":91},{"x":188,"y":259}];

pushMatrix();
translate(227, 181);
fill(26, 2, 28);
noStroke();
beginShape();
for (var i = 0; i < housePoints.length; i++) {
    vertex(housePoints[i].x, housePoints[i].y);
}
endShape();
popMatrix();

//windows
drawWindow(278, 250);
drawWindow(358, 250);

//Draw moon
pushMatrix();
translate(84, 100);
rotate(-31);
noFill();
stroke(240, 242, 131, 150);
for (var i = 37; i < 63; i ++) {
    arc(0, 0, i, 57, 95, 263);
}
popMatrix();

//Display text
fill(255, 255, 255);
textSize(35);
textFont(createFont("Trebuchet MS Bold"));
textAlign(RIGHT, TOP);
text("Contest: Spooky House\nDeadline: October 28th, 2018", 183, 478, 400, 5000);

if (width !== 600) {
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Remove the example code and start your entry", 0, 0, width, height);
}

//}
