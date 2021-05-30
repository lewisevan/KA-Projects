/*

    Contest: Illustrate a Math Concept
    
    
    I have been programming for XX months.
    
    I have completed ### percent of Khan Academy's
    'Intro to JS' course.
    
    I would prefer to be placed in the
    [Beginner, Intermediate, Advanced] bracket

    TODO:
        - Fill out the questionaire above
        - Save a spin-off of this project
        - Create an illustrative work
        - Have fun!
*/

/**

    The N-Queens problem involves placing 'n' number of 
    queens on an n by n chessboard such that no two queens 
    can attack each other on the next move.
    
    In chess, queens can move any number of squares 
    horizontally, vertically, or diagonally, thus no two 
    queens can be on the same row, collumn, or diagonal.
    
    Solutions for this puzzle exist for any positive 
    integer 'n' as long as n does not equal 2 or 3.
    
    @History:
    
    Max Bezzel published the eight queens puzzle in 1848. 
    Franz Nauck published the first solutions in 1850.  
    Nauck also extended the puzzle to the n queens problem,
    with n queens on a chessboard of n by n squares.

    Since then, many people have worked on both the eight
    queens puzzle and its generalized n-queens version.
    In 1874, S. Gunther proposed a method using determinants
    to find solutions. J.W.L. Glaisher refined Gunther's 
    approach.
    
    Wikipedia article: 
    https://en.wikipedia.org/wiki/Eight_queens_puzzle
    
*/

/**

POTENTIAL TOPICS - Other topics are certainly allowed, but these may help give you an idea of topics that could be used for this theme. Many of these are advanced topics, but simpler topics are definitely okay as well!

Logic - puzzles, deduction vs induction, logical limits

Set Theory - Infinities, Foundational Ideas, paradoxes, Zermelo-Fraenkel, Von Neumann–Bernays–Gödel, etc.

Number Theory - Arithmetic, Operations, Primes, Euclidean Algorithm, Diophantine equations, Fermat's Last Theorem, Quadratic Reciprocity, Arbitrary number fields

Algebra - Symbolic manipulation, polynomials, linear algebra - systems of equations, matrices, eigenvectors, abstract algebra - groups/rings/fields, Galois Theory (e.g. proves it is impossible to trisect angle with straightedge and compass, or that polynomials of degree 5 or greater can be solved by radicals)

Geometry - line, polygons, solids, constructions, higher dimensions, non-euclidean geometry

Topology - deformations, manifolds, Jordan curve theorem, space-time, symmetries

Probability/Statistics/Combinatorics - Randomness quantified, Hypothesis Assessment, Complexity of mathematical structures

Chaos Theory - fractal dimensions, self similarity

Mathematical Analysis - Calculus, Differential Equations, Limits, series, mathematical physics-Standard model (group theory), String Theory

Algorithms/Optimization - Simplex algorithm, Karmarkar's method, polytopes, recursion, Bell's dynamic programming

Philosophy, Mathematics, and Reality - Semantically consistent fiction vs discovered rules of reality, ontology of mathematics, epistemology of axioms, Platonism vs Nominalism/Structuralism

*/

var n = 8;

textAlign(CENTER, CENTER);

var Qu = '♕';// Use Q if any problems
var Eye = '☼'; 
var title = -1, reveal = 0;
var cells = function(){return Array(8).fill("");};
var grid = Array.from(cells(), cells);
var KLR = {
	background:color(143, 143, 143),
	light:color(245, 216, 150),
	dark:color(222, 178, 76),
	white:color(255, 255, 255),
	black:color(0, 0, 0)
};

var titleScreen = function(){
    noStroke();
	for(var i = 0; i < n; i++){
            for(var j = 0; j < n; j++){
                if((i+j)%2){
                    fill(KLR.dark);
                }
                else{
                    fill(KLR.light);
                }
                rect(j*(width/n), i*(height/n), width/n, height/n);
            }
        }
        fill(255, 150);
        rect(10, 5, 580, 115);
        rect(2, 563, 594, 35);
        rect(200, 426, 200, 50);
        fill(0);
        textSize(51);
        pushStyle();
        textAlign(CENTER, CENTER);
        text('CONTEST:\nIllustrate a Math Concept', 300, 57);
        textSize(30);
        text('Click to Begin', 300, 449);
        textSize(26);
        text('D e a d l i n e :   S u n d a y ,   J u n e   2 5   2 0 2 1', 300, 580);
        
        //Pi
        textSize(118);
        pushMatrix();
        translate(209, 227);
        rotate(-25);
        text('\u03C0', 0, 0);
        popMatrix();
        
        //Sqrt
        textSize(100);
        pushMatrix();
        translate(356, 209);
        rotate(5);
        text('\u221A', 0, 0);
        popMatrix();
        
        //Integral
        textSize(190);
        pushMatrix();
        translate(306, 287);
        rotate(5);
        text('\u222B', 0, 0);
        popMatrix();
        
        //Sumnation
        textSize(120);
        pushMatrix();
        translate(130, 250);
        rotate(-8);
        text('\u2211', 0, 0);
        popMatrix();
        
        //Infinity
        textSize(200);
        pushMatrix();
        translate(466, 250);
        rotate(9);
        text('\u221E', 0, 0);
        popMatrix();
        popStyle();
};

var infoScreen = function(){
	var msg = "Place 8 queens on the board such that all queens are on 'safe' squares (cannot be attacked by any other queen)";
	fill(255, 210);
	rect(100, 20, 400, 400);
	fill(KLR.black);
	text("8 QUEENS\nPROBLEM", 300, 90);
	textAlign(LEFT, BASELINE);
	pushMatrix();
	translate(110, 190);
	scale(0.5);
	text(msg, 0, 0, 760, 1200);
	textAlign(CENTER, CENTER);
	text("Click to add/remove queens", 380, 310);
	text("Press any key for a solution", 380, 400);
	popMatrix();
};

var check = function(x, y){
    var atk = false;
    var test = function(xx, yy){
        return (grid[yy] && grid[yy][xx] && grid[yy][xx]===Qu);
    };
    for (var c=-7; c<=7; c++){
        if (c===0){continue;}
        atk |= test(x, y+c) ||
               test(x, y-c) || 
               test(x+c, y) ||
               test(x-c, y) ||
               test(x+c, y+c) ||
               test(x+c, y-c) ||
               test(x-c, y+c) ||
               test(x-c, y-c);
    }
    return atk;
};

var screenUpdate = function(){
	background(KLR.background);
	for (var y=8; y--;){
	for (var x=8; x--;){
		fill((x^y)&1 ? KLR.light : KLR.dark);
		rect(100 + x*50, 20 + y*50, 50, 50);
        fill(KLR.black);
        if (reveal && check(x, y)){
            fill(0, 0, 40, 200);
			rect(100 + x*50, 20 + y*50, 50, 50);
            fill(255, 0, 0);
        }
        text(grid[y][x], x*50+125, y*50+45);
	}}
	fill(KLR.white);
	if (title<0){
		titleScreen();
		return;
	}else if (title>0){
		infoScreen();
	}
	fill(255, 80);
	ellipse(220, 550, 80, 80);
	ellipse(380, 550, 80, 80);
	fill(KLR.white);
	text("?", 220, 550);
	text(Eye, 380, 550);
};

mousePressed = function(){
	if (title){return;}
    var gx = floor((mouseX-100)/50);
    var gy = floor((mouseY-20)/50);
	// valid cell?
	if (grid[gy] && (grid[gy][gx] !== undefined)){
		// cell empty?
		if (grid[gy][gx] === ""){
			grid[gy][gx] = Qu;
		}else{
			grid[gy][gx] = "";
		}
		screenUpdate();
	}
	if (dist(mouseX, mouseY, 380, 550)<40){
		reveal = true;
		screenUpdate();
	}
	if (dist(mouseX, mouseY, 220, 550)<40){
		title = 1;
		screenUpdate();
	}
};

mouseReleased = function(){
	if (reveal || title){
		title = 0;
		reveal = false;
		screenUpdate();
	}
};

keyPressed = function(){
	grid = [
	['', '', '', '', Qu, '', '', ''],
	['', '', Qu, '', '', '', '', ''],
	[Qu, '', '', '', '', '', '', ''],
	['', '', '', '', '', '', Qu, ''],
	['', Qu, '', '', '', '', '', ''],
	['', '', '', '', '', '', '', Qu],
	['', '', '', '', '', Qu, '', ''],
	['', '', '', Qu, '', '', '', '']];
	screenUpdate();
};

screenUpdate();
