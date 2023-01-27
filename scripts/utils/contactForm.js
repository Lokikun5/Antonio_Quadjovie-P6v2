function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  document.getElementById('firstName').focus();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
// Accessibilité open modal
document.querySelector(".contact_button").addEventListener('keyup',(ets) =>{
  if (ets.key === "Enter") {
    displayModal();
  }
})
// Accessibilité close modal
document.querySelector("#closeMod").addEventListener('keyup',(et) =>{
  if (et.key === "Enter") {
    closeModal();
  }
})

const formContact = document.getElementById("form-contact");

let infoContact = {
  prenon: null,
  nom: null,
  email: null,
  message: null,
};

formContact.addEventListener("input", (e) => {
  if (e.target.id === "prenon") {
    infoContact.prenon = e.target.value;
  } else if (e.target.id === "nom") {
    infoContact.nom = e.target.value;
  } else if (e.target.id === "email") {
    infoContact.email = e.target.value;
  } else if (e.target.id === "message") {
    infoContact.message = e.target.value;
  }
  // console.log(infoContact);
});

function deleteForm() {
  const getInput = (formContact) => {
    return document.getElementById(formContact);
  };
  const nameInputForm = (formContact) => {
    getInput(formContact).value = "";
  };
  nameInputForm("prenon");
  nameInputForm("nom");
  nameInputForm("message");
  nameInputForm("email");
}

function sendMsg() {
  const btnContact = document.getElementById("btn-envoyer");
  btnContact.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(infoContact);
    deleteForm();
    closeModal();
  });
}
sendMsg();





