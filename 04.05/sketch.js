
function setup () {
    c = createCanvas(1000,1000)
    background (248,132,145)

    noStroke()
    
}


function draw() {
    fill(255,1700,21);
    circle(620, 100, 100);
    circle(540, 100, 100);
    circle(460, 100, 100);
    circle(370, 100, 100);
    


    circle(370, 180, 100);
    circle(370, 250, 100);
    circle(370, 320, 100);
    

    circle(440, 220, 80);
    circle(500, 220, 80);
    circle(550, 220, 80);
    circle(600, 220, 80);
   

    fill(131,197,190)
    circle(620, 100, 80);
    circle(540, 100, 80);
    circle(460, 100, 80);
    circle(370, 100, 80);

    fill(237,246,249)
    circle(620, 100, 60);
    circle(540, 100, 60);
    circle(460, 100, 60);
    circle(370, 100, 60);
  
    
}

function mousePressed() {
    saveCanvas(c, "04.05", "png")
    
}