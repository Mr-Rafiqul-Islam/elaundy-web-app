(function ($) {
  "use strict";

  
  // counter buttons
  function updateButtons(targetId) {
    const value = parseInt($(`#${targetId}`).text());
    const $decBtn = $(`.decrease[data-target="${targetId}"]`);
    const $incBtn = $(`.increase[data-target="${targetId}"]`);

    $decBtn.prop('disabled', value <= 1);
    $incBtn.prop('disabled', value >= 5);
  }
$(document).ready(function () {
  // Initialize button states
  ['small', 'regular', 'large', 'overSized'].forEach(updateButtons);

  $('.increase').on('click', function () {
    const targetId = $(this).data('target');
    const $valueEl = $(`#${targetId}`);
    let value = parseInt($valueEl.text());
    if (value < 5) {
      $valueEl.text(++value);
      updateButtons(targetId);
    }
  });

  $('.decrease').on('click', function () {
    const targetId = $(this).data('target');
    const $valueEl = $(`#${targetId}`);
    let value = parseInt($valueEl.text());
    if (value > 1) {
      $valueEl.text(--value);
      updateButtons(targetId);
    }
  });
});

// for pickup instructions
  $('#pickupChecks').change(function () {
    $('#pickupInstructionsWrapper').toggleClass('show', this.checked);
});
  // click card to select radio button
  $(".selectable-card").click(function () {
    $(this).find('input[type="radio"]').prop("checked", true).trigger("change");
  });

  $('input[type="radio"]').change(function () {
    $(".selectable-card").removeClass("selected");
    if ($(this).is(":checked")) {
      $(this).closest(".selectable-card").addClass("selected");
    }
  });

  // form submit redirect to index2.html
  $("#signup-form").on("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    window.location.href = "index2.html"; // Redirect to index2.html
  });
  // banner slider js
  $(".banner-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  });

  let currentStep = 1;

  function showStep(step) {
    $(".step").removeClass("active");
    $('.step[data-step="' + step + '"]').addClass("active");
    $(".step-circle").removeClass("active");
    $('.step-circle[data-step="' + step + '"]').addClass("active");
  }

  $(".next-btn").click(function () {
    const current = $('.step[data-step="' + currentStep + '"]');
    const inputs = current.find("input, textarea");
    let valid = true;

    inputs.each(function () {
      if (!this.checkValidity()) {
        this.reportValidity();
        valid = false;
        return false;
      }
    });

    if (valid && currentStep < 6) {
      currentStep++;
      showStep(currentStep);
    }
  });

  $(".prev-btn").click(function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  $("#signupForm").on("submit", function (e) {
    e.preventDefault();
    alert("Signup Successful!");
  });

  showStep(currentStep);

  $(".eye-icon").on("click", function () {
    const $icon = $(this).find("i");
    const $passwordInput = $("#exampleInputPassword1");

    if ($passwordInput.attr("type") === "password") {
      $passwordInput.attr("type", "text");
      $icon.removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
      $passwordInput.attr("type", "password");
      $icon.removeClass("fa-eye-slash").addClass("fa-eye");
    }
  });
  $(".services-slider-two").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // dynamic year for copyright
  document.getElementById("copyright_year").textContent =
    new Date().getFullYear();

  // data background image js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
  // Magnific popup image js
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // fixed menu js
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 120) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // Mobile menu js start
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(".sub-mobile-menu ul").not($(this).next("ul")).slideUp(300);
    $(".sub-mobile-menu a i")
      .not($(this).find("i"))
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this).next("ul").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  });

  /* Odometer Activeate js */
  $(document).ready(function () {
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Banner slider js
  $(".banner-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
})(jQuery);
