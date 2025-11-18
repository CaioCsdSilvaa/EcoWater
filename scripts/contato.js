document.addEventListener('DOMContentLoaded', function () {
    console.log('Script JavaScript carregado.');

    const form = document.getElementById('contatoForm');
    const isReportCheckBox = document.getElementById('isReport');
    const cpfContainer = document.getElementById('cpf-container');
    const cpfInput = document.getElementById('cpf');
    const imagemInput = document.getElementById('imagem');
    const nomeArquivo = document.getElementById('nome-arquivo');


    function toggleCpfVisibility() {
        if (isReportCheckBox.checked) {
            cpfContainer.style.display = 'block';
            cpfInput.setAttribute('required', 'required');
            imagemInput.setAttribute('required', 'required');
            console.log("Denúncia marcada: CPF e imagem visíveis e obrigatórios.");
        } else {
            cpfContainer.style.display = 'none';
            cpfInput.removeAttribute('required');
            imagemInput.removeAttribute('required');
            console.log("Denúncia desmarcada: CPF e imagem ocultos e opcionais.");
        }
    }

    isReportCheckBox.addEventListener('change', toggleCpfVisibility);

    toggleCpfVisibility();


    imagemInput.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
            nomeArquivo.textContent = this.files[0].name;
        } else {
            nomeArquivo.textContent = "Nenhuma imagem selecionada";
        }
    });



    //Validando o formuláriooooo :)


    form.addEventListener("submit", function (event) {
        event.preventDefault(); // bloquear envio

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "") {
            alert("O nome é obrigatório.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("E-mail inválido.");
            return;
        }

        if (assunto.length < 3) {
            alert("Por favor, descreva melhor o assunto.");
            return;
        }

        if (mensagem.length < 10) {
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            return;
        }

        if (isReportCheckBox.checked) {
            if (!/^\d{11}$/.test(cpfInput.value)) {
                alert("O CPF deve conter exatamente 11 números.");
                return;
            }
            if (imagemInput.files.length === 0) {
                alert("Envie uma imagem para a denúncia.");
                return;
            }
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
        toggleCpfVisibility(); // esconder novamente ao resetar
        nomeArquivo.textContent = "Nenhuma imagem selecionada";
    });

});
