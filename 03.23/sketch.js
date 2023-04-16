let c; 

function setup () {
    c = createCanvas(1000,1000)
    //background(0)
    background(20,50,50)

    noStroke();
    rect(50,70,50,300)
    rect(50,25,300,25)
    rect(50,60,300,25)
    //rect(100,25,300,120)
    rect(50,200,200,50)
}


function mousePressed() {
    saveCanvas(c, "03.21", "png")
}