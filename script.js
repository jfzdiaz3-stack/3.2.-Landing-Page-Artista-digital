/* Miniaturas */
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

/* Modal Video */
const modal =
    document.querySelector("#modalVideo");

const botonAbrir =
    document.querySelector("#abrirModal");

const botonCerrar =
    document.querySelector("#cerrarModal");

const videoModal =
    document.querySelector("#videoModal");

botonAbrir.addEventListener("click", () => {

    modal.style.display = "flex";

    videoModal.play();

});

botonCerrar.addEventListener("click", () => {

    modal.style.display = "none";

    videoModal.pause();

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        videoModal.pause();

    }

});

/* Audio Espacial */
const audio =
    document.querySelector("#audioEspacial");

const botonAudio =
    document.querySelector("#botonAudio");

botonAudio.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        botonAudio.textContent =
            "Pausar ambiente espacial";

    } else {

        audio.pause();

        botonAudio.textContent =
            "Escuchar ambiente espacial";

    }

});