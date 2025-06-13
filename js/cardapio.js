document.addEventListener("DOMContentLoaded", () => {
    const itens = document.querySelectorAll(".item");

    // Preços base das pizzas
    const precopizzas = {
        "P": 20.00,
        "M": 40.00,
        "G": 50.00
    };

    // Para cada pizza do cardápio
    itens.forEach(item => {
        const selectTamanho = item.querySelector(".tamanho");
        const quantidade = item.querySelector(".qntd");
        const precoElemento = item.querySelector(".preco");

        // Função para atualizar o preço
        function atualizarPreco() {
            const tamanhoSelecionado = selectTamanho.value;
            const qtd = parseInt(quantidade.value);

            if (precopizzas[tamanhoSelecionado]) {
                const total = precopizzas[tamanhoSelecionado] * qtd;
                precoElemento.textContent = `Preço: R$ ${total.toFixed(2)}`;
            } else {
                precoElemento.textContent = "Preço: ";
            }
        }

        // Adiciona os ouvintes de evento
        selectTamanho.addEventListener("change", atualizarPreco);
        quantidade.addEventListener("input", atualizarPreco);

        // Atualiza inicialmente ao carregar
        atualizarPreco();
    });
});
// atualiza preco bebida e sobremesas //
document.addEventListener("DOMContentLoaded", () => {
    const itens = document.querySelectorAll(".item");

    itens.forEach((item) => {
        const precoSpan = item.querySelector(".preco-valor");
        const inputQtd = item.querySelector("input.qntd-dinamica");

        if (precoSpan && inputQtd) {
            const precoBase = parseFloat(precoSpan.textContent.replace("R$", "").replace(",", "."));

            const atualizarPreco = () => {
                const qtd = parseInt(inputQtd.value) || 0;
                const total = precoBase * qtd;
                precoSpan.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
            };

            inputQtd.addEventListener("input", atualizarPreco);
            atualizarPreco();
        }
    });
});
  // Atualiza fota da bebida//
document.addEventListener("DOMContentLoaded", () => {
  const cocaLata = document.getElementById("coca");
  const spriteLata = document.getElementById("sprite");
  const pepsiLata = document.getElementById("pepsi");
  const refriPequeno = document.getElementById("refri-lata");

  // Função para mostrar só a imagem correspondente
  function atualizatarRefriLata(valor) {
    if (valor === "cocaLata") {
      cocaLata.style.display = "flex";
      spriteLata.style.display = "none";
      pepsiLata.style.display = "none";
    } else if (valor === "spriteLata") {
      cocaLata.style.display = "none";
      spriteLata.style.display = "flex";
      pepsiLata.style.display = "none";
    } else if (valor === "pepsiLata") {
      cocaLata.style.display = "none";
      spriteLata.style.display = "none";
      pepsiLata.style.display = "flex";
    }
  }

  // Atualiza a imagem ao carregar a página com o valor inicial do select
  atualizatarRefriLata(refriPequeno.value);

  // Atualiza a imagem ao trocar o select
  refriPequeno.addEventListener("change", () => {
    atualizatarRefriLata(refriPequeno.value);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cocaPet = document.getElementById("cocaLitro");
  const spritePet = document.getElementById("spriteLitro");
  const pepsiPet = document.getElementById("pepsiLitro");
  const refriGrande = document.getElementById("refri-pet");

  function atualizarRefriPet(valor) {
    if (valor === "coca-litro") {
      cocaPet.style.display = "flex";
      spritePet.style.display = "none";
      pepsiPet.style.display = "none";
    } else if (valor === "sprite-litro") {
      cocaPet.style.display = "none";
      spritePet.style.display = "flex";
      pepsiPet.style.display = "none";
    } else if (valor === "pepsi-litro") {
      cocaPet.style.display = "none";
      spritePet.style.display = "none";
      pepsiPet.style.display = "flex";
    }
  }

  // Atualiza a imagem ao carregar a página com o valor inicial do select
  atualizarRefriPet(refriGrande.value);

  // Atualiza a imagem ao trocar o select
  refriGrande.addEventListener("change", () => {
    atualizarRefriPet(refriGrande.value);
  });
});
