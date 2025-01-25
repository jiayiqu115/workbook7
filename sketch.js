let walkers = [];

function setup() {
  createCanvas(400, 480);  
  background(255);          
  
  for (let i = 0; i < 40; i++) {
    let x = random(0, width);   
    let y = random(0, height);  
    let r = random(0, 255);     
    let g = random(0, 255);     
    let b = random(0, 255);     
    
    walkers[i] = new Walker(x, y, r, g, b);  
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step(); 
    walkers[i].show();  
  }
}

// Walker类
class Walker {
  constructor(x, y, r, g, b) {
    this.x = x;  
    this.y = y;  
    this.r = r;  
    this.g = g;  
    this.b = b;  
    this.history = [];  
  }

  // 随机移动
  step() {
    this.x += random(-2, 2);  
    this.y += random(-2, 2);  
    this.history.push(createVector(this.x, this.y));  
  }

  
  show() {
    noFill();
    textSize(24);  
    textAlign(CENTER, CENTER);  
    
    
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      fill(this.r, this.g, this.b);  
      text("🐢", pos.x, pos.y);  
    }
  }
}
