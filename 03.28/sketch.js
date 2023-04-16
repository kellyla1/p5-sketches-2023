let f = 0;

function setup() {
    c = createCanvas(1000,1000)

    noStroke();
    fill(0)
}

function draw() {
    f=f+0.01

    console.log(  )

    background(248,132,145)
        fill(255,500,21)
        rect(50,70,50,random(300))
        rect(50,25,300,noise(f)*25)
        rect(50,60,300,25)
        rect(50,200,200,50)


}

function mousePressed() {
    saveCanvas(c, "03.28b", "png")
}