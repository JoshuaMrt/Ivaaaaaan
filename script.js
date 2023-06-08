gsap.from(".logo > h1", 0.8, {
  delay: 0.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from("#menu-btn", 0.8, {
  delay: 0.3,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from(".nav-link > a", 1.2, {
  delay: 0.4,
  opacity: 0,
  stagger: 0.2,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from(".scroll__down > span", 1.2, {
  delay: 2,
  opacity: 0,
  stagger: 0.2,
  y: 20, // Change x to y
  ease: Expo.easeInOut
});

gsap.from("img", 2.2, {
  delay: 0.6,
  opacity: 0,
  y: 80,
  ease: Power4.easeInOut
});

gsap.from("p", 2.2, {
  delay: 0.8,
  opacity: 0,
  y: 80,
  ease: Power4.easeInOut
});

gsap.from(".social-media-container > *", 1, {
  delay: 1.2,
  opacity: 0,
  stagger: 0.2,
  x: -20,
  ease: Expo.easeInOut
});

gsap.from(".portfolio-text-container > *", 1.6, {
  delay: .2,
  opacity: 0,
  stagger: 0.2,
  y: 80,
  ease: Power4.easeInOut
});


$("#menu-btn").click(function(e){
  e.preventDefault();

  if ($(".nav-link").css("display") === "none") {
    $(".nav-link").css("display", "flex");
    $(this).removeClass("fa-bars").addClass("fa-times");
  }
  else{
    $(".nav-link").css("display", "none");
    $(this).removeClass("fa-times").addClass("fa-bars");
  }
});

$(window).resize(function(){
  winWidth = $(window).width();
  if(winWidth > 760){
    $(".nav-link").css("display", "flex");
  }
  if(winWidth <= 760 && ($("#menu-btn").hasClass("fa-bars"))){
    $(".nav-link").css("display", "none");
  }
});

// JavaScript code to handle the modal
$(document).ready(function() {

  $('#openModal').click(function() {
    $('#myModal').css('display', 'block');
  });

  $('.modal-close, .modal').click(function() {
    $('#myModal').css('display', 'none');
  });

  $('.modal-content').click(function(e) {
    e.stopPropagation();
  });
});

// Modal section

const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");
      showBtn.addEventListener("click", () => section.classList.add("active"));
      overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );
      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );


// preload

window.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loader');

  setTimeout(function() {
    loader.style.display = 'none';
  }, 3000);
});


// Download function

function downloadPDF() {
  var link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1fjXF51e-CzrT_CsYs0OJmZCIrcqn2Irn/view?usp=sharing';
  link.target = '_blank';
  link.download = 'IvanJoshuaMereteResume.pdf';
  link.click();
}
var downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener('click', downloadPDF);



// cursor

jQuery(document).ready(function ($) {
  function Cursor(cursor, pointer) {
      cursor.css({
          opacity: 1
      });
      pointer.css({
          opacity: 1
      });
      $(document).bind('mousemove', function (e) {
        if ($(e.target).hasClass('nav-link') || $(e.target).closest('.nav-link').length > 0 || $(e.target).hasClass('social-media-container') || $(e.target).closest('.social-media-container').length > 0) {
              $(cursor).addClass('zoom');
          } else {
              $(cursor).removeClass('zoom');
          }
          cursor.css({
              left: e.pageX,
              top: e.pageY
          });
          pointer.css({
              left: e.pageX,
              top: e.pageY
          });
      });
  }

  function destroyCursor(cursor, pointer) {
      cursor.css('opacity', '0');
      pointer.css('opacity', '0');
      //$(document).unbind('mousemove');
  }

  $(document).mouseleave(function () {
      destroyCursor($('#cursor'), $('#pointer'));
  });

  $(document).mouseenter(function () {
      Cursor($('#cursor'), $('#pointer'));
  });

  $(document).on('click', function (e) {
      $('#cursor').css('animation', 'cursorClick 700ms');
      setTimeout(() => {
          $('#cursor').css('animation', '')
      }, 700);
  });

  Cursor($('#cursor'), $('#pointer'));

  $('.show-modal').on('click', function () {
      $(this).toggleClass('scroll');
  });
});