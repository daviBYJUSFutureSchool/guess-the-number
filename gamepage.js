// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
// até acerto    
  var x = document.getElementById("guessField").Value;
// função para o número enviado pelo usuário

if(x == y)
{
    alert("PARABÉNS!!!"+playername+", você acertou em"
    + guess + "tentativa(s)! ");
    guess= 1;

}
else if(x > y) 
{
guess++;
alert("Opa, resposta errada!! Tente um número menor")
}
else{
  guess++;
alert("Opa, resposta errada!! Tente um número maior")
}
function Playagain(){
y = Math.floor(Math.floor() * 10 + 1);
}