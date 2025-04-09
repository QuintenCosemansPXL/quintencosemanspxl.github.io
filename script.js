document.addEventListener("DOMContentLoaded", () => {
  // Set last login date
  const now = new Date()
  document.getElementById("last-login").textContent = now.toUTCString()

  // Get command input element
  const commandInput = document.getElementById("command-input")
  const output = document.getElementById("output")
  const promptSpan = document.querySelector(".prompt")

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
                    <p>Available commands:</p>
                    <ul class="command-list">
                        <li><span class="command">cd seminars</span> - View seminars</li>
                        <li><span class="command">cd innovation</span> - Explore innovation routes</li>
                        <li><span class="command">cd hackathon</span> - See hackathon projects</li>
                        <li><span class="command">cd ~</span> - Return to homepage</li>
                        <li><span class="command">clear</span> - Clear the terminal</li>
                        <li><span class="command">ls</span> - List contents of current directory</li>
                        <li><span class="command">whoami</span> - Display user information</li>
                        <li><span class="command">date</span> - Display current date and time</li>
                    </ul>
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
        while (output.firstChild) {
          output.removeChild(output.firstChild)
        }
        return

      case "ls":
        const currentPath = window.location.pathname.split("/").pop()
        if (currentPath === "index.html" || currentPath === "") {
          responseLine.innerHTML = `
                        <p>Contents of ~:</p>
                        <ul>
                            <li><span style="color: #27c93f;">seminars/</span></li>
                            <li><span style="color: #27c93f;">innovation/</span></li>
                            <li><span style="color: #27c93f;">hackathon/</span></li>
                            <li><span style="color: #ffbd2e;">about_me.txt</span></li>
                            <li><span style="color: #ffbd2e;">skills.txt</span></li>
                        </ul>
                    `
        } else if (currentPath === "seminars.html") {
          responseLine.innerHTML = `
                        <p>Contents of ~/seminars:</p>
                        <ul>
                            <li><span style="color: #ffbd2e;">web_development_2023.txt</span></li>
                            <li><span style="color: #ffbd2e;">ai_machine_learning.txt</span></li>
                            <li><span style="color: #ffbd2e;">cybersecurity_basics.txt</span></li>
                        </ul>
                    `
        } else if (currentPath === "innovation.html") {
          responseLine.innerHTML = `
                        <p>Contents of ~/innovation:</p>
                        <ul>
                            <li><span style="color: #27c93f;">ai_powered_education/</span></li>
                            <li><span style="color: #27c93f;">sustainable_tech/</span></li>
                            <li><span style="color: #27c93f;">blockchain_for_good/</span></li>
                        </ul>
                    `
        } else if (currentPath === "hackathon.html") {
          responseLine.innerHTML = `
                        <p>Contents of ~/hackathon:</p>
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
                    <p>user</p>
                    <p>Role: Portfolio Owner</p>
                    <p>Status: Available for hire</p>
                `
        break

      case "date":
        responseLine.innerHTML = `<p>${new Date().toUTCString()}</p>`
        break

      default:
        if (command === "") {
          return
        }
        responseLine.innerHTML = `<p>Command not found: ${command}. Type 'help' to see available commands.</p>`
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
