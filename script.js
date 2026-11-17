const imagenPrincipal =
document.querySelector("#imagenPrincipal");

const miniaturas =
document.querySelectorAll(".miniatura");

miniaturas.forEach(miniatura => {

    miniatura.addEventListener("click", () => {

        imagenPrincipal.src = miniatura.src;

        imagenPrincipal.alt = miniatura.alt;

    });

});