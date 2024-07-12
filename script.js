// Função validar login
function login() {
    var userType = document.getElementById("userType").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (userType === "funcionario" && username === "gabriel@soamer.com" && password === "123456") {
        window.location.href = "dashboard_funcionario.html";
    } else if (userType === "gestor" && username === "helio@soamer.com" && password === "123456") {
        window.location.href = "dashboard.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

// Função voltar para a tela de login
document.addEventListener("DOMContentLoaded", function () {
    var logoutLinks = document.querySelectorAll('.logout');

    logoutLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = "index.html"; 
        });
    });
});


// logica botão confirmar funcao
function confirmarEscolha() {
    var funcaoSelecionada = document.getElementById("funcao").value;

    
    switch (funcaoSelecionada) {
        case "seleciona_corte":
            window.location.href = "corte.html"; 
            break;
        case "seleciona_molde":
            window.location.href = "modelagem.html"; 
            break;
        case "seleciona_solda":
            window.location.href = "solda.html"; 
            break;
        case "seleciona_polimento":
            window.location.href = "polimento.html"; 
            break;
        case "seleciona_limpeza":
            window.location.href = "limpeza.html"; 
            break;
        case "seleciona_embalagem":
            window.location.href = "embalagem.html";
            break;
        case "seleciona_furacao":
            window.location.href = "furacao.html";
            break;
        case "seleciona_poli1":
            window.location.href = "polimento1.html";
            break;
        case "seleciona_poli2":
            window.location.href = "polimento2.html";
            break;
        case "seleciona_poli3":
            window.location.href = "polimento3.html";
            break;
        default:
            alert("Escolha inválida");
    }
}

// Muda cor dos quadrados
document.addEventListener("DOMContentLoaded", function () {
    var situacaoArmazenada = localStorage.getItem("situacaoProducao");
    var corteQuadrado = document.getElementById("corteQuadrado");

    // Define a cor do quadrado "corte" de acordo com a situação armazenada
    switch (situacaoArmazenada) {
        case "problema1": // Acidente
            corteQuadrado.style.backgroundColor = "#e94560"; // Vermelho
            break;
        case "problema2": // Linha parada
            corteQuadrado.style.backgroundColor = "#ffbf00"; // Amarelo
            break;
        case "problema3": // Excesso de peças
            corteQuadrado.style.backgroundColor = "#8a2be2"; // Roxo
            break;
        default:
            // Cor padrão ou lógica adicional se necessário
    }
});


// logica botão relatar problema
function problema() {
    // Obtém o valor selecionado no dropdown
    var situacao = document.getElementById("situacao").value;

    // Exibe a mensagem com base na opção selecionada
    if (situacao === "problema1" || situacao === "problema2" || situacao === "problema3") {
        alert("Situação atualizada: " + situacao);
    } else if (situacao === "produzindo") {
        alert("Situação atualizada: Em produção");
    } else {
        alert("Situação atualizada");
    }
}

    

// Funções para trocar de página 

function voltarParaDashboard() {
    window.location.href = "dashboard.html"; 
}

function abrirOrdemPage() {
    window.location.href = "Ordem.html";
}

function confirmarOrdem() {
    alert("Ordem confirmada!");
    
    window.location.href = "dashboard.html";
}

function irParaEspera() {
    window.location.href = "espera.html";
}

function irParaLinha() {
    window.location.href = "linha_de_producao.html"
}

function historicoTotal() {
    window.location.href = "historico2.html"
}

function historico() {
    window.location.href = "historico.html"
}

function estatistica() {
    window.location.href = "estatistica.html"
}

function estatisticafuc() {
    window.location.href = "estatisticafuc.html"
}

function estatisticageral() {
    window.location.href = "estatisticageral.html"
}

function mensagem() {
    window.location.href = "mensagens.html"
}

function dashboard() {
    window.location.href = "dashboard_funcionario.html"
}

function mensagem2() {
    window.location.href = "mensagens1.html"
}

function funcao() {
    window.location.href = "funcao.html"
}

function polimento() {
    window.location.href = "polimento.html"
}
