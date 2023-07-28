const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.speedY = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.3 + 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  while (particles.length > 50) {
    particles.pop();
  }

  while (particles.length < 50) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  handleParticles();

  requestAnimationFrame(animate);
}

animate();
