// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // File item click handlers
  const fileItems = document.querySelectorAll(".file-item")
  const filePreview = document.getElementById("file-preview")
  const previewTitle = document.querySelector(".preview-title")
  const previewContent = document.querySelector(".preview-content")

  fileItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Get the file name from the span inside the file item
      const fileName = item.querySelector("span").textContent

      // Update the preview title
      if (previewTitle) {
        previewTitle.textContent = fileName
      }

      // Show the file preview
      if (filePreview) {
        filePreview.style.display = "flex"
      }

      // Highlight the selected file
      fileItems.forEach((fi) => {
        fi.style.backgroundColor = ""
        fi.style.color = ""
      })
      item.style.backgroundColor = "var(--win-blue-active)"
      item.style.color = "var(--win-white)"
    })
  })

  // Close preview button
  const closePreviewBtn = document.querySelector(".close-preview")
  if (closePreviewBtn) {
    closePreviewBtn.addEventListener("click", () => {
      if (filePreview) {
        filePreview.style.display = "none"
      }

      // Remove highlight from all file items
      fileItems.forEach((fi) => {
        fi.style.backgroundColor = ""
        fi.style.color = ""
      })
    })
  }

  // Window controls functionality
  const minimizeBtn = document.querySelector('button[aria-label="Minimize"]')
  const maximizeBtn = document.querySelector('button[aria-label="Maximize"]')
  const closeBtn = document.querySelector('button[aria-label="Close"]')
  const window = document.querySelector(".window")

  if (minimizeBtn) {
    minimizeBtn.addEventListener("click", () => {
      alert("Minimize functionality would be implemented in a real application.")
    })
  }

  if (maximizeBtn) {
    maximizeBtn.addEventListener("click", () => {
      if (window) {
        if (window.style.width === "100%") {
          window.style.width = "1000px"
          window.style.height = "80vh"
          window.style.margin = "0 auto"
        } else {
          window.style.width = "100%"
          window.style.height = "100vh"
          window.style.margin = "0"
        }
      }
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (window) {
        window.style.display = "none"
        setTimeout(() => {
          window.style.display = "flex"
        }, 1000)
      }
    })
  }

  // Menu items functionality
  const menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const menuName = item.textContent
      if (menuName === "File") {
        alert("File menu options would appear here.")
      } else if (menuName === "Edit") {
        alert("Edit menu options would appear here.")
      } else if (menuName === "View") {
        alert("View menu options would appear here.")
      } else if (menuName === "Help") {
        alert("Help Warre find a gf!")
      }
    })
  })

  // Simulate Windows startup sound
  const playStartupSound = () => {
    // This would play a sound in a real application
    console.log("Windows startup sound played")
  }

  // Play startup sound when page loads
  playStartupSound()
})
