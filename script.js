function aceptarInvitacion() {
    alert("¡Genial! Me alegra que quieras salir a caminar conmigo.");
    window.close();
}

function rehusarInvitacion() {
    var no = document.getElementById("no");
    no.style.position = "absolute";
    no.style.top = Math.random() * 200 + "px";
    no.style.left = Math.random() * 200 + "px";
}