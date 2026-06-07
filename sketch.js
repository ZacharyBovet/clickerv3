let canvasX = 1000
let canvasY = 700

let size = 100;


function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  background(220);
  
  translate(canvasX/2, canvasY/2);
  circle(0, 0, size);

}

function mousePressed(){
  
  if (mouseX < canvasX/2+50 && mouseX >         canvasX/2-50 && 
        mouseY < canvasY/2+50 && mouseY         > canvasY/2-50)
                   
    size += 10;

}

function mouseReleased(){
  
  if (mouseX < canvasX/2+50 &&                     mouseX > canvasX/2-50 && 
          mouseY < canvasY/2+50 &&                 mouseY > canvasY/2-50)
    
    size -= 10;

}





