gsap.registerPlugin(ScrollTrigger);

/* Scroll animations */
gsap.utils.toArray("section").forEach(sec => {
  gsap.from(sec.children, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });
});

/* Auth animation */
gsap.from(".auth-box", {
  y: 40,
  scale: 0.95,
  duration: 0.8,
  ease: "power3.out"
});

/* Gallery filter */
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter)
        ? "flex" : "none";
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

/* ================== SCROLL SECTION ANIMATIONS ================== */
document.querySelectorAll(".section").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  });
});

/* ================== CARD ANIMATIONS ================== */
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 30,
    opacity: 1,
    scale: 0.97,
    duration: 0.8,
    ease: "back.out(1.4)"
  });
});

/* ================== GALLERY FILTER ================== */
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.style.display =
        filter === "all" || item.classList.contains(filter)
        ? "flex" : "none";
    });
  });
});

/* ================== HERO FLOATING EFFECT ================== */
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -60,
  ease: "none"
});

// Animate gallery cards on scroll using GSAP
gsap.utils.toArray(".category-card, .gallery-grid img").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

// Animate infrastructure cards on scroll
gsap.utils.toArray(".infra-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

// Popup functionality
const infraCards = document.querySelectorAll(".infra-card");
const popup = document.getElementById("labPopup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closePopup = document.querySelector(".close-popup");

infraCards.forEach(card => {
  card.addEventListener("click", () => {
    const labName = card.dataset.lab;
    const labImg = card.dataset.img;

    popupImg.src = labImg;
    popupTitle.textContent = labName;

    // Show popup with animation
    popup.style.display = "flex";
    gsap.from(".popup-content", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power3.out"
    });
  });
});

// Close popup
closePopup.addEventListener("click", () => {
  gsap.to(".popup-content", {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    ease: "power3.in",
    onComplete: () => {
      popup.style.display = "none";
    }
  });
});

// Close popup when clicking outside content
popup.addEventListener("click", e => {
  if(e.target === popup){
    gsap.to(".popup-content", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        popup.style.display = "none";
      }
    });
  }
});

// Floating button animation
gsap.utils.toArray(".float-btn").forEach(btn => {
  gsap.to(btn, {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 2 + Math.random(), // slightly different speed for each button
    ease: "power1.inOut"
  });
});

// BLACKBOARD CHALK EFFECT
gsap.to(".chalk-text", {
  scrollTrigger: {
    trigger: ".classroom",
    start: "top 70%"
  },
  opacity: 1,
  duration: 1.5
});

gsap.fromTo(
  ".bds-title span",
  {
    y: 60,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  }
);

gsap.fromTo(
  ".bds-title span",
  { y: 60, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: ".bds-title"
  }
);

/* CINEMATIC INTRO EXIT */
window.addEventListener("load", () => {
  gsap.to(".cinematic-intro", {
    opacity: 0,
    scale: 1.2,
    duration: 1.6,
    ease: "power3.inOut",
    delay: 2,
    onComplete: () => {
      document.querySelector(".cinematic-intro").style.display = "none";
    }
  });
});

/* =========================
   SCROLL PROGRESS CINEMATIC BAR
========================= */

gsap.registerPlugin(ScrollTrigger);

gsap.to(".cinematic-progress-fill", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3
  }
});

gsap.fromTo(
  ".bds-title span",
  {
    y: 60,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  }
);

// BDASVM Letter Animation (Starts after 4 seconds)
setTimeout(() => {
  gsap.to(".bdasvm-title span", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  });
}, 4000);

gsap.registerPlugin(ScrollTrigger);

/* ---------- THREE.JS PARALLAX OBJECT ---------- */
const canvas = document.getElementById("parallax-3d");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* 3D Object (safe abstract shape) */
const geometry = new THREE.TorusKnotGeometry(1, 0.35, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x4fa3ff,
  metalness: 0.5,
  roughness: 0.3,
  transparent: true,
  opacity: 0.6
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* Light */
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(5, 5, 5);
scene.add(light);

/* Render loop */
function animate() {
  mesh.rotation.x += 0.002;
  mesh.rotation.y += 0.003;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

/* ---------- SCROLL PARALLAX ---------- */
gsap.to(mesh.position, {
  y: -2,
  scrollTrigger: {
    scrub: true,
    start: "top top",
    end: "bottom bottom"
  }
});

gsap.to(mesh.rotation, {
  y: Math.PI * 4,
  scrollTrigger: {
    scrub: true,
    start: "top top",
    end: "bottom bottom"
  }
});

/* Resize handling */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

