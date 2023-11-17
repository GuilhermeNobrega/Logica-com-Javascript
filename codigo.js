function preventSpaces(event) {
    // Obtém o valor atual do campo de entrada
    var currentValue = event.target.value;

    // Remove espaços em branco
    var newValue = currentValue.replace(/\s/g, '');

    // Atualiza o valor do campo de entrada sem espaços
    event.target.value = newValue;
}

function validateForm() {
    // Obter os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se os campos estão vazios
    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Faça algo com os valores dos campos após a validação
        alert("Login bem-sucedido. Username: " + username + ", Password: " + password);
    }
}
