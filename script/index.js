document.getElementById('submitButton').addEventListener('click', function (e){
  e.preventDefault();

  const nombre = document.getElementById('name').value;
  const date   = document.getElementById('date').value;

  const appointment = document.createElement('div');

  appointment.className = 'appointment';

  appointment.innerHTML = `
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>Fecha y hora:</strong> ${date} <br>
  `;

  document.getElementsByClassName('appointmentsList')[0].appendChild(appointment);
  nombre.value = '';
  date.value = '';
});
