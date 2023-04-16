let c; 

function setup () {
    c = createCanvas(1000,1000)
    //background(0)
    background(20,50,50)

    noStroke();
    circle(320, 100, 100);
    circle(240, 100, 100);
    circle(160, 100, 100);
    circle(80, 100, 100);
    circle(80, 180, 100);
    circle(80, 250, 100);
    circle(80, 320, 100);
    circle(150, 220, 80);
    circle(200, 220, 80);
    circle(250, 220, 80);
    circle(300, 220, 80);
}


function mousePressed() {
    saveCanvas(c, "03.21", "png")
}