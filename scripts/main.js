document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active")

      // Toggle hamburger to X
      const spans = this.querySelectorAll("span")
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      navLinks &&
      navLinks.classList.contains("active") &&
      !event.target.closest("nav") &&
      !event.target.closest(".mobile-menu-btn")
    ) {
      navLinks.classList.remove("active")

      // Reset hamburger icon
      const spans = document.querySelectorAll(".mobile-menu-btn span")
      spans.forEach((span) => {
        span.style.transform = "none"
        span.style.opacity = "1"
      })
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")

          // Reset hamburger icon
          const spans = document.querySelectorAll(".mobile-menu-btn span")
          spans.forEach((span) => {
            span.style.transform = "none"
            span.style.opacity = "1"
          })
        }
      }
    })
  })

  // Add scroll animation for elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".skill-card, .project-card, .seminar-card, .innovation-card, .hackathon-card",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  const elementsToAnimate = document.querySelectorAll(
    ".skill-card, .project-card, .seminar-card, .innovation-card, .hackathon-card",
  )
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)

  // Active link highlighting based on current page
  const currentPage = window.location.pathname.split("/").pop()
  const navLinksItems = document.querySelectorAll(".nav-links a")

  navLinksItems.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})

