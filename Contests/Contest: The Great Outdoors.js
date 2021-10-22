/*
    Contest: The Great Outdoors

    I have been programming for ## months.
    
    I have completed ## percent of Khan Academy's
    'Intro to JS' course.
    
    I would prefer to be placed in the
    [Beginner, Intermediate, Advanced] bracket

    TODO:
        - Fill out the questionaire above
        - Save a spin-off of this project
        - Create an illustrative work
        - Have fun!
*/

var cloud, 
    cloudMask,
    hopper;

var initMasks = function(){
    var hpr = getImage("creatures/Hopper-Happy");

    // hopper outline
    var hpo = createGraphics(270, 270, P2D);
    hpo.background(0, 0);
    hpo.image(hpr, 10, 20, 250, 252);
    hpo.filter(THRESHOLD, 0.8);
    hpo.filter(DILATE);
    hpo.filter(INVERT);
    hpo.image(hpr, 10, 20, 250, 252);
    hopper = hpo.get();

    // cloud shape
    fill(48);
    noStroke();
    background(0, 0);
    ellipse(60, 50, 60, 55);
    ellipse(90, 40, 60, 50);
    ellipse(110, 50, 60, 50);
    ellipse(110, 80, 70, 50);
    ellipse(45, 65, 60, 45);
    ellipse(55, 90, 50, 40);
    ellipse(90, 90, 60, 50);
    cloud = get(0, 0, 160, 130);

    // outline gradient
    background(255);
    var fade = get(0, 0, 160, 130);
    fade.mask(cloud);
    background(0);
    for (var i=2;i<40; i++){
        image(fade, i, i, 160-i*2, 130-i*2);
    }

    // mask
    cloudMask = get(0, 0, 160, 130);
};

var bubble = function(img, l, t, w, h){

    // crop image
    image(img, l, t, w, h);
    var bbl = get(0, 0, 160, 130);

    // apply mask
    bbl.mask(cloudMask);
    return bbl;
};

var title = function(){
    var i0 = getImage("landscapes/clouds-from-plane");
    var i1 = getImage("landscapes/waterfall_niagara-falls");
    var i2 = getImage("animals/butterfly_monarch");
    var i3 = getImage("landscapes/beach");

    // get bubble images
    var waterfall = bubble(i1, 0, 0, 160, 115);
    var butterfly = bubble(i2, -30, 4, 200, 135);
    var beach = bubble(i3, 0, 0, 190, 120);

    // sky background
    image(i0, -520, 0, 1280, 950);
    fill(230, 245, 255, 140);
    noStroke();
    rect(0, 0, width, height);

    // draw bubbles
    image(cloud, 40, 140);
    image(waterfall, 40, 140);
    image(cloud, 190, 100);
    image(butterfly, 190, 100);
    image(cloud, 340, 140);
    image(beach, 340, 140);

    // hopper
    image(hopper, 150, 290);

    // thought bubbles
    fill(255, 140);
    stroke(0, 140);
    // left
    ellipse(200, 305, 10, 10);
    ellipse(170, 290, 15, 15);
    ellipse(140, 270, 20, 20);
    // middle
    ellipse(290, 290, 10, 10);
    ellipse(295, 265, 15, 15);
    ellipse(290, 235, 20, 20);
    // right
    ellipse(365, 320, 10, 10);
    ellipse(395, 300, 15, 15);
    ellipse(420, 270, 20, 20);

    // text information
    textFont(createFont('arial'), 20);
    textAlign(CENTER, CENTER);
    fill(0);
    text("DEADLINE:", 78, 440);
    text("27 AUG 2021", 80, 470);
    pushMatrix();
    translate(250, 10);
    scale(1, 1.25);
    text("THE", 0, 15);
    textFont(createFont('arial black'), 46);
    text("GREAT OUTDOORS", 0, 52);
    fill(60, 180, 250);
    text("GREAT OUTDOORS", -2, 50);
    popMatrix();
};

draw = function() {
    // run once initialization
    initMasks();
    title();
    noLoop();
};
