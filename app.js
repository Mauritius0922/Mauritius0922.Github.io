document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list ul");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav-list ul li a").forEach(navLink => {
      navLink.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  });
  