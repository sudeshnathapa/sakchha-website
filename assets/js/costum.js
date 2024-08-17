// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel();
// });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    items: 3,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    //   autoplayHoverPause: true,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


const navbar = document.querySelector('.cstm-navbar');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
}

$(window).scroll(function() {
    $('p,h1,h2,h3,h4,h5,h6').each(function() {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).height();
        if (elementTop < (windowHeight + $(window).scrollTop())) {
            $(this).addClass('animate__animated animate__fadeInUp');
        } else {
            $(this).removeClass('animate__animated animate__fadeInUp');
        }
    });
});



const boxes = document.querySelectorAll('.job-list-inner');

for (const box of boxes) {
  const checkbox = box.querySelector('.form-check-input');
  const skillLevelWrapper = box.querySelector('.skill-level-wrapper');


  box.addEventListener('click', function handleClick() {
    if (box.classList.contains('show')) {

      box.classList.remove('show');
      const selectedSkillLevel = skillLevelWrapper.querySelector('.selected');
      if (!selectedSkillLevel) {
        checkbox.style.display = 'none';
      } else {
        checkbox.style.display = 'block';
      }
    } else {

      box.classList.add('show');
      checkbox.style.display = 'none';
    }
  });


  checkbox.addEventListener('click', function handleCheckboxClick() {
    if (checkbox.checked) {
      checkbox.style.display = 'none';
    }
  });


  const skillLevels = skillLevelWrapper.querySelectorAll('.skill-level');
  for (const skillLevel of skillLevels) {
    skillLevel.addEventListener('click', function handleSkillLevelClick() {
      box.classList.add('show');
      skillLevels.forEach(function (level) {
        level.classList.remove('selected');
      });
      skillLevel.classList.add('selected');
      checkbox.style.display = 'block';
    });
  }


  document.addEventListener('click', function handleDocumentClick(event) {
    if (!box.contains(event.target)) {
      box.classList.remove('show');
      const selectedSkillLevel = skillLevelWrapper.querySelector('.selected');
      if (!selectedSkillLevel) {
        checkbox.style.display = 'none';
      } else {
        checkbox.style.display = 'block';
      }
    }
  });
}