
function mostrarFormulario(plano) {
    document.getElementById('formulario-plano').style.display = 'block';
    document.getElementById('plano-escolhido').value = plano;
    window.scrollTo({
        top: document.getElementById('formulario-plano').offsetTop,
        behavior: 'smooth'
    });
}

