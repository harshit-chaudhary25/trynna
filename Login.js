// GSAP login box animation
gsap.from(".auth-box", {
  y: 50,
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "power3.out"
});

// -------------------- COBWEB ANIMATION --------------------
const canvas = document.getElementById('cobweb');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = [];
const pointCount = 40; // number of cobweb points

// Create random points around the login box
for (let i = 0; i < pointCount; i++) {
  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2
  });
}

// Draw cobweb lines
function drawWeb() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    // move points
    p1.x += p1.vx;
    p1.y += p1.vy;

    // bounce from edges
    if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
    if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

    // draw lines between close points
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        ctx.strokeStyle = `rgba(0,255,255,${1 - dist/150})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawWeb);
}

drawWeb();

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
