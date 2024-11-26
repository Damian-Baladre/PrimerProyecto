
const listText = document.querySelectorAll('.timer-Text');

setInterval(() => {
    let fecha = new Date();

    let hora =  String(hora.getHours()).padStart(2, '0');
    let minutos = String(hora.getMinutes()).padStart(2, '0');
    let segundos = String(hora.getseconds()).padStart(2, '0');
    let horarios = [hora, minutos, segundos];

    listText.forEach((item, 1) => {
        item.textContent = horarios[i];
    });
}, 1000);