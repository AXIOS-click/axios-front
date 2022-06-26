
const data_a_mandar = {
  servicios: [],
  presu: ""
}
const servicio_d = document.querySelectorAll('.desaparecidote.servicio_d');
const PRESU_d = document.querySelectorAll('.desaparecidote.PRESU');

servicio_d.forEach(elem => {
  elem.addEventListener('click', e => {
    if (data_a_mandar.servicios.includes(e.target.dataset.dta)){
      data_a_mandar.servicios.splice(data_a_mandar.servicios.indexOf(e.target.dataset.dta), 1);
    } else {
      data_a_mandar.servicios.push(e.target.dataset.dta);
    }
    console.log(data_a_mandar.servicios)
  });
});
PRESU_d.forEach(elem => {
  elem.addEventListener('click', e => {
      data_a_mandar.presu = e.target.dataset.dta1;
    console.log(data_a_mandar.presu)
  });
});

let sendMail = ()=>  {

    let subject = document.querySelector('#email').value;
    let name = document.getElementById('name').value;
    let c = document.getElementById('contact-message').value;
    let body = ``;

    body += `~ ${subject} %0A~ ${name} %0A~ ${data_a_mandar.servicios} %0A~ ${data_a_mandar.presu} %0A~ ${c}`;
    
  let link = `bryherrera55@gmail.com?&subject=${subject}&body=${body}`;

  window.location.href = "mailto:" + link;
}

let agender = document.querySelector('#agender');

agender.addEventListener('click', (e) => {
  sendMail();
});