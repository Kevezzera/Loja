function mostrarCarrossel(tipo) {
  const carrossel = document.getElementById(`carrossel-${tipo}`);

  if (!carrossel) return;

  const estaAtivo = carrossel.classList.contains('ativo');

  // Oculta todos os carrosséis
  document.querySelectorAll('.carrossel-container').forEach(el => {
    el.classList.remove('ativo');
  });

  // Se não estava ativo, ativa com delay
  if (!estaAtivo) {
    setTimeout(() => {
      carrossel.classList.add('ativo');
    }, 100); // pequeno delay para suavizar
  }
}
