

function createSketch (app) {

  const birds = [];
  

  app.setup = () => {
    app.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);

    for(let i = 0; i < 1800; i++){
      let color = app.color(255);
      if(i === 599) color = app.color(255, 0, 0);
      birds.push(new Bird(app, birds, color, i === 599));
    }
  }
  

  app.draw = () => {
    this.c+=1;

    
      app.background(0);

      app.noStroke();
  
      app.fill(115,13,0);
      app.ellipse((701*1.5)-350, 350*1.5-160, 60*1.5);
      app.ellipse((650*1.5)-350, 350*1.5-160, 60*1.5);
      app.triangle(621*1.5-350, 360*1.5-160, 730*1.5-350, 360*1.5-160, 673*1.5-350,435*1.5-160);
    
   

    birds.forEach(bird => {
      bird.update();
      bird.draw();
    });
  }
}

new p5(createSketch);