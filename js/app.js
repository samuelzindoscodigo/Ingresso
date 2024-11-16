function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById('qtd').value); 
    let quantidadeDisponivel;

    if (ingresso === "inferior") {
        quantidadeDisponivel = parseInt(document.getElementById("qtd-inferior").textContent);
    } else if (ingresso === "superior") {
        quantidadeDisponivel = parseInt(document.getElementById("qtd-superior").textContent);
    } else if (ingresso === "pista") {
        quantidadeDisponivel = parseInt(document.getElementById("qtd-pista").textContent);
    }

   
    if (qtd > quantidadeDisponivel) {
        alert('Quantidade de ingressos indisponível');
    } else {
        let novaQuantidade = quantidadeDisponivel - qtd;
        if (ingresso === "inferior") {
            document.getElementById("qtd-inferior").textContent = novaQuantidade;
        } else if (ingresso === "superior") {
            document.getElementById("qtd-superior").textContent = novaQuantidade;
        } else if (ingresso === "pista") {
            document.getElementById("qtd-pista").textContent = novaQuantidade;
        }
        alert('Compra realizada com sucesso!');
    }
}