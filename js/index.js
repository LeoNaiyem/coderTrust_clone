
      const menuToggler = document.getElementsByClassName("menu-toggler")[0];
      const navLinks = document.getElementsByClassName("nav-links")[0];
      const submenuTogglerAbout = document.querySelector('.about-link .plus-minus');
      const toggleAboutSubmenu = document.querySelector('.about-link');
      const submenuTogglerCourses = document.querySelector('.courses-link .plus-minus');
      const toggleCoursesSubmenu = document.querySelector('.courses-link');
      const submenuTogglerProjects = document.querySelector('.projects-link .plus-minus');
      const toggleProjectsSubmenu = document.querySelector('.projects-link');
      const submenuTogglerServices = document.querySelector('.services-link .plus-minus');
      const toggleServicesSubmenu = document.querySelector('.services-link');


    // js code for toggle submenu links
    submenuTogglerAbout.addEventListener('click', ()=>{
        toggleActiveClass(toggleAboutSubmenu, submenuTogglerAbout);
        // removeActiveClass(toggleCoursesSubmenu, submenuTogglerCourses, toggleProjectsSubmenu, submenuTogglerProjects, toggleServicesSubmenu, submenuTogglerServices);
    });

    submenuTogglerCourses.addEventListener('click', ()=>{
      toggleActiveClass(toggleCoursesSubmenu, submenuTogglerCourses);
      // removeActiveClass(toggleAboutSubmenu, submenuTogglerAbout, toggleProjectsSubmenu, submenuTogglerProjects, toggleServicesSubmenu, submenuTogglerServices);

    });

    submenuTogglerProjects.addEventListener('click', ()=>{
      toggleActiveClass(toggleProjectsSubmenu, submenuTogglerProjects);
      // removeActiveClass(toggleCoursesSubmenu, submenuTogglerCourses, toggleAboutSubmenu, submenuTogglerAbout, toggleServicesSubmenu, submenuTogglerServices);

    });

    submenuTogglerServices.addEventListener('click', ()=>{
      toggleActiveClass(toggleServicesSubmenu, submenuTogglerServices);
      // removeActiveClass(toggleCoursesSubmenu, submenuTogglerCourses, toggleProjectsSubmenu, submenuTogglerProjects, toggleAboutSubmenu, submenuTogglerAbout);

    });

    // function for active class toggle
    function toggleActiveClass (clicked, target) {
      clicked.classList.toggle('active');
      target.classList.toggle('active'); 
      
    }
    // function for active class remove
    function removeActiveClass (menu1, menu2, menu3, menu4, menu5, menu6) {
      menu1.classList.remove('active');
      menu2.classList.remove('active');
      menu3.classList.remove('active');
      menu4.classList.remove('active');
      menu5.classList.remove('active');
      menu6.classList.remove('active');
      
    }

    //   js code for toggle menu links
      menuToggler.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggler.classList.toggle("active");
      });


// owl carousel js code
      $(".owl-carousel-one").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dotsEach: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
      });
      $(".owl-carousel-two").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
      $(".owl-carousel-three").owlCarousel({
        slideSpeed: 4000,
        paginationSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        autoplayHoverPause: true,
        loop: true,
        margin: 15,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
      });