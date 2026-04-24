// ========== GLOBAL HEADER ==========
const header = `
<header class="w-full fixed-top">
 <nav class="navbar navbar-main navbar-expand-lg">

    <div class="container-fluid">

      <!-- LOGO -->
      <a class="navbar-brand" href="index.html">
        <div class="logo-icon">
          <img src="images/colored-logo[1].png" alt="Compass Housing Society" width="40" height="40">
        </div>
        <div class="brand-text">
          <span class="brand-name">Compass Housing <br>Society</span>
        </div>
      </a>

      <!-- MOBILE REGISTER BUTTON (Only visible on mobile) -->
      <div class="mobile-register-container d-lg-none">
     <a href="Register.html" 
   class="btn btn-outline-light px-4 py-2 d-inline-flex align-items-center justify-content-center">
  Register
</a>

      </div>

      <!-- MOBILE TOGGLER (Only visible on mobile) -->
      <button class="navbar-toggler-custom d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <div class="toggler-icon"></div>
      </button>

      <!-- NAVBAR CONTENT -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto">

          <li class="nav-item dropdown">
            <a class="nav-link-main" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home <span class="dropdown-icon-model"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="index.html">Home </a></li>
              <li><a class="dropdown-item" href="home2.html">Home Details</a></li>
            </ul>
          </li>
  <li class="nav-item">
            <a class="nav-link-main" href="aboutus.html">About</a>
          </li>

           <li class="nav-item dropdown">
            <a class="nav-link-main" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services <span class="dropdown-icon-model"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="services.html">Services</a></li>
              <li><a class="dropdown-item" href="servicesdetails.html">Service Details</a></li>
            </ul>
          </li>
         <li class="nav-item">
            <a class="nav-link-main" href="blog.html">Blog</a>
          </li>
 <li class="nav-item">
            <a class="nav-link-main" href="blogdetails.html">BlogDetails</a>
          </li>
         
 <li class="nav-item dropdown">
            <a class="nav-link-main" href="contactus.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact<span class="dropdown-icon-model"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="contactus.html">Contact Us</a></li>
              <li><a class="dropdown-item" href="errorpage.html">404 error</a></li>
            </ul>
          </li>

  <!-- MOBILE THEME TOGGLE (Only visible on mobile) -->
        <div class="mobile-theme-toggle d-lg-none">
  <button class="themeToggle btn border border-white text-white d-flex align-items-center gap-2">
  <i class="themeIcon bi bi-moon-fill text-white"></i>
  <span class="themeText text-white">Dark</span>
</button>
        </div>
        </ul>

        <!-- DESKTOP RIGHT SECTION (Only visible on desktop) -->
        <div class="navbar-right-section d-none d-lg-flex">
    <button class="themeToggle btn border border-white text-white d-flex align-items-center gap-2">
  <i class="themeIcon bi bi-moon-fill text-white"></i>
  <span class="themeText text-white">Dark</span>
</button>
       <a href="Register.html" 
   class="btn btn-outline-light px-4 py-2 d-inline-flex align-items-center justify-content-center">
  Register
</a>

        </div>

      

      </div>

    </div>
  </nav>
</header>
`;

// Insert header immediately when script loads
document.getElementById("site-header").innerHTML = header;

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function () {
  // Initialize theme
  initializeTheme();

  // Initialize mobile menu functionality
  initializeMobileMenu();

  // Initialize Bootstrap dropdowns
  initializeBootstrapDropdowns();
});



function initializeTheme() {
  const htmlEl = document.documentElement;

  // select ALL buttons (mobile + desktop)
  const toggles = document.querySelectorAll(".themeToggle");
  const icons = document.querySelectorAll(".themeIcon");
  const texts = document.querySelectorAll(".themeText");

  const savedTheme = localStorage.getItem("theme") || "light";
  htmlEl.setAttribute("data-theme", savedTheme);

  function updateUI(theme) {
    const isDark = theme === "dark";

    icons.forEach(icon => {
      icon.classList.remove("bi-moon-fill", "bi-sun-fill");
      icon.classList.add(isDark ? "bi-sun-fill" : "bi-moon-fill");
    });

    texts.forEach(text => {
      text.innerText = isDark ? "Light" : "Dark";
    });
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateUI(newTheme);
  }

  toggles.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  updateUI(savedTheme);
}

/* ===============================
   BOOTSTRAP DROPDOWNS INITIALIZATION
================================ */
function initializeBootstrapDropdowns() {
  // Initialize Bootstrap dropdowns
  const dropdowns = document.querySelectorAll('.dropdown-toggle, [data-bs-toggle="dropdown"]');

  dropdowns.forEach(dropdown => {
    // Bootstrap will handle these automatically
  });

  // Update custom arrow when Bootstrap dropdowns open/close
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('show.bs.dropdown', function () {
      const arrow = this.querySelector('.dropdown-icon-model');
      if (arrow) {
        arrow.style.transform = 'rotate(180deg)';
      }
    });

    dropdown.addEventListener('hide.bs.dropdown', function () {
      const arrow = this.querySelector('.dropdown-icon-model');
      if (arrow) {
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });
}

/* ===============================
   MOBILE MENU FUNCTIONALITY
================================ */
function initializeMobileMenu() {
  const toggler = document.querySelector(".navbar-toggler-custom");
  const navbarCollapse = document.getElementById("navbarContent");

  if (toggler && navbarCollapse) {
    // Bootstrap collapse events for hamburger to X animation
    navbarCollapse.addEventListener('show.bs.collapse', function () {
      toggler.classList.add("active");
      toggler.setAttribute("aria-expanded", "true");
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      toggler.classList.remove("active");
      toggler.setAttribute("aria-expanded", "false");
    });

    // Handle mobile dropdowns
    handleMobileDropdowns();

    // Close menu when clicking outside on mobile
    document.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        if (!e.target.closest(".navbar-main") && !e.target.closest(".navbar-collapse")) {
          // Close mobile menu using Bootstrap
          if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }

          // Close all dropdowns
          document.querySelectorAll(".nav-item.dropdown .dropdown-menu.show").forEach(menu => {
            menu.classList.remove("show");
          });

          document.querySelectorAll(".nav-item.dropdown.show").forEach(item => {
            item.classList.remove("show");
          });
        }
      }
    });

    // Close dropdowns when clicking a link
    document.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
          // Close mobile menu
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();

          // Close dropdowns
          document.querySelectorAll(".nav-item.dropdown .dropdown-menu.show").forEach(menu => {
            menu.classList.remove("show");
          });

          document.querySelectorAll(".nav-item.dropdown.show").forEach(item => {
            item.classList.remove("show");
          });
        }
      });
    });
  }
}

/* ===============================
   MOBILE DROPDOWNS HANDLING
================================ */
function handleMobileDropdowns() {
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll('.nav-item.dropdown > .nav-link-main');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();

        const parent = this.parentElement;
        const dropdownMenu = this.nextElementSibling;
        const arrow = this.querySelector('.dropdown-icon-model');

        // Toggle current dropdown
        parent.classList.toggle('show');
        dropdownMenu.classList.toggle('show');

        // Rotate arrow
        if (arrow) {
          if (parent.classList.contains('show')) {
            arrow.style.transform = 'rotate(180deg)';
          } else {
            arrow.style.transform = 'rotate(0deg)';
          }
        }

        // Close other dropdowns
        document.querySelectorAll('.nav-item.dropdown').forEach(other => {
          if (other !== parent) {
            other.classList.remove('show');
            const otherMenu = other.querySelector('.dropdown-menu');
            if (otherMenu) otherMenu.classList.remove('show');

            // Reset other arrows
            const otherArrow = other.querySelector('.dropdown-icon-model');
            if (otherArrow) {
              otherArrow.style.transform = 'rotate(0deg)';
            }
          }
        });
      }
    });
  });

  // Close dropdowns when clicking outside on mobile
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 991) {
      if (!e.target.closest('.nav-item.dropdown')) {
        document.querySelectorAll('.nav-item.dropdown.show').forEach(dropdown => {
          dropdown.classList.remove('show');
          const menu = dropdown.querySelector('.dropdown-menu');
          if (menu) menu.classList.remove('show');

          // Reset arrow
          const arrow = dropdown.querySelector('.dropdown-icon-model');
          if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
          }
        });
      }
    }
  });

  // Reset on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
      // Close all mobile dropdowns when switching to desktop
      document.querySelectorAll('.nav-item.dropdown.show').forEach(dropdown => {
        dropdown.classList.remove('show');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) menu.classList.remove('show');

        // Reset arrows
        const arrow = dropdown.querySelector('.dropdown-icon-model');
        if (arrow) {
          arrow.style.transform = 'rotate(0deg)';
        }
      });

      // Close mobile menu
      const navbarCollapse = document.getElementById("navbarContent");
      const toggler = document.querySelector(".navbar-toggler-custom");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
        if (toggler) {
          toggler.classList.remove("active");
          toggler.setAttribute("aria-expanded", "false");
        }
      }
    }
  });


  
}