// GSAP Animations for Nahuel Benitez Portfolio with Performance Optimizations

document.addEventListener('DOMContentLoaded', () => {
    const gsapConfig = {
      defaultEase: "power1.out",
      defaultDuration: 0.3,
    };
  
    // Function to toggle scrollbar visibility
    const toggleScrollbar = (hide) => {
      document.body.style.overflow = hide ? "hidden" : "auto";
    };
  
    // Welcome Text Animation
    gsap.from("#text", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 0.3,
    });
  
    gsap.to(".console-underscore", {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  
    // Project Panels 3D Effect
    document.querySelectorAll(".panel").forEach(panel => {
      panel.addEventListener("mousemove", (e) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        gsap.to(panel, {
          rotationY: ((x / rect.width) - 0.5) * 10,
          rotationX: ((y / rect.height) - 0.5) * -10,
          duration: gsapConfig.defaultDuration,
          willChange: "transform",
        });
      });
  
      panel.addEventListener("mouseleave", () => {
        gsap.to(panel, {
          rotationY: 0,
          rotationX: 0,
          duration: gsapConfig.defaultDuration,
        });
      });
  
      // Panel entrance animation
      gsap.from(panel, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
          end: "bottom 50%",
          toggleActions: "play reset play reset",
          markers: false
        },
      });
    });
  
    // Profile Card Entrance Animation
    gsap.from(".card", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".card",
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play reset play reset",
        markers: false
      },
    });
  
    // Social Icons Hover Animation
    document.querySelectorAll(".sci li").forEach(icon => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { y: -5, duration: 0.2 });
      });
  
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { y: 0, duration: 0.2 });
      });
    });
  
    // Wave Parallax Effect
    gsap.to(".wave span", {
      y: (i) => i * 5,
      scrollTrigger: {
        trigger: ".section1",
        start: "top bottom",
        scrub: true,
      },
    });
  
    // Scroll-to-Top Button Animation
    const topButton = document.querySelector('.top');
    gsap.from(topButton, {
      opacity: 0,
      y: 50,
      duration: gsapConfig.defaultDuration,
    });
  
    window.addEventListener("scroll", () => {
      const visible = window.scrollY > 300;
      gsap.to(topButton, {
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
        pointerEvents: visible ? "auto" : "none",
        duration: gsapConfig.defaultDuration,
      });
    });
  
    // Continuous Background Animation
    gsap.to(".wave span", {
      rotation: 360,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  
    // Navbar Background Change on Scroll
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 50;
      gsap.to(navbar, {
        backgroundColor: isScrolled ? "rgba(20, 20, 20, 0.8)" : "transparent",
        duration: gsapConfig.defaultDuration,
      });
    });
  
    // Footer Social Icons Entrance Animation
    gsap.from("footer .social-icon", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        toggleActions: "play reset play reset",
        markers: false
      },
    });
  
    // Preloader Exit Animation
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      toggleScrollbar(true);
      gsap.to(preloader, {
        scale: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          preloader.remove();
          toggleScrollbar(false);
        },
      });
    }
  });
  