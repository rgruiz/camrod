document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.carousel .slides');
  const slides = document.querySelectorAll('.carousel .slide');
  const indicators = document.querySelectorAll('.carousel .indicators div');
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Ajustar el ancho del contenedor dinámicamente
  slidesContainer.style.width = `${100 * totalSlides}vw`;

  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
    indicators.forEach(ind => ind.classList.remove('active'));
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    currentSlide = index;
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    goToSlide(nextSlide);
  }, 5000);
});