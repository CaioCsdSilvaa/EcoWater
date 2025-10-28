document.addEventListener ('DOMContentLoaded', function(){
    console.log('Script JavaScript carrgado.');

const form = document.getElementById('contatoForm');
const isReportCheckBox = document.getElementById('isReport');

const cpfContainer = document.getElementById('cpf-container');
const cpfInput = document.getElementById('cpf');

function toggleCpfVisibility(){
    if (isReportCheckBox.checked){
        cpfContainer.style.display = 'block';
        cpfInput.setAttribute('requered', 'required');
        console.log("Denúncia marcada: CPF visível e obrigatório.")
    }
    else{
        cpfContainer.style.display = 'none';
        cpfInput.removeAttribute('requerid');
        cpfInput.log ("Denúncia desmarcada: CPF oculto e opcional.")
    }
}

isReportCheckBox.addEventListener('change', toggleCpfVisibility);

    toggleCpfVisibility();
});