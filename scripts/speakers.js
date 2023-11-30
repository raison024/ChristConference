const speakers = [
    { name: 'Coming Soon' }
];

// Function to create a card element based on the data
function createCard(member) {
    const card = document.createElement("div");
    card.className = "card";
    card.style = "margin: 5px;";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = member.name;

    const subtitle = document.createElement("p");
    subtitle.className = "card-subtitle mb-2 text-muted";
    subtitle.innerHTML = `${member.role}<br>${member.organization}`;

    cardBody.appendChild(title);
    // cardBody.appendChild(subtitle);
    card.appendChild(cardBody);

    return card;
}

// Function to add cards to the HTML document
function addCardsToPage() {
    const speakerContainer = document.getElementById("speakerContainer");

    // Loop through the committeeMembers array and create cards for each member


    speakers.forEach(member => {
        const card = createCard(member);
        speakerContainer.appendChild(card);
    });
}

// Call the function to add cards when the page is loaded
document.addEventListener("DOMContentLoaded", addCardsToPage);
