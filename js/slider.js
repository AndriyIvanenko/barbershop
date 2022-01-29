(() => {
  const nextSlideBtn = document.querySelector('[data-next-slide]');
  const prevSlideBtn = document.querySelector('[data-prev-slide]');

    nextSlideBtn.addEventListener('click', nextSlide);
    prevSlideBtn.addEventListener('click', prevSlide);

    let slideIndex = 1;
    showSlides(slideIndex);

  function nextSlide() {
    showSlides(slideIndex += 1);
}
    
  function prevSlide() {
    showSlides(slideIndex -= 1);
}
    
    function showSlides(n) {
        let slides = document.getElementsByClassName("hero__slide");
    
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
  
        for (let slide of slides) {
            slide.style.opacity = 0;
        }
        slides[slideIndex - 1].style.opacity = 1;
    }

})();