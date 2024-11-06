const readButton = document.getElementById("readButton");
const card = document.querySelectorAll(".card-list .card");

readButton.addEventListener("click", () => {
  card.forEach((card, index) => {
    if (index >= 8) { // Mostra itens a partir do 9º
      card.style.display = "grid";
    }
  });
  
  readButton.style.display = "none"; // Esconde o botão após o clique
});

