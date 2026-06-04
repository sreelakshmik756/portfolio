
const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("click", function () {
  alert("Resume download coming soon!");
});
const hireBtn = document.querySelector(".hire-btn");

hireBtn.addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth"
  });
});
const projectBtn = document.querySelector(".project-btn");

projectBtn.addEventListener("click", function () {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stops page refresh
  alert("Message Sent Successfully!");
  form.reset();
});
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
});