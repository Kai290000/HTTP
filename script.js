const next = document.querySelectorAll('.btn-proximo');

next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativa')
        const proximaExplicacao = 'explicacao-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativa')
        document.getElementById(proximaExplicacao).classList.add('ativa')
    })
})

const form = document.getElementById("formRequisicao");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const metodo = document.getElementById("metodo").value;
    const url = document.getElementById("url").value;
    const dados = document.getElementById("parametros").value;

    const requisicao = 
    "Método: " + metodo + "\n" +
    "URL: " + url + "\n" +
    "Dados: " + (dados || "nenhum");

    const resultado = document.getElementById("resultado");
    resultado.textContent = requisicao;
});