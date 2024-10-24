// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');
    const focusButtons = document.querySelectorAll('.focus-btn');
    const focusInfo = document.getElementById('focus-info');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    focusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const focus = this.getAttribute('data-focus');
            displayFocusInfo(focus);
        });
    });

    function displayFocusInfo(focus) {
        let message = '';

        switch (focus) {
            case 'música':
                message = 'Carreira em música: Você pode seguir como músico, professor de música ou trabalhar na indústria musical.';
                break;
            case 'arte':
                message = 'Carreira em arte: Explore caminhos como artista, designer gráfico ou curador de arte.';
                break;
            case 'animais':
                message = 'Carreira com animais: Pense em ser veterinário, biólogo ou trabalhar em zoológicos.';
                break;
            case 'letras-numeros':
                message = 'Carreira em letras e números: Você pode ser escritor, editor ou analista de dados.';
                break;
            case 'geografia':
                message = 'Carreira em geografia: Considere ser geógrafo, planejador urbano ou professor.';
                break;
            case 'dinossauros':
                message = 'Carreira em paleontologia: Trabalhe como paleontólogo ou educador em museus.';
                break;
            case 'tecnologia':
                message = 'Carreira em tecnologia: Siga como desenvolvedor, engenheiro de software ou especialista em TI.';
                break;
            case 'espaço':
                message = 'Carreira no espaço: Explore a carreira de astronauta, astrofísico ou engenheiro aeroespacial.';
                break;
            default:
                message = 'Escolha um hiperfoco!';
        }

        focusInfo.textContent = message;
    }
});
