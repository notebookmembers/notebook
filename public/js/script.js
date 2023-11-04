document.addEventListener("DOMContentLoaded", function () {
  const menu_bar = document.querySelector(".side-bar .bars");
  const dropDown = document.querySelector(".dropdown");
  const dropDown_name = document.querySelector(".name");

  const sem_button = document.querySelector(".i");

  menu_bar.onclick = function () {
    dropDown.classList.toggle("open");
    dropDown_name.classList.toggle("show");
  };
  // ------------------------------------------------------------------------------dropDown---------------------------------------------
  const subjectButtons = document.querySelectorAll(".subj_btn2");
  const labButtons = document.querySelectorAll(".lab_btn2");
  const modules = document.querySelectorAll(".modules");
  const lab = document.querySelectorAll(".lab");

  function toggleDropdown(buttons, elements, otherElements) {
    buttons.forEach((button, index) => {
      let isDropdownVisible = false;

      button.addEventListener("click", () => {
        elements.forEach((el, i) => {
          const shouldToggle = i === index;

          if (shouldToggle) {
            if (!isDropdownVisible) {
              const buttonRect = button.getBoundingClientRect();
              el.style.top = buttonRect.bottom + "px";
            }

            el.classList.toggle("showup");
            isDropdownVisible = !isDropdownVisible;
          } else {
            el.classList.remove("showup");
          }
        });

        // Close any open dropdowns in the otherElements
        otherElements.forEach((el) => {
          el.classList.remove("showup");
        });
      });
    });
  }

  toggleDropdown(subjectButtons, modules, lab);
  toggleDropdown(labButtons, lab, modules);
  // ------------------------------------------------------------------------------dropDown---------------------------------------------

  const moduleLinks = document.querySelectorAll(".modules > li");
  const chapters = document.querySelectorAll(".chapters");

  moduleLinks.forEach((moduleLink, index) => {
    moduleLink.addEventListener("click", function (event) {
      chapters[index].classList.toggle("clickshow");
    });
  });
  //---------------------------sem dropdown button -------------------------------------
  const branches = document.querySelectorAll(".btn2");
  const semester = document.querySelectorAll(".sem");

  document.addEventListener("click", function (event) {
    // Check if the clicked element is not one of the .btn2 buttons
    if (!event.target.classList.contains("btn2")) {
      // Clicked outside of .btn2 buttons, remove "popup" class from all .sem elements
      semester.forEach((sem) => {
        sem.classList.remove("popup");
      });
    }
  });

  branches.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from propagating to the document
      // Toggle "popup" class on all .sem elements
      semester.forEach((sem, i) => {
        if (i === index) {
          sem.classList.toggle("popup");
        } else {
          sem.classList.remove("popup");
        }
      });
    });
  });
  // _______________________________aboout page footer____________________________________
  const currentPage = window.location.pathname;

  if (currentPage === "/about") {
    // If the current page is "about," add the "notop" class to the ".f" element
    const fElement = document.querySelector(".f");
    fElement.classList.add("notop");
  }
});

// -------------------------------------------------------------------get pagesssss----------------------------------------------------------------
