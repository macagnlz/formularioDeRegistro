$(document).ready(function() {
  $('#miFormularioDeRegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#miFormularioDeRegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
        alert('Antes de enviar');
      }
    }).done(function(data) {
      alert('Datos Enviados');
      submitButton.prop('disabled', false);

          $.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/881a5976d674/submissions.json?api_token=2835fbae73f81254b40d0d64d0620e62',
      accept: {
        javascript: 'application/javascript'
      }
    }).done(function(data) {
      console.log(data);
    });
    });
  });
});