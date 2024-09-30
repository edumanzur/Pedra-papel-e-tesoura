var jogadas = ["✌️", "✊", "✋", "✌️", "✊"];
var empate = 0;
var vitoria = 0;
var derrota = 0;
var resultDoJogo = document.getElementById('resultado');
var statusElement = document.getElementById('status');
var pedraButton = document.getElementById('pedra');
var papelButton = document.getElementById('papel');
var tesouraButton = document.getElementById('tesoura');
pedraButton.addEventListener("click", function () {
    jogar(1);
});
papelButton.addEventListener("click", function () {
    jogar(2);
});
tesouraButton.addEventListener("click", function () {
    jogar(3);
});
function jogar(escolha) {
    var compMove = jogadas[Math.floor((Math.random()) * 3) + 1];
    if (jogadas[escolha + 1] === compMove) {
        derrota++;
    }
    else if (jogadas[escolha - 1] === compMove) {
        vitoria++;
    }
    else {
        empate++;
    }
    var resultado = "Voc\u00EA escolheu ".concat(jogadas[escolha], " O computador escolheu ").concat(compMove);
    resultDoJogo.textContent = resultado;
    var status = "Vitorias = ".concat(vitoria, " Derrotas = ").concat(derrota, " Empates = ").concat(empate);
    statusElement.textContent = status;
}