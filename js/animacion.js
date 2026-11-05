
document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("envelopeLoader");
    const openButton = document.getElementById("openInvitation");
    const invitation = document.querySelector(".invitation");

    if (!loader || !openButton || !invitation) {
        console.error("No se encontraron los elementos de la invitación.");
        return;
    }

    let isOpening = false;

    openButton.addEventListener("click", () => {

        if (isOpening) return;

        isOpening = true;

        // Iniciar animación del sobre
        loader.classList.add("opening");

        // Ocultar portada
        setTimeout(() => {

            loader.classList.add("hide");

            // Llevar al usuario a la invitación
            setTimeout(() => {

                invitation.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 400);

        }, 1300);

    });

});
