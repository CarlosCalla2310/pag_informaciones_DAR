document.addEventListener("DOMContentLoaded", () => { // Cambio: Se agregó el script para cargar el contenido dinámicamente
    const year = 2024; // Cambio: Definición de la variable year AÑO
    const periodo = 2; // vaiable de periodo del año

    document.getElementById("cronograma-title").textContent = `CRONOGRAMA GESTIÓN ${year}`; // Cambio: Inserción del año en el título
    document.getElementById("gestion-year").textContent = year; // Cambio: Inserción del año en el texto (La variable year alamcena el año actual)
    document.getElementById("oferta-link").textContent = `Nuestra Oferta Academica ${year}`; // Cambio: Inserción del año en el enlace
    document.getElementById("periodo-año").textContent = periodo;
});
