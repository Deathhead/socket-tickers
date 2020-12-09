// Comando para establecer la conexión
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al Servidor');


});

socket.on('disconnect', function() {
    console.log('Desconectado del Servidor');

});

// on estado Actual

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});