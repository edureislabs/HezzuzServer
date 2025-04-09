// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    
    // Efeito fade-in na navbar
    const navBar = document.querySelector(".nav-bar");
    navBar.style.opacity = "0"; // Começa invisível
    setTimeout(() => {
        navBar.style.transition = "opacity 1s ease-in-out";
        navBar.style.opacity = "1";
    }, 500); // Aparece suavemente após 0.5s


    // Alterna entre modo escuro e claro
    let darkMode = false;
    toggleButton.addEventListener("click", function () {
        darkMode = !darkMode;
        document.body.style.backgroundColor = darkMode ? "#222" : "orange";
        document.body.style.color = darkMode ? "white" : "black";
        toggleButton.innerText = darkMode ? "Modo Claro" : "Modo Escuro";
    });

    // Efeito de scroll suave nos links da navbar
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");
    
            // Se for um link externo (começa com "http"), permite a navegação normal
            if (href.startsWith("http")) {
                return;
            }
    
            e.preventDefault(); // Só impede o comportamento padrão em links internos
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
function copiarIP() {
    const ipTexto = document.getElementById("ip-texto").textContent.toLowerCase(); // Converte para minúsculas
    navigator.clipboard.writeText(ipTexto).then(() => {
        mostrarMensagem("✅ IP copiado: " + ipTexto);
    }).catch(err => {
        console.error("Erro ao copiar o IP", err);
    });
}
function mostrarMensagem(mensagem) {
    // Cria o elemento da mensagem
    let msg = document.createElement("div");
    msg.textContent = mensagem;
    msg.classList.add("mensagem-copiado");

    document.body.appendChild(msg); // Adiciona a mensagem ao corpo da página

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        msg.remove();
    }, 3000);
}
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("open");
}
