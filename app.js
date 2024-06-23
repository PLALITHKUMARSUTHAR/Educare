
  const toggleButton = document.getElementById("dayNightToggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("nighttime"); // Toggle class on click

    if (body.classList.contains("nighttime")) {
      toggleButton.textContent = "Switch to Day";
    } else {
      toggleButton.textContent = "Switch to Night";
    }
  });


// **Explanation:**

// - **CSS Fix:** We've removed the redundant `body` selector before the `nighttime` class in the CSS. Now, the styles within the `nighttime` class directly apply to the body element when that class is present. This ensures the background color transitions to dark black (`#000`) during the night mode.

// With these changes, clicking the toggle button will provide the desired smooth transition to a dark black background and white text for night mode.
