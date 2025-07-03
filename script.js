  /*Service javascripyt*/
 const serviceImg = document.getElementById('service-img');
    const defaultImg = serviceImg.src;
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const newImg = this.getAttribute('data-img');
        if (newImg && serviceImg.src !== newImg) {
          serviceImg.classList.add('fading');
          setTimeout(() => {
            serviceImg.src = newImg;
            serviceImg.classList.remove('fading');
          }, 400); 
        }
      });
        card.addEventListener('mouseleave', function() {
          serviceImg.classList.add('fading');
          setTimeout(() => {
            serviceImg.src = defaultImg;
            serviceImg.classList.remove('fading');
          }, 400);
        });
      });


/*clients javascript*/
const wrapper = document.querySelector('.testimonials-wrapper');
const cards = document.querySelectorAll('.testimonial-card');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const cardsToShow = 2;
const cardWidth = 340 + 20; 

let currentIndex = 0;

function updateCarousel() {
  const maxIndex = cards.length - cardsToShow;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  const offset = -(currentIndex * cardWidth);
  wrapper.style.transform = `translateX(${offset}px)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

updateCarousel();
