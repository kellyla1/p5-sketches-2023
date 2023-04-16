

function setup () {
    c = createCanvas(1000,1000)
    background(255, 0, 84)
    
    strokeWeight(5.0)
}

function draw() {
    line(200, 200, 700, 200)
    line(200, 200, 200, 700)
    line(200, 500, 500, 500)

    fill(57, 0, 153)
    circle(220, 225, 20)
    circle(250, 225, 20)
    circle(280, 225, 20)
    circle(310, 225, 20)
    circle(340, 225, 20)
    circle(370, 225, 20)
    circle(400, 225, 20)
    circle(430, 225, 20)
    circle(460, 225, 20)
    circle(490, 225, 20)
    circle(520, 225, 20)
    circle(550, 225, 20)
    circle(580, 225, 20)
    circle(610, 225, 20)
    circle(640, 225, 20)

    circle(220, 255, 20)
    circle(220, 285, 20)
    circle(220, 315, 20)
    circle(220, 345, 20)
    circle(220, 375, 20)
    circle(220, 405, 20)
    circle(220, 435, 20)
    circle(220, 465, 20)
    circle(220, 525, 20)
    circle(220, 555, 20)
    circle(220, 585, 20)
    circle(220, 615, 20)
    circle(220, 645, 20)
    circle(220, 675, 20)
    

    circle(250, 465, 20)
    circle(280, 465, 20)
    circle(310, 465, 20)
    circle(340, 465, 20)
    circle(370, 465, 20)
    circle(400, 465, 20)
    circle(430, 465, 20)
    circle(460, 465, 20)
    circle(490, 465, 20)
    



}

function mousePressed() {
    saveCanvas(c, "03.21", "png")
}