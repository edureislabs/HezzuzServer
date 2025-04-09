function atualizarJogadores() {
    const servidorIP = "sp-06.magnohost.com.br:25520"; // Substitua pelo IP do seu servidor
    const url = `https://api.mcstatus.io/v2/status/java/${servidorIP}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const jogadoresOnline = document.getElementById("jogadores");

            // Criar elemento de imagem se não existir
            let img = document.getElementById("status-img");
            if (!img) {
                img = document.createElement("img");
                img.id = "status-img";
                img.width = 20;
                img.height = 20;
                img.style.verticalAlign = "middle";
                img.style.marginRight = "5px";
                jogadoresOnline.prepend(img);
            }

            if (data.online) {
                img.src = "./imgs/online.png";
                img.style.filter = "none"; // Remove preto e branco
                jogadoresOnline.innerHTML = `<img id="status-img" src="./imgs/online.png" width="20" height="20"> <strong>Jogadores Online:</strong> ${data.players.online}`;
            } else {
                img.src = "./imgs/online.png";
                img.style.filter = "grayscale(100%)"; // Preto e branco se offline
                jogadoresOnline.innerHTML = `<img id="status-img" src="./imgs/online.png" width="20" height="20" style="filter: grayscale(100%)"> <strong>Servidor Offline</strong>`;
            }
        })
        .catch(error => {
            console.error("Erro ao obter status do servidor:", error);
            document.getElementById("jogadores").innerHTML = "<strong>❌ Erro ao carregar</strong>";
        });
}

// Atualiza a cada 1 segundo
setInterval(atualizarJogadores, 1000);
atualizarJogadores();


function carregarMensagens() {
    fetch('http://localhost:3000/mensagens')
        .then(res => res.json())
        .then(mensagens => {
            console.log("Mensagens recebidas:", mensagens);

            const container = document.getElementById('mensagens-container');
            if (!container) {
                console.error("Elemento 'mensagens-container' não encontrado no HTML.");
                return;
            }

            container.innerHTML = ""; // Limpa antes de adicionar novas mensagens

            mensagens.forEach(msg => {
                const div = document.createElement('div');
                div.classList.add("mensagem");
                div.innerHTML = `<strong>${msg.username}:</strong> ${msg.text}`;
                container.appendChild(div);
            });
        })
        .catch(err => console.error("Erro ao carregar mensagens:", err));
}

// Atualiza mensagens a cada 5 segundos
setInterval(carregarMensagens, 5000);
document.addEventListener("DOMContentLoaded", carregarMensagens);
