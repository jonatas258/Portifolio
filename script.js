// Seleciona os campos pelo ID (certifique-se de colocar os IDs corretos no seu HTML)
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');

// Definindo os limites máximos de caracteres
const limiteEmail = 50;
const limiteTelefone = 15;

// Função para impor o limite no E-mail
if (inputEmail) {
  inputEmail.setAttribute('maxlength', limiteEmail);
  
  inputEmail.addEventListener('input', (event) => {
    if (inputEmail.value.length > limiteEmail) {
      inputEmail.value = inputEmail.value.substring(0, limiteEmail);
    }
  });
}

// Função para impor o limite no Telefone
if (inputTelefone) {
  inputTelefone.setAttribute('maxlength', limiteTelefone);

  inputTelefone.addEventListener('input', (event) => {
    if (inputTelefone.value.length > limiteTelefone) {
      inputTelefone.value = inputTelefone.value.substring(0, limiteTelefone);
    }
  });
}

/* =================================
   1. EFEITO DE DIGITAÇÃO
================================= */

const textoDigitacao = document.querySelector(".textoint");

if (textoDigitacao) {
    const textoOriginal = textoDigitacao.innerHTML;

    textoDigitacao.innerHTML =
        'Olá, sou <span>Jonatas Desidério</span> <br>';

    const frase = "Desenvolvedor em formação";
    let indice = 0;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor-digitacao");
    cursor.textContent = "|";

    textoDigitacao.appendChild(cursor);

    function digitar() {
        if (indice < frase.length) {
            cursor.insertAdjacentText("beforebegin", frase.charAt(indice));
            indice++;

            setTimeout(digitar, 80);
        }
    }

    digitar();
}


/* =================================
   2. ANIMAÇÃO AO ROLAR A PÁGINA
================================= */

const elementosAnimados = document.querySelectorAll(
    ".sobre, .Habilidade, .txthbl, .flex2, .projetos-section, .contato-section"
);

elementosAnimados.forEach(elemento => {
    elemento.classList.add("reveal");
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach(elemento => {
    observador.observe(elemento);
});




// ===== BARRA DE PROGRESSO =====

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const alturaPagina =
        document.documentElement.scrollHeight - window.innerHeight;

    const progresso = alturaPagina > 0
        ? (scrollTop / alturaPagina) * 100
        : 0;

    document.getElementById("progressBar").style.width =
        progresso + "%";
});