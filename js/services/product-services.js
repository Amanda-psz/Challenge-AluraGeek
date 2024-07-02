const listaDeProdutos = () => {
    return fetch("http://localhost:3000/produtos")
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
};

const criaProduto = (nome, valor, imagem) => {
    return fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            valor,
            imagem,
        })
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

const deletaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

export const servicosProdutos = {
    listaDeProdutos,
    criaProduto,
    deletaProduto,
};