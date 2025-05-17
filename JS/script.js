document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const currentlyActive = document.querySelector(".faq-item.active");

    if (currentlyActive && currentlyActive !== faqItem) {
      currentlyActive.classList.remove("active");
    }

    faqItem.classList.toggle("active");
  });
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

$('a.nav-link[href^="#"]').on("click", function (event) {
  event.preventDefault();

  var target = $(this.getAttribute("href"));

  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      800
    );
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("#backToTop").fadeIn();
  } else {
    $("#backToTop").fadeOut();
  }
});

$("#backToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("iletisimForm");

  // form varsa aşağıdaki kodları çalıştır
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const ad = form.querySelector("input[placeholder='Adınız']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const mesaj = form.querySelector("textarea").value.trim();

      if (!ad || !email || !mesaj) {
        alert("Lütfen tüm gerekli alanları doldurun.");
        return;
      }

      alert("Teşekkürler! Mesajınız başarıyla iletildi.");
      form.reset();
    });

    const button = form.querySelector("button");

    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#28a745";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#343a40";
    });
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelector(".watch-video a").addEventListener("click", function () {
  alert("YouTube sayfasına yönlendiriliyorsunuz.");
});

window.onload = function () {
  console.log("MotoNova sayfasına hoş geldiniz!");
};

window.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");
  const year = new Date().getFullYear();
  copyright.textContent = `© ${year} MotoNova. Tüm hakları saklıdır.`;
});

$(document).ready(function () {
  $("#iletisimForm input, #iletisimForm select, #iletisimForm textarea").focus(function () {
    $(this).css("background-color", "#ffffcc");
  }).blur(function () {
    $(this).css("background-color", "");
  });
});

const form = document.getElementById('iletisimForm');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! Teşekkürler.');
    e.target.reset();
  });
}

const images = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

const prevBtn = document.getElementById("oncekiBtn");
const nextBtn = document.getElementById("sonrakiBtn");

prevBtn.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("active");
});

nextBtn.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
});

function updateModernClock() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString([], options);
  const dateString = now.toLocaleDateString();
  $('#modernClock').html(`${timeString}<br><small>${dateString}</small>`);
}

setInterval(updateModernClock, 1000);
updateModernClock();
