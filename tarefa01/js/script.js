const produtos = [ 
    {none: "Produnto 2" , preco: 10.00, imagem "images/produto1.jfif" }
    {none: "Produnto 1" , preco: 10.00, imagem "images/produto2.jfif" }
    {none: "Produnto 3" , preco: 10.00, imagem"images/produto3.jfif" }
    
 ]
    

    const carrinho = [];

    const produntosDiv = document.getElementById('produtos')
    const carrinhoLista = document.getElementById("carrinho")
    const totalSpan = document.getElementById("total")
    

    function exibirProdutos () {
        podutos.forEach(produto => { 
        const produtoDiv = document.createElement("div");
        produntoDiv.classList.add("produnto");
        produtoDiv.innerHTML = `

        <img src="${profuto.imagem}" alt="${produto.none}">
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preço.tpfixad(2)}
        <button onclik="adicionaAoCarrinho('${produto.none}' , {produto.preco}')>
        `;
        produtoDiv.appendChild(produtoDiv);
        
    })
    {
        function adicionaAoCarrinho(nome, preço){
            carrinho.push({nome, preco})
            atualizarCarrinho();
        }

    }


    function atualizarCarrinho(){
        carrinhoLista.innerHTML ="";
        let total =0; 
        carrinho.forEach(item => (
    const itemLista = document.createElement("li")
    intemLista. textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    )};

    exibirProdutos();