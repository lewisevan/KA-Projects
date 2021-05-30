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
//Defines variables to calculate normal distribution
var generator = new Random(1);
var standardDeviation = 300;
var mean = 300;

//Creates a walker
var Walker = function(r, g, b) {
    this.x = 0;
    this.y = 0;
    this.color = color(0, 0, 0);
    this.size = random(10,20);
};

//Displays the walker 
Walker.prototype.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
};

//Moves the walker
Walker.prototype.walk = function() {
    //Defines the new x and y-positions based on normal distribution
    var xStep = generator.nextGaussian() * standardDeviation + mean;
    var yStep = generator.nextGaussian() * standardDeviation + mean;
    this.x = xStep;
    this.y = yStep;
    
    
    //Defines color values based on normal distribution
    var r = generator.nextGaussian() * 100 + 200;
    var g = generator.nextGaussian() * 100 + 200;
    var b = generator.nextGaussian() * 100 + 200;
    
    //Update color
    this.color = color(r, g, b, 200);
    
    
};

//Creates new instances of Walker
var w = new Walker(0, 0, 0);
var v = new Walker(6,47,79);
var u = new Walker(129,55,114);
var w2 = new Walker(184,38,1);

var c = 255; // Holds text color
var drawLetters = function() {
    textSize(95);
    fill(c, c, c);
    var f = createFont("Comic Sans MS");
    textFont(f);
    text("CREATIVITY", 0, 273);
    
    textSize(30);
    text("Deadline: Dec. 28, 2018", 250, 312); //250 380
};

//Displays and updates the walkers
var frameCount = 0;
frameRate(200);
draw = function() {
    if (frameCount < 5500) {
        w.walk();
        w.display();
        
        v.walk();
        v.display();
        
        u.walk();
        u.display();
        
        w2.walk();
        w2.display();
        
        drawLetters();
        
        if (frameCount > 4500 && c >= 40) {
            c -= 0.5;
        }
    }
    
    frameCount++;
    
    drawLetters();
};

if (width !== 600) {
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Remove the example code and start your entry", 0, 0, width, height);
}
//}
