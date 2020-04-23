
class Bird {

  constructor(app, birds, color, selected) {
    this.app = app;
    this.birds = birds;
    this.pos = new p5.Vector(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.vel = null;
    this.color = color;
    this.selected = selected;

    this.counter=1;

    this.count = Math.random() * 10000;

    this.radius = 150;
    this.behindAngle = Math.PI / 2;
  }

  update() {
    this.counter +=1;
    this.count += .01;
    const random = this.app.noise(this.count);
    const angle = random * Math.PI * 2;

    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(5);
    // M
    if(this.pos.x<401&&this.pos.x>394&&this.pos.y<500&&this.pos.y>300){

    }else if(this.pos.x<415&&this.pos.x>385&&this.pos.y<310&&this.pos.y>300){

    }else if(this.pos.x<415&&this.pos.x>385&&this.pos.y<500&&this.pos.y>490){

    }else if(this.pos.x<1001&&this.pos.x>994&&this.pos.y<500&&this.pos.y>300){

    }else if(this.pos.x<1001&&this.pos.x>920&&this.pos.y<500&&this.pos.y>490){

    }else if(this.pos.x<910&&this.pos.x>905&&this.pos.y<500&&this.pos.y>300){
    
    }else{
      this.pos.add(this.vel);
    }

    


     
    
    

    const padding = 20;
    if(this.pos.x < -padding) this.pos.x = window.innerWidth + padding;
    if(this.pos.x > window.innerWidth + padding) this.pos.x = -padding;
    if(this.pos.y < -padding) this.pos.y = window.innerHeight + padding;
    if(this.pos.y > window.innerHeight + padding) this.pos.y = -padding;
  }

  draw() {

    
    const d = 5;
    this.app.push();
    this.app.translate(this.pos.x, this.pos.y);
    this.app.rotate(this.vel.heading() + Math.PI/2);
   
    this.app.fill(this.color);
   /* this.app.triangle(
      -d, d, // izquierda abajo
      d, d, // derecha abajo
      0, -d * 2,
    );*/
 
    this.app.stroke('white');
    this.app.strokeWeight(3);
    this.app.point(d,d);
    this.app.pop();
    this.app.stroke('p');

   
  }
}