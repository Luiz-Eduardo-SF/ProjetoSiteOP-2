document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active'); // Mostra e oculta o menu no mobile
    });

    const form = document.getElementById('favorite-character-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const favoriteCharacter = document.getElementById('favorite').value;

            const messages = {
                luffy: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nPirata ${name}! Você ajudará o Luffy a encontrar o One Piece!`,
                zoro: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nEspadachim ${name}! Você se tornará o(a) maior espadachim do mundo como o Zoro!`,
                sanji: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nChef ${name}! Você encontrará o All Blue junto aos Chapéus de palha!`
            };

            const finalMessage = `${messages[favoriteCharacter]}\nSeu email de contato: ${email}\n\nObrigado por se juntar ao bando! Verifique seu email para mais informações!`;
            alert(finalMessage);

            const submitButton = form.querySelector('button[type=\"submit\"]');
            submitButton.textContent = "Enviado com sucesso!";
            submitButton.style.backgroundColor = "#4CAF50";

            setTimeout(() => {
                form.reset();
                submitButton.textContent = "Enviar";
                submitButton.style.backgroundColor = "";
            }, 3000);
        });
    }
});
