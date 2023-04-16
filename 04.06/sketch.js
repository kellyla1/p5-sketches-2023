let detailX;
let ourFont;

function setup () {
    c = createCanvas(1000,1000)
    

    detailX = createSlider(3, 24, 3);
    detailX.position(10, height + 5);
    detailX.style('width', '80px');
    

}

function preload() {
    ourFont = loadFont('amalia.otf');
}


function draw() {
    background('rgba(100%,0%,100%,1)');
    translate(400,400);
    rotate(frameCount/10);
    text("F", 0, 0);

    textSize(300)
    textFont(ourFont);
    
    points = ourFont.textToPoints("F",100,600,600);


}

// function mousePressed() {
//     saveCanvas(c, "04.05", "png")
    
// }