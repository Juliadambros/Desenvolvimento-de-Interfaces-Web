const elements = {
    toggleTheme: document.getElementById('toggleTheme'),
    subscribeForm: document.getElementById('subscribe-form'),
    menuToggle: document.querySelector('.menu-toggle'),
    menuList: document.querySelector('.menu-list'),
    planoForm: document.getElementById('formulario-plano'),
    planoEscolhido: document.getElementById('plano-escolhido'),
    carouselSlides: document.querySelectorAll('.carousel-slide'),
};

// formulário de assinatura
function mostrarFormulario(plano) {
    if (elements.planoForm && elements.planoEscolhido) {
        elements.planoForm.style.display = 'block';
        elements.planoEscolhido.value = plano;
        window.scrollTo({
            top: elements.planoForm.offsetTop,
            behavior: 'smooth'
        });
    }
}

function toggleTheme() {
    document.body.classList.toggle('claro');
    const icon = elements.toggleTheme.querySelector('i');
    const isLightTheme = document.body.classList.contains('claro');

    icon.classList.toggle('fa-moon', !isLightTheme);
    icon.classList.toggle('fa-sun', isLightTheme);

    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

function validateForm(e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const senha = this.senha.value.trim();

    if (nome.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    alert('Assinatura concluída com sucesso!');
    this.reset();
    elements.planoForm.style.display = 'none';
}

function initCarousel() {
    if (elements.carouselSlides.length === 0) return;

    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        elements.carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + elements.carouselSlides.length) % elements.carouselSlides.length) {
                slide.classList.add('prev');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % elements.carouselSlides.length;
        showSlide(currentIndex);
    }

    function startCarousel() {
        intervalId = setInterval(nextSlide, 4000);
    }

    showSlide(currentIndex);
    startCarousel();
}

function closeMenuOnLinkClick() {
    const links = document.querySelectorAll('.menu-list a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            elements.menuList.classList.remove('show');
        });
    });
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('claro');
        const icon = elements.toggleTheme.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadSavedTheme();

    if (elements.toggleTheme) {
        elements.toggleTheme.addEventListener('click', toggleTheme);
    }

    if (elements.subscribeForm) {
        elements.subscribeForm.addEventListener('submit', validateForm);
    }

    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', function () {
            elements.menuList.classList.toggle('show');
        });
    }

    initCarousel();
    closeMenuOnLinkClick();
});