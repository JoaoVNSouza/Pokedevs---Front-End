// Criar uma variável que selecione todos os cartões de pokedevs.
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

// Adicionar um evento de clique para cada cartão de pokedevs.
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        
        // Remove a classe aberto do que estiver selecionado anteriormente.
        const cartaoAberto = document.querySelector(".aberto");
        if (cartaoAberto){
            cartaoAberto.classList.remove("aberto");
        }

        // Adiciona a classe aberto no cartão clicado.
        const idPokedevClicado = pokedev.attributes.id.value;
        const idCartaoClicado = "cartao-" + idPokedevClicado;
        const cartaoAbrir = document.getElementById(idCartaoClicado);
        
        cartaoAbrir.classList.add("aberto");

        // Mudar o item selecionado no menu.
        const itemListagemAtivo = document.querySelector(".ativo");
        if (itemListagemAtivo){
            itemListagemAtivo.classList.remove("ativo");
        }

        // Adicionar a classe ativo no item clicado.
        const itemListagemSelecionado = document.getElementById(idPokedevClicado);
        itemListagemSelecionado.classList.add("ativo");
    


    })
})