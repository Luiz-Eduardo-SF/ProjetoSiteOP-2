document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('favorite-character-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Coletar dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const favoriteCharacter = document.getElementById('favorite').value;



        

        // Mensagens personalizadas por personagem
        const messages = {
            luffy: {
                title: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nPirata ${name}! Você ajudará o Luffy a encontrar o One Piece!\n` 
            },
            zoro: {
                title: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nEspadachim ${name}! Você se tornará o(a) maior espadachim do mundo como o Zoro!\n`     
            },
            sanji: {
                title: `Bem-vindo(a) à Tripulação do Chapéu de Palha.\nChef ${name}! Você encontrará o All Blue junto aos Chapéus de palha!\n` 
            }
        };

        // Selecionar a mensagem conforme o personagem
        const selectedMessage = messages[favoriteCharacter];
        
        // Montar mensagem final
        const finalMessage = `${selectedMessage.emoji} ${selectedMessage.title}\n` +
                            `${selectedMessage.content}\n` +
                            `Seu email de contato: ${email}\n\n` +
                            "Obrigado por se juntar ao bando! Verifique seu email para mais informações!";

        // Exibir mensagem
        alert(finalMessage);

        // Opcional: adicionar efeito visual no formulário
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.textContent = "Enviado com sucesso!";
        submitButton.style.backgroundColor = "#4CAF50";
        
        // Resetar formulário após 3 segundos
        setTimeout(() => {
            form.reset();
            submitButton.textContent = "Enviar";
            submitButton.style.backgroundColor = "";
        }, 3000);
    });
});
