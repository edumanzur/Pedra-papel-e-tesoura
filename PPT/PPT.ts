let jogadas: string[] = ["✌️", "✊", "✋", "✌️", "✊"]


let empate: number = 0
let vitoria: number = 0
let derrota: number = 0

const resultDoJogo = document.getElementById('resultado') as HTMLElement
const statusElement = document.getElementById('status') as HTMLElement

const pedraButton = document.getElementById('pedra')as HTMLElement
const papelButton = document.getElementById('papel')as HTMLElement
const tesouraButton = document.getElementById('tesoura')as HTMLElement

pedraButton.addEventListener("click", ()=>{
    jogar(1)
})
papelButton.addEventListener("click", ()=>{
    jogar(2)
})
tesouraButton.addEventListener("click", ()=>{
    jogar(3)
})

function jogar(escolha){
    let compMove: string = jogadas[Math.floor((Math.random())*3)+1]

    if(jogadas[escolha+1] === compMove){
        derrota++;
    } else if(jogadas[escolha-1] === compMove){
        vitoria++;
    } else {
        empate++;
    }

    const resultado = `Você escolheu ${jogadas[escolha]} O computador escolheu ${compMove}`
    resultDoJogo.textContent = resultado;
    const status = `Vitorias = ${vitoria} Derrotas = ${derrota} Empates = ${empate}`
    statusElement.textContent = status;
}