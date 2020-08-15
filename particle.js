class particle {
  constructor(ray, max, min, location) {
    this.theta = ray,
    this.r = Math.random() * (max - min) + min,
    this.vector = [0, 0],
    this.location = location,
    this.calculate();
  }

  calculate(){
    var x;
    var y;
    y = Math.sin(this.theta) * this.r;
    x = Math.cos(this.theta) * this.r;
    this.vector = [x, y];
  }

  move(){
    this.location[0] += this.vector[0];
    this.location[1] += this.vector[1];
  }

  aForce(force){
    this.vector[0] += force[0];
    this.vector[1] += force[1];
  }
}
