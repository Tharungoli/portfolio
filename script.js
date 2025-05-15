document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");

  // Map hrefs to the actual sections
  const sections = {
    home: [
      document.querySelector(".header"),
      document.querySelector(".info"),
      document.querySelector("#skills"),
      document.querySelector(".pro"),
      document.querySelector(".cont")
    ],
    Education: [document.querySelector(".info")],
    skills: [document.querySelector("#skills")],
    Projects: [document.querySelector(".pro")],
    contact: [document.querySelector(".cont")]
  };

  function hideAllSections() {
    const allSections = [
      ".header",
      ".info",
      "#skills",
      ".pro",
      ".cont"
    ];
    allSections.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.style.display = "none";
    });
  }

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = link.getAttribute("href").substring(1); // Remove "#"

      if (target === "home") {
        // Show all sections
        sections.home.forEach(section => section.style.display = "block");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        hideAllSections();
        const selectedSections = sections[target];
        if (selectedSections) {
          selectedSections.forEach(section => {
            section.style.display = "block";
          });
          // Scroll to top after showing section
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    });
  });
});
