document.querySelectorAll('.carrossel-container').forEach(container => {
  const slides = container.querySelectorAll('.slide');
  const btnDireita = container.querySelector('.seta.direita');
  const btnEsquerda = container.querySelector('.seta.esquerda');
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[i].classList.add('ativo');
  }

  btnDireita.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  });

  btnEsquerda.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  });

  // Inicializa com o primeiro slide ativo
  mostrarSlide(index);
});