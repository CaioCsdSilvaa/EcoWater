document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formulario-ong");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const cnpj = document.getElementById("cnpj").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const instagram = document.getElementById("instagram").value.trim();
        const facebook = document.getElementById("facebook").value.trim();
        const site = document.getElementById("site").value.trim();
        const objetivo = document.getElementById("objetivo").value.trim();

        if (!nome) return alert("O nome é obrigatório.");
        if (!cnpj) return alert("O CNPJ é obrigatório.");
        if (!email.includes("@") || !email.includes(".")) 
            return alert("E-mail inválido.");
        if (objetivo.length < 10) 
            return alert("O objetivo deve ter pelo menos 10 caracteres.");

        alert("ONG cadastrada com sucesso!");

        form.reset();
    });
});
