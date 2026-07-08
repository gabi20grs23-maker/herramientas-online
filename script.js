console.log("Herramientas Online cargada correctamente");
const buscador = document.getElementById("buscar");

if (buscador) {
    buscador.addEventListener("keyup", function () {

        const texto = buscador.value.toLowerCase();

        const tarjetas = document.querySelectorAll(".card");

        tarjetas.forEach(function (tarjeta) {

            const contenido = tarjeta.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });
}
