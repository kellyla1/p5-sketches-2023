let c;
let ourFont;
let points;


function preload() {
    ourFont = loadFont('career.ttf');
}

function setup() {
    c = createCanvas(1000,1000)
    
    colorMode(HSB,360);

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("f",100,600,600);
    
}

function draw() {

    let ferb = map(mouseX, 0, 1000, 0, 255)
    // strokeWeight(5)
    fill(ferb,255,255)
    // ellipse(mouseX,mouseY,50)
    textSize(mouseY/10)
    

    for(let i=0; i<points.length; i++) {
        fill(random(255),255,255)
        rect(points[i].x+random(-5,15), points[i].y+random(-5,5),random(10,60))
        
    }
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}