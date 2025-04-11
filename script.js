document.addEventListener("DOMContentLoaded", () => {
  // Set last login date
  const now = new Date()
  now.setHours(now.getHours() + 2)
  document.getElementById("last-login").textContent = now.toUTCString().replace("GMT", "GMT+2")

  // Get command input element
  const commandInput = document.getElementById("command-input")
  const output = document.getElementById("output")
  const promptSpan = document.querySelector(".prompt")
  const terminalContent = document.querySelector(".terminal-content")
  const terminal = document.querySelector(".terminal")

  // Ensure we start at the top of the terminal
  terminalContent.scrollTop = 0

  // Set up terminal window buttons
  const closeButton = document.querySelector(".terminal-button.close")
  const minimizeButton = document.querySelector(".terminal-button.minimize")
  const maximizeButton = document.querySelector(".terminal-button.maximize")
  const extraButton = document.querySelector(".terminal-button.extra")

  // Close button - show popup
  closeButton.addEventListener("click", () => {
    alert("Just close the site ;)")
  })

  // Extra button - open in new tab
  extraButton.addEventListener("click", () => {
    window.open(window.location.href, '_blank')
  })

  // Minimize button - return to original size
  minimizeButton.addEventListener("click", () => {
    terminal.style.width = "90%"
    terminal.style.height = "85vh"
    terminal.style.maxWidth = "1000px"
  })

  // Maximize button - expand to full viewport
  maximizeButton.addEventListener("click", () => {
    terminal.style.width = "95%"
    terminal.style.height = "95vh"
    terminal.style.maxWidth = "none"
  })

  // Set focus to command input
  commandInput.focus()

  // Keep focus on command input when clicking anywhere in the terminal
  document.querySelector(".terminal").addEventListener("click", (e) => {
    // Don't focus if clicking on a link
    if (!e.target.closest("a")) {
      commandInput.focus()
    }
  })

  // Handle command input
  commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = commandInput.value.trim().toLowerCase()

      // Add command to output
      const commandLine = document.createElement("div")
      commandLine.className = "line"
      commandLine.innerHTML = `<span class="prompt">${promptSpan.textContent}</span> ${command}`
      output.appendChild(commandLine)

      // Process command
      processCommand(command)

      // Clear input
      commandInput.value = ""

      // Scroll to bottom
      document.querySelector(".terminal-content").scrollTop = document.querySelector(".terminal-content").scrollHeight
    }
  })

  // Process commands
  function processCommand(command) {
    const responseLine = document.createElement("div")
    responseLine.className = "line"

    switch (command) {
      case "help":
        responseLine.innerHTML = `
                    
                    <ul class="command-list">
                        <p style="color: #27c93f;">Available commands:</p>
                        <li style="color: #27c93f;"><span class="command">cd seminars</span> - View seminars</li>
                        <li style="color: #27c93f;"><span class="command">cd innovation</span> - Explore innovation routes</li>
                        <li style="color: #27c93f;"><span class="command">cd hackathon</span> - See hackathon projects</li>
                        <li style="color: #27c93f;"><span class="command">cd ~</span> - Return to homepage</li>
                        <li style="color: #27c93f;"><span class="command">clear</span> - Clear the terminal</li>
                        <li style="color: #27c93f;"><span class="command">ls</span> - List contents of current directory</li>
                        <li style="color: #27c93f;"><span class="command">whoami</span> - Display my information</li>
                        <li style="color: #27c93f;"><span class="command">date</span> - Display current date and time</li>
                    </ul>
                `
        break

      case "cat about_me.txt":
        responseLine.innerHTML = `
                    <ul>
                        <p style="color: #27c93f;">Hello! I'm a developer passionate about creating innovative solutions.</p>
                        <p style="color: #27c93f;">This portfolio showcases my projects, seminars, and hackathon experiences.</p>
                        <p style="color: #27c93f;">Navigate through the sections using the commands below.</p>
                    </ul>
                `
        break

      case "cat profile_pic.jpg":
        responseLine.innerHTML = `
        <div class="terminal-output-image">
          <img src="/images/image.png" alt="Profile Picture" style="max-width: 300px; margin: 10px 0; display: block;">
        </div>
          `
        break
        
      case "cd seminars":
        window.location.href = "seminars.html"
        return

      case "cd innovation":
        window.location.href = "innovation.html"
        return

      case "cd hackathon":
        window.location.href = "hackathon.html"
        return

      case "cd ~":
        window.location.href = "index.html"
        return

      case "clear":
        // Clear the output
        while (output.firstChild) {
          output.removeChild(output.firstChild)
        }
        
        // Hide the prompt line during the animation
        const promptLine = document.querySelector(".prompt-line")
        promptLine.style.display = "none"
        const promptElement = document.createElement("div")
        promptElement.className = "line"
        promptElement.innerHTML = "<p>quintenc@portfolio:~$ <span class='cursor'>|</span></p>"
        // Add style for the blinking cursor
        const style = document.createElement('style')
        style.textContent = `
          .cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `
        document.head.appendChild(style)
        output.appendChild(promptElement)
        // Display first part of message after 700ms
        setTimeout(() => {
          const messageElement = document.createElement("div")
          messageElement.className = "line"
          messageElement.innerHTML = "<ul><p style='color:rgb(255, 0, 0);'>You just destroyed my website...</p></ul>"
          output.appendChild(messageElement)
          
          setTimeout(() => {
            messageElement.innerHTML = "<ul><p style='color: #27c93f;'>You just destroyed my website... sike</p></ul>"
            
            setTimeout(() => {
              window.location.href = "index.html"
            }, 1100)
          }, 2500)
        }, 2000)
        
        return

      case "ls":
        const currentPath = window.location.pathname.split("/").pop()
        if (currentPath === "index.html" || currentPath === "") {
          responseLine.innerHTML = `      
                        <ul>
                            <li><span style="color: #27c93f;">seminars/</span></li>
                            <li><span style="color: #27c93f;">innovation/</span></li>
                            <li><span style="color: #27c93f;">hackathon/</span></li>
                            <li><span style="color: #ffbd2e;">about_me.txt</span></li>
                            <li><span style="color: #ffbd2e;">profile_pic.jpg</span></li>
                        </ul>
                    `
        } else if (currentPath === "seminars.html") {
          responseLine.innerHTML = `
                        <ul>
                            <li><span style="color: #ffbd2e;">web_development_2023.txt</span></li>
                            <li><span style="color: #ffbd2e;">ai_machine_learning.txt</span></li>
                            <li><span style="color: #ffbd2e;">cybersecurity_basics.txt</span></li>
                        </ul>
                    `
        } else if (currentPath === "innovation.html") {
          responseLine.innerHTML = `
                        <ul>
                            <li><span style="color: #27c93f;">ai_powered_education/</span></li>
                            <li><span style="color: #27c93f;">sustainable_tech/</span></li>
                            <li><span style="color: #27c93f;">blockchain_for_good/</span></li>
                        </ul>
                    `
        } else if (currentPath === "hackathon.html") {
          responseLine.innerHTML = `
                        <ul>
                            <li><span style="color: #ffbd2e;">EcoTrack.project</span></li>
                            <li><span style="color: #ffbd2e;">HealthBot.project</span></li>
                            <li><span style="color: #ffbd2e;">SecureShare.project</span></li>
                        </ul>
                    `
        }
        break

      case "whoami":
        responseLine.innerHTML = `
                      <ul>
                          <p>
                            <img src="/images/email.png" style="height: 16px; vertical-align: middle;">: <a href="mailto:quinten.cosemans@student.pxl.be" style="color: inherit; text-decoration: none;"> quinten.cosemans@student.pxl.be</a>
                          </p>
                          <p>
                            <img src="/images/linkedin.png" style="height: 16px; vertical-align: middle;">: <a href="https://www.linkedin.com/in/quintencosemans" target="_blank" style="color: inherit; text-decoration: none;">quintencosemans</a>
                          </p>
                          <p>
                            <img src="/images/github.png" style="height: 16px; vertical-align: middle;">: <a href="https://github.com/QuintenCosemansPXL" target="_blank" style="color: inherit; text-decoration: none;">QuintenCosemansPXL</a>
                          </p>
                          <p>
                            <img src="/images/cv-better.png" style="height: 16px; vertical-align: middle;">: <a href="/Resume_QuintenCosemans.pdf" target="_blank" style="color: inherit; text-decoration: none;">Resume</a>
                          </p>                          
                      </ul>
                  `
        break

      case "date":
        const date = new Date()
        date.setHours(date.getHours() + 2)
        responseLine.innerHTML = `
                      <ul>
                          <p style="color: #27c93f;" >${date.toUTCString().replace('GMT', 'GMT+2')}</p>
                      </ul>
                  `        
        break

      default:
        if (command === "") {
          return
        }
        responseLine.innerHTML = `
                      <ul>
                          <p style="color: #27c93f;" >Command not found: '${command}'</p>
                          <p style="color: #27c93f;" >Type 'help' to see available commands.</p>
                      </ul>
                  `
    }

    output.appendChild(responseLine)
  }

  // Add click event listeners to command spans
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("command")) {
      const command = event.target.textContent
      // Execute the command directly
      const commandLine = document.createElement("div")
      commandLine.className = "line"
      commandLine.innerHTML = `<span class="prompt">${promptSpan.textContent}</span> ${command}`
      output.appendChild(commandLine)

      processCommand(command)

      // Scroll to bottom
      document.querySelector(".terminal-content").scrollTop = document.querySelector(".terminal-content").scrollHeight
    }
  })

  // Add typing animation to the terminal
  function typeWriter(element, text, i = 0, speed = 50) {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(() => typeWriter(element, text, i, speed), speed)
    }
  }

  // Initialize typing effect for welcome message
  const welcomeElement = document.querySelector(".line:first-child")
  if (welcomeElement) {
    const welcomeText = welcomeElement.textContent
    welcomeElement.textContent = ""
    typeWriter(welcomeElement, welcomeText)
  }
})
