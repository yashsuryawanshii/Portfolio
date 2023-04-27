"use strict";

/* toggle icon navbar  */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/* this is the functionality of active links  section in nav bar  */
//  selection of elements
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*= ${id} ]`)
          .classList.add("active");
      });
    }
  });
  /* this is the fuction for sticky navbar */
  //  selection of elements
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* remove toggle icon  and navbar when clicked navbar links (scroll) */

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*  validating the contact me  form  */

const inputs = document.getElementsByTagName("input");
const messageInput = document.querySelector("textarea");

// for name
const validName = () => {
  const reg = /[A-Za-z]+\s[A-Za-z]/;
  let inputNameValue = inputs[0].value;
  if (!reg.test(inputNameValue)) {
    alert("Enter a valid Name");
  }
};

//  for email
const validEmail = () => {
  const reg = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}/;
  let inptEmailValue = inputs[1].value;
  if (!reg.test(inptEmailValue)) {
    alert("Enter the valid Email");
  }
};

//  for moblie Number
const validMobileNumber = () => {
  const reg = /[6-9]\d{9}/;
  let inputMobileValue = +inputs[2].value;
  if (!reg.test(inputMobileValue)) {
    alert("Enter the valid mobile Number");
    return false;
  }
};

// for subject
const validSubject = function () {
  let inputSubValue = inputs[3].value;
  if (inputSubValue.trim() === "") {
    alert("Invalid sub");
  }
};

// valid message
const validMessage = function () {
  const reg = / (\S+\s+){9,}\S+ /;
  let messageInputValue = messageInput.value;
  if (!reg.test(messageInputValue)) {
    alert("Message  should be greater the 10 words ");
  }
};

inputs[4].addEventListener("click", (e) => {
  validName();
  validEmail();
  validSubject();
  validMessage();
  if (validMobileNumber() === false) {
    return;
  } else {
    handleSubmit();
  }
});

/*  typed js */
const multipleText = document.querySelector(".multiple-text");
const typed = new Typed(multipleText, {
  strings: ["Frontend Developer", "Programmer", "Gamer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* scroll reavel */

try {
  ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content , .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img , .service-container , .portfolio-box , .contact form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
} catch (e) {
  console.error(e, "Scroll effect took too much time to load");
}

/* this is for form submission */

