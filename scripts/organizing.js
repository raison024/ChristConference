// Sample data in the form of an array of objects
const committeeMembers = [
    { name: "Dr (Fr.) Abraham V M", role: "Vice Chancellor", organization: "CHRIST (Deemed to be University)" },
    { name: "Dr (Fr.) Abraham V M", role: "Vice Chancellor", organization: "CHRIST (Deemed to be University)" },
    { name: "Dr (Fr.) Abraham V M", role: "Vice Chancellor", organization: "CHRIST (Deemed to be University)" },
    { name: "Dr (Fr.) Abraham V M", role: "Vice Chancellor", organization: "CHRIST (Deemed to be University)" },
    { name: "Dr (Fr.) Abraham V M", role: "Vice Chancellor", organization: "CHRIST (Deemed to be University)" },
    // Add more members as needed
];

// Function to create a card element based on the data
function createCard(member) {
    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem; margin: 10px;";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = member.name;

    const subtitle = document.createElement("p");
    subtitle.className = "card-subtitle mb-2 text-muted";
    subtitle.innerHTML = `${member.role}<br>${member.organization}`;

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    card.appendChild(cardBody);

    return card;
}

// Function to add cards to the HTML document
function addCardsToPage() {
    const cardContainer = document.getElementById("orgContainer");

    // Loop through the committeeMembers array and create cards for each member
    committeeMembers.forEach(member => {
        const card = createCard(member);
        cardContainer.appendChild(card);
    });
}

// Call the function to add cards when the page is loaded
document.addEventListener("DOMContentLoaded", addCardsToPage);
