//Dom elements
const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobileMenu');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');
const currentYearSpan = document.getElementById('currentYear');

// definir ano no footer.
currentYearSpan.textContent = new Date().getFullYear();

// evento de scroll no Handle.
Window.addEventListener('scroll' , () => {

//adicionar/remover scroll no header.
 if (window.scrollY > 20){
    header.classList.add('scrolled');
 } else {
    header.classList.remove('scrolled');

 }
 //mostrar/esconder o btn de scroll.
 if (window.pageYOffset > 300){
    header.classList.add('active');
 } else {
    header.classList.remove('active');

 }
 // checar todos os elementos para animar com a scroll.
 animationOnScroll();
});

// toggle mobile menu.
function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
    
}

// scroll para section(sessão).
function scrollToSection(id) {
  const element = document.getElementById(id);
  if(element){
    // fecha o menu aberto
    mobileMenu.classList.remove('active');

    // cálculo de posição com o offset para o header
    const headerHeight = header.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition  = elementPosition + window.pageYOOffset = headerHeight;

     //scroll para sessão
     window.scrollTo({
        behavior: 'smooth',
        top: offsetPosition        
     });
  }
}

scrollToTopBtn.addEventListener('click' ,  )
 window.scrollTo({
        behavior: 'smooth',
        top: 0     
     });
    