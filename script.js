// ==========================================
// BUSCADOR DE HERRAMIENTAS
// ==========================================

const buscador = document.getElementById("buscar");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        const texto = buscador.value.toLowerCase();

        const tarjetas = document.querySelectorAll(".card");

        tarjetas.forEach(function(card){

            const contenido = card.innerText.toLowerCase();

            if(contenido.includes(texto)){
                card.style.display = "flex";
            }else{
                card.style.display = "none";
            }

        });

    });

}

// ==========================================
// BOTÓN VOLVER ARRIBA
// ==========================================

const botonSubir = document.getElementById("subir");

if (botonSubir) {

    window.addEventListener("scroll", function(){

        botonSubir.style.display = window.scrollY > 300 ? "block" : "none";

    });

    botonSubir.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

// ==========================================
// CONTADOR DE HERRAMIENTAS
// ==========================================

const contador = document.getElementById("contador-herramientas");

if(contador){

    contador.textContent = document.querySelectorAll(".card").length;

}

// ==========================================
// AÑO AUTOMÁTICO DEL FOOTER
// ==========================================

const año = document.getElementById("year");

if(año){

    año.textContent = new Date().getFullYear();

}
