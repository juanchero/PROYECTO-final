window.location.href = 'pages/principal.html';
if (user) {
    // Almacenar nombre del usuario en localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    alert(`Bienvenido, ${user.name}`);
    window.location.href = 'principal.html'; // Redirigir a la página principal
} else {
    alert('Correo o contraseña incorrectos.');
}
