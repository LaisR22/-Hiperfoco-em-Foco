function showContent(sectionId) {
    // Esconde todos os conteúdos
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(content => content.classList.remove('active'));

    // Mostra o conteúdo correspondente ao botão clicado
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}

function showSection(sectionName) {
    // Função para manipular seções como "Sobre" e "Contato" no futuro
    alert(`Você clicou na seção ${sectionName}`);
}
