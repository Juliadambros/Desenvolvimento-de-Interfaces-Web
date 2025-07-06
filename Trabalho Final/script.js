function mostrarFormulario(plano) {
    document.getElementById('formulario-plano').style.display = 'block';
    document.getElementById('plano-escolhido').value = plano;
    window.scrollTo({
        top: document.getElementById('formulario-plano').offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('claro');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('claro')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    });


    document.getElementById('subscribe-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = this.nome.value.trim();
        const email = this.email.value.trim();
        const senha = this.senha.value.trim();
        if (nome.length < 3 || !email.includes('@')) {
            alert('Preencha os campos corretamente.');
            return;
        }
        alert('Assinatura concluída com sucesso!');
        this.reset();
    });

    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    if (slides.length > 0) {
        showSlide(currentIndex);
        setInterval(nextSlide, 4000);
    }

    document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu-list').classList.toggle('show');
    });

});
    