// ============================================
// MADE IN ARGENTINA - JavaScript Functions
// ============================================

// Variables globales
let usuarioActual = null;
let chatbotActivo = false;
let velocidadActual = 'medio';
let ladoSeleccionado = 'izquierdo';

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

// Mostrar pantalla de login
function mostrarLogin() {
    // Aquí irá la lógica para mostrar el modal/pantalla de login
    console.log('Mostrar pantalla de Login');
    alert('Pantalla de Login - Funcionalidad próximamente');
}

// Mostrar pantalla de registro
function mostrarRegistro() {
    // Aquí irá la lógica para mostrar el modal/pantalla de registro
    console.log('Mostrar pantalla de Registro');
    alert('Pantalla de Registro - Funcionalidad próximamente');
}

// Realizar búsqueda
function realizarBusqueda() {
    const busqueda = document.querySelector('.search-input').value;
    const ubicacion = document.querySelector('.location-select').value;
    
    console.log('Buscando:', busqueda, 'en', ubicacion);
    
    if (busqueda.trim() === '') {
        alert('Por favor ingresa qué estás buscando');
        return;
    }
    
    alert(`Buscando "${busqueda}" en ${ubicacion}\n\nResultados próximamente...`);
}

// ============================================
// FUNCIONES DEL MENÚ DE NAVEGACIÓN
// ============================================

function verVendedoresCercanos() {
    console.log('Ver Vendedores Cercanos');
    alert('🏪 Vendedores Cercanos\n\nMostrando negocios cerca de tu ubicación...');
}

function verOfertasDelBarrio() {
    console.log('Ver Ofertas del Barrio');
    alert('% Ofertas del Barrio\n\nDescubrí las mejores ofertas locales...');
}

function verFavoritos() {
    console.log('Ver Favoritos');
    alert('❤️ Mis Favoritos\n\nAquí verás tus negocios favoritos...');
}

function verMisRecorridos() {
    console.log('Ver Mis Recorridos');
    alert('📍 Mis Recorridos\n\nHistorial de tus rutas guardadas...');
}

// ============================================
// FUNCIONES DEL PERFIL
// ============================================

function verMiPerfil() {
    console.log('Ver Mi Perfil');
    alert('📱 Mi Perfil\n\nNombre: Martín\nPuntos: 120\nMiembro desde: Enero 2026');
}

function verHistorial() {
    console.log('Ver Historial');
    alert('📋 Historial\n\nÚltimas búsquedas y actividades...');
}

function verMisFavoritos() {
    console.log('Ver Mis Favoritos desde perfil');
    alert('💙 Mis Favoritos\n\n5 negocios guardados');
}

function cerrarSesion() {
    const confirmar = confirm('¿Estás seguro que deseas cerrar sesión?');
    
    if (confirmar) {
        usuarioActual = null;
        console.log('Sesión cerrada');
        alert('Sesión cerrada exitosamente');
        // Aquí podrías redirigir a la pantalla de login
        // mostrarLogin();
    }
}

// ============================================
// FUNCIONES DE EXPLORACIÓN
// ============================================

function explorarAhora() {
    console.log('Explorar Ahora');
    alert('🗺️ Explorar Ahora\n\nElige un modo de exploración:\n• Modo Caminar 🚶\n• Modo Auto 🚗');
}

function activarModoCaminar() {
    console.log('Activar Modo Caminar');
    alert('🚶 Modo Caminar Activado\n\n✓ Vista Street View\n✓ Burbujas informativas\n✓ Guía con chatbot\n\n¡Comienza a caminar virtualmente!');
    
    // Aquí irías a una nueva pantalla con el mapa
    // window.location.href = 'modo-caminar.html';
}

function activarModoAuto() {
    console.log('Activar Modo Auto');
    alert('🚗 Modo Auto Activado\n\n✓ Vista desde el auto\n✓ Selección de ventana\n✓ Negocios del lado elegido\n\n¡Comienza tu recorrido!');
    
    // Aquí irías a una nueva pantalla con el mapa
    // window.location.href = 'modo-auto.html';
}

// ============================================
// FUNCIONES DEL CHATBOT
// ============================================

function toggleChatbot() {
    chatbotActivo = !chatbotActivo;
    console.log('Chatbot:', chatbotActivo ? 'Activado' : 'Desactivado');
    
    if (chatbotActivo) {
        alert('🤖 Guía Chatbot Activada\n\n¡Hola! Te guiaré en tu recorrido contándote sobre los negocios que encontremos.');
    } else {
        alert('🤖 Guía Chatbot Desactivada');
    }
}

function cambiarVelocidad(velocidad) {
    velocidadActual = velocidad;
    console.log('Velocidad cambiada a:', velocidad);
    
    let mensaje = '';
    switch(velocidad) {
        case 'lento':
            mensaje = '🐌 Velocidad Lenta\nVerás cada detalle del recorrido';
            break;
        case 'medio':
            mensaje = '🚶 Velocidad Media\nBalance perfecto entre detalle y rapidez';
            break;
        case 'rapido':
            mensaje = '🏃 Velocidad Rápida\nRecorrido rápido con información clave';
            break;
    }
    
    alert(mensaje);
}

// ============================================
// FUNCIONES DEL MODO AUTO
// ============================================

function seleccionarVentana(lado) {
    ladoSeleccionado = lado;
    console.log('Ventana seleccionada:', lado);
    
    const mensaje = lado === 'izquierdo' 
        ? '⬅️ Ventana Izquierda\nViendo negocios del lado izquierdo de la calle'
        : '➡️ Ventana Derecha\nViendo negocios del lado derecho de la calle';
    
    alert(mensaje);
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Permitir búsqueda con Enter
function configurarEventos() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarBusqueda();
            }
        });
    }
}

// Simular carga de datos de negocios
function cargarNegocios() {
    console.log('Cargando negocios cercanos...');
    // Aquí irían las llamadas a Firebase o tu API
    return [
        { id: 1, nombre: 'Panadería Don José', tipo: 'Panadería', ubicacion: 'Buenos Aires' },
        { id: 2, nombre: 'Verdulería La Esquina', tipo: 'Verdulería', ubicacion: 'Buenos Aires' },
        { id: 3, nombre: 'Farmacia Central', tipo: 'Farmacia', ubicacion: 'Buenos Aires' },
    ];
}

// Obtener ubicación del usuario
function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('Ubicación obtenida:', position.coords.latitude, position.coords.longitude);
                alert(`📍 Ubicación obtenida\n\nLat: ${position.coords.latitude}\nLng: ${position.coords.longitude}`);
            },
            function(error) {
                console.error('Error al obtener ubicación:', error);
                alert('No se pudo obtener tu ubicación. Por favor habilita los permisos.');
            }
        );
    } else {
        alert('Tu navegador no soporta geolocalización');
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Made in Argentina - JavaScript cargado');
    
    // Configurar eventos
    configurarEventos();
    
    // Mensaje de bienvenida en consola
    console.log('%c🇦🇷 Made in Argentina', 'color: #0D47A1; font-size: 24px; font-weight: bold;');
    console.log('%cPlataforma de comercio local', 'color: #FFC107; font-size: 14px;');
});

// ============================================
// FUNCIONES PARA TESTING
// ============================================

// Función para probar todas las funcionalidades
function testearFunciones() {
    console.log('=== TESTING FUNCIONES ===');
    console.log('✓ mostrarLogin()');
    console.log('✓ mostrarRegistro()');
    console.log('✓ realizarBusqueda()');
    console.log('✓ verVendedoresCercanos()');
    console.log('✓ verOfertasDelBarrio()');
    console.log('✓ verFavoritos()');
    console.log('✓ verMisRecorridos()');
    console.log('✓ verMiPerfil()');
    console.log('✓ verHistorial()');
    console.log('✓ cerrarSesion()');
    console.log('✓ explorarAhora()');
    console.log('✓ activarModoCaminar()');
    console.log('✓ activarModoAuto()');
    console.log('✓ toggleChatbot()');
    console.log('✓ cambiarVelocidad(velocidad)');
    console.log('✓ seleccionarVentana(lado)');
    console.log('========================');
}

// Exponer funciones globalmente para debugging
window.testearFunciones = testearFunciones;
window.obtenerUbicacion = obtenerUbicacion;