const devocionales = [
    "Dios es nuestro refugio y fortaleza. - Salmo 46:1",
    "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
    "Confía en el Señor con todo tu corazón. - Proverbios 3:5",
    "Sé fuerte y valiente. - Josué 1:9"
];

function mostrarSeccion(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function nuevoDevocional() {
    const random = Math.floor(Math.random() * devocionales.length);
    document.getElementById("devocionalTexto").innerText = devocionales[random];
}

function guardarOracion() {
    const texto = document.getElementById("prayerInput").value;

    if (texto.trim() === "") {
        alert("Escribe un pedido primero 🙏");
        return;
    }

    let oraciones = JSON.parse(localStorage.getItem("oraciones")) || [];
    oraciones.push(texto);
    localStorage.setItem("oraciones", JSON.stringify(oraciones));

    document.getElementById("prayerInput").value = "";
    cargarOraciones();
}

function cargarOraciones() {
    let oraciones = JSON.parse(localStorage.getItem("oraciones")) || [];
    const lista = document.getElementById("listaOraciones");
    lista.innerHTML = "";

    oraciones.forEach(o => {
        const div = document.createElement("div");
        div.className = "prayer-item";
        div.innerText = o;
        lista.appendChild(div);
    });
}

nuevoDevocional();
cargarOraciones();
function toggleFAQ() {
    const modal = document.getElementById("faqModal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}
function enviarMensaje() {
    const input = document.getElementById("chatInput");
    const mensaje = input.value.trim();
    if (mensaje === "") return;

    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");
    div.className = "chat-message";
    div.innerText = "Hermano: " + mensaje;

    chatBox.appendChild(div);
    input.value = "";
}
function guardarPerfil() {
    const nombre = document.getElementById("nombrePerfil").value;
    localStorage.setItem("perfilNombre", nombre);
    document.getElementById("mostrarPerfil").innerText =
        "Bienvenido, " + nombre + " 🙏";
}

window.onload = function() {
    const nombre = localStorage.getItem("perfilNombre");
    if (nombre) {
        document.getElementById("mostrarPerfil").innerText =
            "Bienvenido, " + nombre + " 🙏";
    }
};