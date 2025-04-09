
const loginTab = document.getElementById('loginTab');
const cadastroTab = document.getElementById('cadastroTab');
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');


function showLogin() {

  loginTab.classList.add('active');
  cadastroTab.classList.remove('active');


  loginForm.classList.remove('hidden');
  cadastroForm.classList.add('hidden');

  loginForm.style.animation = 'fadeIn 0.5s ease forwards';
}


function showCadastro() {
  cadastroTab.classList.add('active');
  loginTab.classList.remove('active');

  cadastroForm.classList.remove('hidden');
  loginForm.classList.add('hidden');

  cadastroForm.style.animation = 'fadeIn 0.5s ease forwards';
}


loginTab.addEventListener('click', showLogin);
cadastroTab.addEventListener('click', showCadastro);
