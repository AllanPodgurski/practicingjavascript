// push para por e pop para tirar elemento da lista
//reverse ao contrário na lista
//.toString()
//join (" - ") coloca um elemento no meio dos elementos do array


/* 
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.cor)
alert(fruta.nome)


var frutas = [{nome: "maçã", cor:"vermelha"},{nome: "uva", cor:"roxo"}]
console.log(frutas[1].cor)
alert(frutas[0].nome)

var d = new Date();
alert(d)
alert(d.getMonth())


function clicou() {
    //document.getElementById("thanks").innerHTML = "Obrigado por clicar"
    //alert('Obrigado por clicar')
}

function redirecionar() {
    window.open("google.com")
    window.location.href = "google.com"
}
*/

function trocar(elemento){ 
    // document.getElementById("mousemove").innerHTML = "obrigado "
    //alert('trocar texto')
    elemento.innerHTML = 'Passe o mouse'
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse"
}

function load(){
    alert('pagina carregada')
}

function change(elemento){
    console.log(elemento.value)
}