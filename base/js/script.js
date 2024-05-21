function handleLogin(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Lógica de verificação do login
    // Como exemplo, está sendo redirecionado para a página de cadastro

    window.location.href = 'home.html'; // Redirecionamento
}

const endpoint ="https://localhost:7117/api/Auth/login"; 

fetch(endpoint, { 
    method: "POST",
    body: JSON.stringify({
        Email: 1,
        Password: "Fix my bugs"
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log(error));


