// banner section owl carousel

$(".bnr-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 8000,
  autoplaySpeed: 2000,
  navContainer: [".bnr-carousel-nav-container"],
  navText: [$(".nav-left"), $(".nav-right")],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// portfolio section owl carousel

$(".portfolio-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  loop: true,
  loop: true,
  center: true,
  dots: true,
  nav: false,

  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".award-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  nav: true,
  autoplaySpeed: 2200,
  autoplayTimeout: 2200,
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>',
  ],
  navContainer: [".award-owl-nav"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      dots: true,
      nav: true,
    },
    1000: {
      items: 2,
    },
  },
});

// end here

$(".our-team-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  navContainer: [".our-team-right"],
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

// $('.testimonial-owl').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplayTimeout: 6000,
//     autoplaySpeed: 5000,
//     // dotContainer: [".testimonial-dots"],
//     dots: true,
//     navText:
//     [
//         '<i class="fa-solid fa-arrow-right-long"></i>',
//         '<i class="fa-solid fa-arrow-left-long"></i>'
//     ],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

$(".our-blog-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1300: {
      items: 2.5,
    },
  },
});

// vanila js start here

VanillaTilt.init(document.querySelectorAll(".main-service-card"), {
  max: 20,
  speed: 300,
  easing: "cubic-bezier(.03,.98,.52,.99)",
});

//   end here

// ////// Hambarger menu /////

const menu = document.querySelector("#menu");
const mainslid = document.querySelector("#main-slide");
const slide = document.querySelector("#slide");
const close = document.querySelector("#close");

menu.onclick = function () {
  mainslid.classList.add("open");
};
close.onclick = function () {
  mainslid.classList.remove("open");
};

// end here

// ===== NAVBAR ===== //
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 100) {
    $("header").addClass("costum-navbar");
  } else {
    $("header").removeClass("costum-navbar");
  }
});

//   end here

const lerp = (a, b, n) => (1 - n) * a + n * b;
class Cursor {
  constructor() {
    // config
    this.target = { x: 0.5, y: 0.5 }; // mouse position
    this.cursor = { x: 0.5, y: 0.5 }; // cursor position
    this.speed = 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }
  onMouseMove(e) {
    //get normalized mouse coordinates [0, 1]
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  render() {
    //calculate lerped values
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
        Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
    this.bindAll();
    window.addEventListener("mousemove", this.onMouseMove);
    this.raf = requestAnimationFrame(this.render);
  }
}
new Cursor();

//Всплывающие картинки
//Объявление глобального курсора
let t = document.getElementById("cursor");

//Всплывающие картинки при наведении на элементы с классами .hover-img
function q() {
  t.classList.add("hover-interactive-text");
}
function s() {
  t.classList.remove("hover-interactive-text");
}
function o(t) {
  t.addEventListener("mouseover", q), t.addEventListener("mouseout", s);
}
document.addEventListener("DOMContentLoaded", function () {
  let hoverLink = document.querySelectorAll(".hover-img");
  for (let i = 0; i < hoverLink.length; i++) {
    o(hoverLink[i]);
    let url = hoverLink[i].getAttribute("data-url");
    hoverLink[i].addEventListener("mouseenter", function () {
      t.style.backgroundImage = "url(" + url + ")";
    });
    hoverLink[i].addEventListener("mouseleave", function () {
      t.style.backgroundImage = "";
    });
  }
});

// end here

var btn = $("#buttontop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// mobile menu toggle

$(".hambarger-mobile-menu").click(function () {
  $(".mobile-menu").toggleClass("show");
  $("#toggle").toggleClass("active");
});

// counter

$(".counter").counter({
  countFrom: 0,
  duration: 7000,
});
