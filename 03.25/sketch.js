let c;
let ourFont;
let f = 0;
let profs = ["F"]
console.log(profs)
let points;


function preload() {
    ourFont = loadFont('career.ttf');
}

function setup() {
    c = createCanvas(1000,1000)

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("F",100,600,600);

    noStroke();
    
    textSize(40)
    fill(0)
}

function draw() {
    colorMode(500,455);
f=f+0.0001;
    
    
    
    
    for(let i=0; i<points.length; i++) {
        fill(noise(f*points[i].x)*255,455,655)
        ellipse(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,20))
        
    }
    
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
}