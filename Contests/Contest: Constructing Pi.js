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
var pg = createGraphics(width, height, P3D);
pg.beginDraw();
pg.background(255, 255, 255, 0); // transparent!
pg.pointLight(255, 255, 255, 600, 600, 900);
// pg.directionalLight(255, 255, 255, 0.2, -0.4, -0.8);
pg.ambientLight(60, 60, 60);
pg.translate(-23, -20, 0);
pg.rotateY(-23/180*PI); // change angle

var panel = function(x, y, z,  w, h, rho, theta, clr  ) {
    pg.fill(clr);
    pg.shininess(1.0);
    pg.specular(255, 255, 255);
    pg.pushMatrix();
    pg.translate(x, y, z);
    pg.rotateY(rho/180*PI);
    pg.rotateX(theta/180*PI);
    pg.rect(0, 0, w, h);
    pg.popMatrix();
};

// background(28, 151, 173);
var pClr = color(61, 110, 184);
// vertical columns
for (var y = 210; y < 400; y+=40) {
    panel(225, y, 0, 20, 40, 90, 0, pClr);
    panel(225, y, -20, 20, 40, 90, 0, pClr);
    panel(225, y, 0, 20, 40, 0, 0, pClr);
    panel(245, y, 0, 20, 40, 0, 0, pClr);
    panel(265, y, 0, 20, 40, 90, 0, pClr);
    panel(265, y, -20, 20, 40, 90, 0, pClr);
    panel(345, y, 0, 20, 40, 90, 0, pClr);
    panel(345, y, -20, 20, 40, 90, 0, pClr);
    panel(345, y, 0, 20, 40, 0, 0, pClr);
    panel(365, y, 0, 20, 40, 0, 0, pClr);
    panel(385, y, 0, 20, 40, 90, 0, pClr);
    panel(385, y, -20, 20, 40, 90, 0, pClr);
}

// cross bar
for (var x = 170;x < 420; x+= 20) {
    panel(x, 188, 1, 20, 40, 0, 0, pClr);
    panel(x, 228, 1, 20, 40, 0, -90, pClr);
}
// ends of crossbar
panel(170, 188, 1, 20, 40, 90, 0, pClr);
panel(170, 188, -19, 20, 40, 90, 0, pClr);
panel(430, 188, 1, 20, 40, 90, 0, pClr);
panel(430, 188, -19, 20, 40, 90, 0, pClr);

// black out one of the panels
panel(210, 188, 2, 20, 40, 0, 0, color(0, 0, 0));

// panel hanging from crane
x = 268;
y = 200;
var z = 112;
panel(x, y, z, 20, 40, 0, 0, pClr);
pg.noStroke();
pg.stroke(87, 57, 1);
pg.strokeWeight(11);
pg.line(x+10, -150, z, x+10, y-20, z);
pg.line(x, y, z, x+10, y-20, z);
pg.line(x+20, y, z, x+10, y-20, z);

// text
pg.textSize(45);
pg.fill(255, 238, 46);
pg.text('Contest: Constructing π', 66, 300, 30);
pg.textSize(35);
// pg.text('Deadline: 03/28/2019', 150, 349, 30);

pg.endDraw();
var img = pg.get();

// here we are back in 2D land as usual
// 5k digits of pi from
// https://www.piday.org/million
var myPi = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472';
// gradient background
var c1 = color(124, 245, 63), c2 = color(0, 0, 0);
var w = width;
var h = height;
for (var ly = 0; ly < h; ly++) {
    stroke(lerpColor(c1, c2, ly/h));
    line(0, ly, w, ly);
}
fill(173, 135, 22, 200);
textSize(13);
text(myPi, 0, 0, width, 10000); 

fill(255, 230, 0);
textSize(30);
text('Deadline: 03/28/2019', 145, 500);
// show it!
image(img, 5, 0);

//}