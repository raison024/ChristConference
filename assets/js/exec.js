const execMembers = [
  {
    name: "Dr (Fr.) Joseph CC",
    role: "Vice Chancellor",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr (Fr.) Viju PD",
    role: "Pro-Vice Chancellor",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr Anil Joseph Pinto",
    role: "Registrar",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr TV Joseph",
    role: "Dean of Sciences",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr Deepthi Das",
    role: "Associate Dean of Sciences",
    organization: "CHRIST (Deemed to be University)",
  },
];

const genMembers = [
  {
    name: "Dr Ashok Immanuel",
    role: "Professor & Head",
    organization: "CHRIST (Deemed to be University)",
  },
];

const conMembers = [
  {
    name: "Dr Chandra J",
    role: "Professor",
    organization: "CHRIST (Deemed to be University)",
  },
];

const orgChair = [
  {
    name: "Dr Rajesh Kanna R",
    role: "Assistant Professor",
    organization: "CHRIST (Deemed to be University)",
  },
];

const orgSec = [
  {
    name: "Dr Thirunavukkarasu V",
    role: "Assistant Professor",
    organization: "CHRIST (Deemed to be University)",
  },
];

const convenerCom = [
  {
    name: "Dr  Kirubanand VB",
    role: "Associate Professor",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr  Sagaya Aurelia",
    role: "Associate Professor",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr  Somnath Sinha",
    role: "Assistant Professor",
    organization: "CHRIST (Deemed to be University)",
  },
  {
    name: "Dr  Resmi KR",
    role: "Assistant Professor",
    organization: "CHRIST (Deemed to be University)",
  },
];

const advCom = [
  {
    name: "Dr. Ajay K Sharma",
    role: "Vice-Chancellor",
    organization: "IKG Punjab Technical University, Punjab, India",
  },
  {
    name: "Dr. Arockiasamy Soosaimanickam",
    role: "University of Nizwa",
    organization: "Sultanate of Oman",
  },
  {
    name: "Dr. Rajkumar Buyya",
    role: "Redmond Barry Distinguished Professor",
    organization: "The University of Melbourne, Australia",
  },
  {
    name: "Dr. Jose Orlando Gomes",
    role: "Professor",
    organization: "Federal University, Brazil",
  },
  {
    name: "Dr. Richmond Adebiaye",
    role: "University of South Carolina Upstate",
    organization: "Spartanburg, USA",
  },
  {
    name: "Dr. John Digby Haynes",
    role: "Honorary Professor",
    organization: "The University of Sydney, Australia",
  },
  {
    name: "Dr. Subhash Chandra Yadav",
    role: "Central University",
    organization: "Jharkhand, India",
  },
  {
    name: "Dr. Rajeev Srivastava",
    role: "Professor",
    organization: "Indian Institute of Technology, Varanasi, India",
  },
  {
    name: "Dr. Abhijit Das",
    role: "Professor",
    organization: "Indian Institute of Technology, West Bengal, India",
  },
  {
    name: "Dr. Muralidhara B L",
    role: "Professor",
    organization: "Bangalore University, Bengaluru, India",
  },
  {
    name: "Dr. K K Shukla",
    role: "Professor",
    organization: "Indian Institute of Technology (BHU), Varanasi, India",
  },
  {
    name: "Dr. Hanumanthappa M",
    role: "Professor",
    organization: "Bangalore University, Bengaluru, India",
  },
  {
    name: "Dr. R. Thamaraiselvi",
    role: "Associate Professor and Head",
    organization: "Bishop Heber College, Trichy, India",
  },
  {
    name: "Dr. Rupa G. Mehta",
    role: "Sardar Vallabhbhai National Institute of Technology",
    organization: "Gujarat, India",
  },
  {
    name: "Dr. N Rukma Rekha",
    role: "University of Hyderabad",
    organization: "Hyderabad, India",
  },
];

function createCard(member) {
  const card = document.createElement("div");
  card.className = "card";
  card.style = "margin: 7px;";

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

function addCardsToPage() {
  const execContainer = document.getElementById("orgContainer");
  const genContainer = document.getElementById("genContainer");
  const conContainer = document.getElementById("conContainer");
  const orgchair = document.getElementById("orgchair");
  const orgsec = document.getElementById("orgsec");
  const convener = document.getElementById("convener");
  const advContainer = document.getElementById("advContainer");

  execMembers.forEach((member) => {
    const card = createCard(member);
    execContainer.appendChild(card);
  });

  genMembers.forEach((member) => {
    const card = createCard(member);
    genContainer.appendChild(card);
  });

  conMembers.forEach((member) => {
    const card = createCard(member);
    conContainer.appendChild(card);
  });

  orgChair.forEach((member) => {
    const card = createCard(member);
    orgchair.appendChild(card);
  });

  orgSec.forEach((member) => {
    const card = createCard(member);
    orgsec.appendChild(card);
  });

  convenerCom.forEach((member) => {
    const card = createCard(member);
    convener.appendChild(card);
  });

  advCom.forEach((member) => {
    const card = createCard(member);
    advContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", addCardsToPage);
