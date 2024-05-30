document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs li");
  const gallery = document.querySelectorAll(".images");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const category = e.target.dataset.category;
      filterImages(category);
    });
  });

  const filterImages = (category) => {
    gallery.forEach((imageDiv) => {
      if (category === "all" || imageDiv.dataset.category === category) {
        imageDiv.style.display = "flex";
      } else {
        imageDiv.style.display = "none";
      }
    });
  };

  // Initially show all images
  filterImages("all");
});
