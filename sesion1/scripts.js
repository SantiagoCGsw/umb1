document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("card-container");

    // Descripciones personalizadas para cada tarjeta
    let descriptions = [
        "Una espectacular aurora boreal ilumina el cielo nocturno sobre un lago congelado, reflejando sus colores vibrantes en el agua.",
        "Un puente de madera rodeado de árboles en tonos otoñales se extiende sobre un río tranquilo, creando un paisaje sereno.",
        "Un bosque iluminado por los cálidos tonos del otoño, donde los rayos del sol atraviesan los árboles, resaltando el follaje dorado.",
        "Un cielo con tonos intensos de rojo y púrpura al atardecer se extiende sobre un bosque de pinos oscuros, creando una vista impresionante.",
        "Un paisaje montañoso cubierto de niebla, con árboles verdes emergiendo a través de la bruma, evocando una sensación de misterio y tranquilidad..",
        "Un lago sereno rodeado de árboles con hojas otoñales, reflejando la belleza de la naturaleza en sus aguas calmadas..",
        "Un panorama nocturno de una ciudad iluminada, con rascacielos reflejando sus luces en el agua, mostrando la belleza urbana.",
        "Un espectáculo de fuegos artificiales ilumina el cielo nocturno sobre una ciudad, creando una escena vibrante y festiva.",
        "Una acogedora cabaña de madera rodeada de naturaleza junto a un lago, transmitiendo tranquilidad y conexión con el entorno natural."
    ];

    // Generar las tarjetas dinámicamente
    for (let i = 1; i <= 9; i++) {
        let card = `
            <div class="col">
                <div class="card">
                    <img src="imagenes/imagen${i}.png" class="card-img-top" alt="Imagen ${i}">
                    <div class="card-body">
                        <p class="card-text">${descriptions[i - 1]}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-success">Me gusta</button>
                        <button class="btn btn-danger">No me gusta</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }
});

