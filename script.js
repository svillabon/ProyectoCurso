// Mostrar detalles en una tarjeta
function mostrarDetalles(id) {
    const detalles = document.getElementById(id);
    detalles.classList.toggle('hidden');
}

// Validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (nombre === "" || email === "" || password === "") {
        document.getElementById('formMessage').textContent = "Por favor, completa todos los campos.";
        document.getElementById('formMessage').style.color = "red";
    } else {
        document.getElementById('formMessage').textContent = "Formulario enviado correctamente.";
        document.getElementById('formMessage').style.color = "green";
    }
}

// Obtener el clima de una API
async function obtenerClima() {
    const ciudad = "Madrid"; // Cambia esta ciudad según tus necesidades
    const apiKey = "tu_api_key"; // Obtén tu API Key desde https://openweathermap.org/api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const climaInfo = document.getElementById('climaInfo');
            climaInfo.innerHTML = `
                <h3>Clima en ${ciudad}</h3>
                <p><strong>Temperatura:</strong> ${data.main.temp}°C</p>
                <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
                <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
            `;
            climaInfo.classList.remove('hidden');
        } else {
            alert("No se pudo obtener el clima. Intenta de nuevo.");
        }
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        alert("Hubo un problema con la API del clima.");
    }
}
