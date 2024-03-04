let x = -20;
let y = 10;
let x2 = -20;
let y2 = 10;
let leaves = 0; 
let floor = 0;

function setup() {
  createCanvas(400, 440);
}
  
  function draw() {
    
    while(floor < 200) {
      x = random(-20, 400);
      
      if(floor % 10 == 0) {
        y += 40;
      }
      if (random() > 0.5) {
        fill(random(90, 120), random(40, 60), random(0))
      } else {
        fill(random(140, 160), random(140, 160), random(0))
      }
      // 51, 102, 0
      ellipse(x, y, 80, 80);
      //arc(x, y, 80, 80, PI, 2*PI, OPEN);
      leaves ++;
      floor = leaves;
      print(leaves);
    }

    //arc(50, 50, 80, 80, PI, 2*PI, OPEN);
}