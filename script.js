// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add "Under Construction" GIF to random sections
  const sections = document.querySelectorAll("section")
  if (sections.length > 0) {
    // Select a random section (excluding the first one)
    const randomIndex = Math.floor(Math.random() * (sections.length - 1)) + 1
    const randomSection = sections[randomIndex]

    // Create the "Under Construction" element
    const constructionElement = document.createElement("div")
    constructionElement.className = "under-construction"
    constructionElement.innerHTML = `
            <div style="text-align: center; margin: 20px 0;">
                <div style="display: inline-block; padding: 10px; border: 2px dashed #FF0000; background-color: #FFFF00;">
                    <span style="font-weight: bold; color: #FF0000; font-size: 1.2rem;">UNDER CONSTRUCTION</span>
                    <div style="margin-top: 5px;">
                        <span style="font-size: 0.8rem;">Please check back soon!</span>
                    </div>
                </div>
            </div>
        `

    // Add it to the random section
    randomSection.appendChild(constructionElement)
  }

  // Add "last updated" date to footer
  const footerElement = document.querySelector("footer")
  if (footerElement) {
    const lastUpdatedElement = document.createElement("p")
    lastUpdatedElement.style.fontSize = "0.8rem"
    lastUpdatedElement.style.marginTop = "5px"

    // Get current date in old-school format
    const now = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`

    lastUpdatedElement.textContent = `Last updated: ${formattedDate}`
    footerElement.appendChild(lastUpdatedElement)
  }

  // Add hover effect to buttons
  const buttons = document.querySelectorAll(".retro-button")
  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)"
    })

    button.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)"
    })
  })
})
