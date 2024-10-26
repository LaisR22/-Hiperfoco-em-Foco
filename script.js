function toggleCareer(area) {
    const careerInfo = {
        'Música': '<strong>Carreira em Música:</strong><p> compositor, produtor musical ou professor de música...</p>',
        'Arte': '<strong>Carreira em Arte:</strong><p> ilustrador, designer gráfico ou pintor...</p>',
        // Adicione os demais interesses
    };

    const careerInfoDiv = document.getElementById('career-info');
    const sectionText = document.querySelector('#hiperfoco p');

    if (careerInfoDiv.innerHTML === careerInfo[area]) {
        // Se o texto está visível, esconde-o e mostra o parágrafo novamente
        careerInfoDiv.style.display = 'none';
        careerInfoDiv.innerHTML = '';
        sectionText.style.display = 'block';
    } else {
        // Caso contrário, esconde o parágrafo e mostra o novo texto
        careerInfoDiv.innerHTML = careerInfo[area];
        careerInfoDiv.style.display = 'block';
        sectionText.style.display = 'none';
    }
}
