// Variáveis
var currentBid = 0;
var bidInput = document.getElementById("bidInput");
var bidAmount = document.getElementById("bidAmount");
var bidButton = document.getElementById("bidButton");

// Função para fazer um lance
function placeBid() {
  var bidValue = parseInt(bidInput.value);

  if (bidValue > currentBid) {
    currentBid = bidValue;
    bidAmount.textContent = currentBid;
    bidInput.value = "";
  } else {
    alert("O valor do lance deve ser maior que o lance atual.");
  }
}

// Evento de clique no botão de lance
bidButton.addEventListener("click", placeBid);