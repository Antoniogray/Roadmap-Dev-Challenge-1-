const cardData = [
  {
    title: "Build Continuous Integration Pipelines with GitHub Actions",
    imageUrl: "images/image 2.png",
    description: "Learn how to set up CI pipelines using GitHub Actions.",
    link: "https://example.com/article1",
  },
  {
    title: "Introduction to Terraform",
    imageUrl: "images/image 2.png",
    description: "A beginner's guide to infrastructure as code with Terraform.",
    link: "https://example.com/article2",
  },
  // Add more card objects as needed
];

function createCard(data) {
  // Change 'cardData' to 'data'
  const card = document.createElement("div");
  card.className = "card";

  if (data.imageUrl) {
    const img = document.createElement("img");
    img.src = data.imageUrl;
    img.alt = data.title;
    card.appendChild(img);
  }

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = data.title;
  cardContent.appendChild(cardTitle);

  const cardDescription = document.createElement("p"); // Change 'description' to 'p'
  cardDescription.className = "card-description";
  cardDescription.textContent = data.description;
  cardContent.appendChild(cardDescription);

  card.appendChild(cardContent);

  const cardLink = document.createElement("a");
  cardLink.className = "card-link";
  cardLink.href = data.link;
  cardLink.textContent = "Read More";
  cardLink.target = "_blank";
  card.appendChild(cardLink);

  return card;
}

function renderCards(cards) {
  const container = document.getElementById("card-container");
  cards.forEach((data) => {
    // Change 'foreach' to 'forEach'
    const card = createCard(data);
    container.appendChild(card);
  });
}

renderCards(cardData);

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const selectors = document.querySelectorAll(".page-selector");

  // Function to update active page
  function updateActivePage(pageNumber) {
    selectors.forEach((selector) => {
      if (selector.getAttribute("data-page") === pageNumber) {
        selector.classList.add("active");
      } else {
        selector.classList.remove("active");
      }
    });
  }

  // Add event listeners to each page selector
  selectors.forEach((selector) => {
    selector.addEventListener("click", function (e) {
      e.preventDefault();
      const pageNumber = this.getAttribute("data-page");
      updateActivePage(pageNumber);
    });
  });

  // Initialize the first page as active
  updateActivePage("1");
});
