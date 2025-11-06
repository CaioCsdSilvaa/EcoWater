document.addEventListener ('DOMContentLoaded', function(){
    console.log('Script JavaScript carregado.');

const form = document.getElementById('contatoForm');
const isReportCheckBox = document.getElementById('isReport');
const cpfContainer = document.getElementById('cpf-container');
const cpfInput = document.getElementById('cpf');
const imagemInput = document.getElementById('imagem');

const nomeArquivo = document.getElementById('nome-arquivo');


function toggleCpfVisibility(){
    if (isReportCheckBox.checked){
        cpfContainer.style.display = 'block';
        cpfInput.setAttribute('required', 'required');
        imagemInput.setAttribute('required', 'required');
        console.log("Denúncia marcada: CPF e imagem visíveis e obrigatórios.")
    }
    else{
        cpfContainer.style.display = 'none';
        cpfInput.removeAttribute('required');
        imagemInput.removeAttribute('required')
        cpfInput.log ("Denúncia desmarcada: CPF e imagens ocultos e opcionais.")
    }
}



isReportCheckBox.addEventListener('change', toggleCpfVisibility);

    toggleCpfVisibility();


});

input.addEventListener('change', function(){
    if (this.files && this.files.lenght > 0){
        nomeArquivo.textContent = this.files[0].name;
    }
    else{
        nomeArquivo.textContent = "Nenhuma imagem selecionada";
    }
});
