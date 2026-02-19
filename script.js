// VALIDAÇÃO DO FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(event) {

    event.preventDefault(); // Impede envio padrão

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let msg = document.getElementById("msg");

    // Expressão regular para validar e-mail
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nome === "" || email === "" || mensagem === "") {
        msg.innerHTML = "Preencha todos os campos!";
        msg.style.color = "red";
        return;
    }

    if(!emailValido.test(email)) {
        msg.innerHTML = "Digite um e-mail válido!";
        msg.style.color = "red";
        return;
    }

    // Simulação de envio
    msg.innerHTML = "Mensagem enviada com sucesso!";
    msg.style.color = "green";

    document.getElementById("formContato").reset();
});

// FUNÇÃO TEMA CLARO/ESCURO
function alternarTema() {
    document.body.classList.toggle("dark");
}

