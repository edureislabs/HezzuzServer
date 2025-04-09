// Captura as referências dos elementos
const loginTab = document.getElementById('loginTab');
const cadastroTab = document.getElementById('cadastroTab');
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');

// Função para mostrar o formulário de login
function showLogin() {
  // Alterna as classes dos botões para o efeito de ativo
  loginTab.classList.add('active');
  cadastroTab.classList.remove('active');

  // Mostra o formulário de login e esconde o de cadastro
  loginForm.classList.remove('hidden');
  cadastroForm.classList.add('hidden');
  // Adiciona a animação
  loginForm.style.animation = 'fadeIn 0.5s ease forwards';
}

// Função para mostrar o formulário de cadastro
function showCadastro() {
  cadastroTab.classList.add('active');
  loginTab.classList.remove('active');

  cadastroForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  // Adiciona a animação
  cadastroForm.style.animation = 'fadeIn 0.5s ease forwards';
}

// Adiciona os eventos de clique nas abas
loginTab.addEventListener('click', showLogin);
cadastroTab.addEventListener('click', showCadastro);
