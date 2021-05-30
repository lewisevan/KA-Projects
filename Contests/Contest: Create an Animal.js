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

{
  background(224, 224, 224);
  noStroke();
  fill(215, 215, 215);
  rect(0, 0, 80, 600);
  rect(520, 0, 80, 600);
  var y = 0;
  while (y < 600) {
    fill(215, 215, 215);
    rect(-10, y, 120, 30, 20);
    rect(490, y, 120, 30, 20);

    fill(224, 224, 224);
    rect(54, y + 29, 120, 30, 20);
    rect(420, y + 29, 120, 30, 20);

    y += 59;
  }

  //Elk thing
  {
    pushMatrix();
    translate(308, 233);
    noStroke();

    //tail
    fill(203, 168, 126);
    arc(255, 212, 30, 35, 0, 180);

    //Legs
    fill(106, 53, 37);
    arc(250, 200, 75, 148, 90, 180);
    arc(250, 274, 28, 36, 270, 360);
    rect(249, 272, 15, 45);
    rect(150, 200, 47, 54);
    rect(150, 254, 15, 63);

    //big light colored arc and neck
    fill(203, 168, 126);
    arc(200, 200, 100, 110, 0, 180);
    quad(115, 160, 115, 210, 150, 253, 150, 200);

    //Rest of the arc in the middle
    fill(106, 53, 37);
    arc(200, 200, 75, 85, 0, 180);
    fill(135, 86, 56);
    arc(200, 200, 75, 85, 90, 180);

    //antlers
    noFill();
    strokeWeight(8);
    stroke(156, 160, 125);
    arc(120, 125, 66, 80, 18, 156);
    arc(143, 158, 20, 20, 102, 160);
    arc(143, 143, 20, 20, 102, 160);
    arc(160, 138, 20, 20, 82, 160);
    arc(97, 134, 20, 20, 77, 92);
    noStroke();

    //The rest of the head
    fill(132, 83, 52);
    arc(115, 160, 85, 100, 90, 180);
    quad(115, 160, 107, 160, 107, 140, 115, 135);
    arc(65, 160, 30, 66, 90, 180);
    rect(65, 160, 28, 33);

    //Eye
    fill(0);
    ellipse(98, 173, 10, 10);
    fill(255, 255, 255);
    ellipse(101, 173, 3, 3);

    popMatrix();
  }

  //Contest font
  {
    pushMatrix();
    translate(-45, -90);

    noFill();
    stroke(81, 97, 68);
    strokeWeight(5);

    //C
    arc(200, 200, 70, 70, 90, 270);
    rect(174, 177, 1, 46, 10);

    //O
    ellipse(236, 200, 35, 70);
    rect(228, 171, 1, 58, 10);

    //N
    line(280, 165, 280, 235);
    line(281, 165, 312, 235);
    line(312, 165, 312, 235);
    rect(288, 184, 1, 52, 10);

    //T
    line(340, 168, 340, 235);
    line(325, 165, 365, 165);
    rect(348, 169, 1, 67, 10);

    //E
    line(380, 168, 380, 235);
    line(381, 165, 410, 165);
    line(381, 236, 410, 236);
    line(390, 195, 400, 195);
    rect(388, 169, 1, 67, 10);

    //S
    arc(450, 182, 35, 35, 85, 294);
    arc(450, 219, 50, 40, 282, 507);
    rect(441, 169, 1, 27, 10);
    rect(465, 204, 1, 27, 10);

    //T
    pushMatrix();
    translate(155, 0);
    line(340, 168, 340, 235);
    line(325, 165, 365, 165);
    rect(348, 169, 1, 67, 10);

    popMatrix();

    popMatrix();
  }

  //Other Text
  textSize(35);

  fill(81, 97, 68);

  text("Create an Animal", 165, 194);

  //Branches
  {
    fill(115, 99, 80);
    rect(0, 157, 510, 5, 10);
    rect(241, 221, 510, 5, 10);
    stroke(115, 99, 80);
    strokeWeight(4);
    line(64, 160, 110, 183);
    line(80, 170, 81, 183);
    line(121, 174, 101, 178);
    line(342, 225, 265, 250);
    line(299, 239, 277, 236);
    line(328, 231, 321, 250);
    line(327, 238, 329, 244);
    line(444, 210, 470, 224);
    line(454, 205, 457, 217);
  }

  //Bird
  {
    pushMatrix();

    translate(-50, -103);

    noStroke();

    //beak
    fill(122, 87, 42);
    arc(135, 195, 25, 20, 180, 360);
    fill(199, 169, 0);
    arc(135, 192, 25, 15, 180, 360);

    //body and head
    fill(168, 124, 79);
    arc(134, 200, 30, 30, 90, 270);
    rect(115, 200, 19, 45, 10);
    fill(201, 139, 98);
    rect(125, 200, 13, 45, 10);

    //leg and foot
    fill(255, 176, 80);
    rect(121, 253, 17, 7, 10);
    fill(220, 173, 129);
    arc(121, 246, 23, 23, 270, 450);

    //Tail
    pushMatrix();

    rotate(-60);
    translate(-269, -19);
    fill(149, 104, 65);
    rect(94, 220, 50, 14);
    arc(95, 227, 14, 14, 90, 270);
    fill(207, 188, 171);
    rect(94, 220, 50, 7);
    arc(95, 227, 14, 14, 180, 270);

    popMatrix();

    //Wing
    pushMatrix();

    rotate(-15);
    translate(-58, 11);
    fill(145, 103, 63);
    arc(101, 238, 60, 60, 180, 360);
    fill(173, 138, 110);
    arc(101, 238, 60, 60, 270, 360);
    fill(186, 127, 87);
    arc(101, 238, 40, 40, 180, 360);
    fill(201, 154, 124);
    arc(101, 238, 40, 40, 270, 360);

    popMatrix();

    //Eye
    fill(0);
    ellipse(129, 193, 5, 5);
    fill(255, 255, 255);
    ellipse(127, 193, 2, 2);

    popMatrix();
  }

  //Deadline Text
  fill(140, 140, 140);
  text("D \nE \nA \nD\nL\nI\nN\nE", 12, 248);

  text("OCT. 27, 2019", 62, 527);

  //Grass
  fill(63, 84, 57);
  rect(40, 550, 520, 60, 20);

  rect(10, 550, 580, 10, 20);
  rect(20, 565, 560, 10, 20);
  rect(10, 580, 580, 10, 20);
  rect(30, 595, 540, 10, 20);

  fill(224, 224, 224);

  rect(10, 560, 40, 5, 20);
  rect(10, 575, 53, 5, 20);
  rect(10, 590, 32, 5, 20);

  rect(521, 560, 40, 5, 20);
  rect(559, 575, 40, 5, 20);
  rect(535, 590, 40, 5, 20);
}
