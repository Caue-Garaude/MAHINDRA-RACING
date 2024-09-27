document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos necessários
    const btn = document.querySelector(".login");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");
  
    // Função para abrir o popup
    function openPopup() {
      popup.style.display = "flex";
    }
  
    // Função para fechar o popup
    function closePopup() {
      popup.style.display = "none";
    }
  
    // Adiciona evento de clique ao botão para abrir o popup
    btn.addEventListener("click", openPopup);
  
    // Adiciona evento de clique ao botão de fechar para fechar o popup
    closeBtn.addEventListener("click", closePopup);
  
    // Fecha o popup ao clicar fora dele
    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        closePopup();
      }
    });
  
    document.getElementById('popup').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Dados de login pré-definidos
      const correctUsername = 'admin@email.com';
      const correctPassword = '123321';
  
      // Obter valores do formulário
      const username = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Verificar dados de login
      if (username === correctUsername && password === correctPassword) {
        alert('Login bem-sucedido!');
        closePopup();
        window.location.href = 'dashboard.html';
      } else {
        alert('Usuário ou senha incorretos.');
      }
    });
  });
  
  
  // slideshow
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); 
  }
  
  