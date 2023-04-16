let c; 

function setup () {
    c = createCanvas(1000,1000)
    //background(0)
    background(100,50,50)

    noStroke();
    rect(50,70,90,300)
    rect(50,70,300,50)
    rect(50,200,300,50)

    
}


function mousePressed() {
    saveCanvas(c, "03.21", "png")
}