/****** Accordion lavet af Chat GPT ********/
// Find alle accordion-elementer
const accordionItems = document.querySelectorAll(".accordion-item1, .accordion-item2, .accordion-item3");

// Tilføj klikhåndterer til hver accordion-item
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // Skjul alle accordion-indholdselementer
    accordionItems.forEach((accItem) => {
      const content = accItem.querySelector(".accordion-content");
      if (accItem !== item) {
        content.style.display = "none";
      }
    });

    // Skift visning af det aktuelle accordion-indhold
    const content = item.querySelector(".accordion-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
/****** Accordion lavet af Chat GPT end ********/
