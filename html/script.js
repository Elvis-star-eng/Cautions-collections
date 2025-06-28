// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Search Button Functionality
  const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      console.log(`Searching for: ${query}`);
      // In a real app, you'd filter items or redirect here
      alert(`You searched for "${query}"`);
    } else {
      alert("Please enter a search term.");
    }
  });

  // Click Event for Category Cards (you can later use this for filtering or routing)
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const title = category.querySelector("h2").textContent;
      console.log(`Navigating to: ${title}`);
      alert(`Showing results for "${title}"`);
      // Redirect or load items here if needed
    });
  });
});
// Sample product list
// Sample product list