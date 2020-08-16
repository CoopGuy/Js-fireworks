class particle {
  constructor(rocket, location, max, min, ray) {
    if(rocket == false){
      this.theta = ray,
      this.r = Math.random() * (max - min) + min,
      this.vector = [0, 0],
      this.location = location,
      this.calculate();
    }
    else{
      this.theta = 90,
      this.r = -Math.sqrt(-(2*-.0098*location[1])),
      this.vector = [(Math.random() * (max - min) + min), this.r],
      this.location = [location[0], canvas.height];
    }
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
