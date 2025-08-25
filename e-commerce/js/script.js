// Abrir bolsa
document.getElementById('abrirBolsa').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('bolsaModal').classList.add('active');
    atualizarBolsa();
});

// Fechar bolsa pelo botão
document.getElementById('fecharBolsa').addEventListener('click', function() {
    document.getElementById('bolsaModal').classList.remove('active');
});

// Fechar bolsa ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('bolsaModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
};

document.querySelectorAll('.adicionar-bolsa').forEach(btn => {
    btn.addEventListener('click', function () {
        const id = parseInt(this.getAttribute('data-id'));
        const produto = produtos.find(p => p.id === id);
        bolsa.push(produto);
        salvarBolsa();
        document.getElementById('bolsaModal').classList.add('active');
        atualizarBolsa();
    });
});



const produtos = [
    {
        id: 1,
        nome: "Étoile Gats 43",
        preco: 1399.90
    },
    {
        id: 2,
        nome: "Étoile Gats 45",
        preco: 1399.90
    },
    {
        id: 3,
        nome: "ÉTOILE DOWN JACKET",
        preco: 1200.00
    },
    {
        id: 4,
        nome: "ÉTOILE CARGO PANTS",
        preco: 800.00
    },
    {
        id: 5,
        nome: "ÉTOILE LEATHER BOMBER JACKET",
        preco: 1899.00
    },
    {
        id: 6,
        nome: "ÉTOILE FLANNEL SHIRT",
        preco: 299.00
    },
    {
        id: 7,
        nome: "ÉTOILE DRESS",
        preco: 1200.00
    },
    {
        id: 8,
        nome: "ÉTOILE WOMEN'S JEANS",
        preco: 800.00
    },
    {
        id: 9,
        nome: "ÉTOILE CARDIGAN",
        preco: 1899.00
    },
    {
        id: 10,
        nome: "ÉTOILE WOMEN'S JEANS",
        preco: 299.00
    }
];

let bolsa = [];
const bolsaSalva = localStorage.getItem('bolsa');
if (bolsaSalva) {
    bolsa = JSON.parse(bolsaSalva);
}

// Salvar bolsa no localStorage sempre que mudar
function salvarBolsa() {
    localStorage.setItem('bolsa', JSON.stringify(bolsa));
}

function atualizarBolsa() {
    const bolsaLista = document.getElementById('bolsaLista');
    bolsaLista.innerHTML = '';
    let total = 0;

    bolsa.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        

        const btnRemover = document.createElement('button');
        btnRemover.style.fontSize = '10px' 
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.background = 'rgba(255, 255, 255, 1)';
        btnRemover.style.color = '#000000ff';
        btnRemover.style.border = '2px solid #000000';
        btnRemover.style.borderRadius = '5px';
        btnRemover.style.cursor = 'pointer';
        btnRemover.style.padding = '2px 8px';
        btnRemover.onclick = function() {
            bolsa.splice(index, 1);
            salvarBolsa();
            atualizarBolsa();
        };

        li.appendChild(btnRemover);
        bolsaLista.appendChild(li);
        total += item.preco;
    });

    if (bolsa.length > 0) {
        const totalLi = document.createElement('li');
        totalLi.style.fontWeight = 'bold';
        totalLi.textContent = `Total: R$ ${total.toFixed(2)}`;
        bolsaLista.appendChild(totalLi);
    } else {
        bolsaLista.innerHTML = '<li>Sua bolsa está vazia.</li>';
    }
}

document.querySelectorAll('.troca-img').forEach(img => {
    img.addEventListener('mouseover', function() {
        setTimeout(() => {
            this.src = this.getAttribute('data-hover');
        }, 200);
    });
    img.addEventListener('mouseout', function() {
        this.style.opacity = '0.8';
        setTimeout(() => {
            this.src = this.getAttribute('data-original');
            this.style.opacity = '1';
        }, 200);
    });
});