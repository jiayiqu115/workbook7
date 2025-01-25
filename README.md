# workbook7
WS3 Project - Random Walker
Link => [your project link]

Project
Source of idea
This project was inspired by observing the phenomenon of random walks. We often see some points or objects moving randomly on the screen, forming a natural "walking" effect. In this project, I want to create multiple objects (Walker), let them move randomly, and leave their "historical tracks" on the screen to form an interesting visual effect. Each "walker" will randomly change their position when moving, and their path will be displayed with small emoticons (such as "🐢") to increase the fun.

Process
1. Create a canvas and initialize objects
First, I created a canvas (createCanvas) to display all walkers. Then, I used a loop to create 40 Walker objects, each with a random starting position and color attributes. Each Walker object will randomly walk on the canvas and leave their tracks.

Idea

Use random() to give each Walker random coordinates and colors.

Store these Walker objects in the walker's array for subsequent operations.
Problems encountered
There is no big problem with this part of the code, but at first, I was unsure how each Walker could save its trajectory. Later, I decided to use the history array to store the position of each frame.
```java script
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
```
2. Update and display each Walker
In the draw function, I call the step and show the methods of each Walker object by traversing the Walker's array.
The step method controls the random movement of the Walker and stores the new position in the history array.
The show method draws the "🐢" expression at each position to show its movement trajectory.
Thinking
The step method uses random(-2, 2) to determine the step length of each movement so that random displacement can be achieved.
The show method uses text to draw a character following the historical trajectory of the Walker.
```java script
function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step(); 
    walkers[i].show();  
  }
}
```
3. Design of Walker Class
The Walker class is the core of this project. It is responsible for defining the behavior and display of each walker.

Constructor: Initialize the position (x, y), color (r, g, b), and empty history array (history).
Step method: Each time it is called, Walker randomly moves to the x or y-axis and saves the current position to the history array.
Show method: Traverse the history array and draw a "🐢" expression at each position to form the walker's trajectory.
```java script
class Walker {
  constructor(x, y, r, g, b) {
    this.x = x;  
    this.y = y;  
    this.r = r;  
    this.g = g;  
    this.b = b;  
    this.history = [];  
  }

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
```
