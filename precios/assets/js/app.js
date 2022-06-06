const section_diez__panel__preguntas__item__titulo = document.querySelectorAll('.section_diez__panel__preguntas__item__titulo');
const section_diez__panel__preguntas__item = document.querySelectorAll('.section_diez__panel__preguntas__item');
const men = document.querySelector('.men')
const menu__StyledHamburgerButton_sdn9y6 = document.querySelector('.menu__StyledHamburgerButton-sdn9y6-1');
for (let i = 0; i < section_diez__panel__preguntas__item__titulo.length; i++) {
  section_diez__panel__preguntas__item__titulo[i].addEventListener('click', function () {
    section_diez__panel__preguntas__item[i].classList.toggle('active');

  });
}


menu__StyledHamburgerButton_sdn9y6.addEventListener('click', function () {
  console.log()
  if (menu__StyledHamburgerButton_sdn9y6.classList[1] === 'eCxtrN') {
    menu__StyledHamburgerButton_sdn9y6.classList.remove('eCxtrN');
    menu__StyledHamburgerButton_sdn9y6.classList.add('eVRjg');

    men.classList.add('active')
    men.classList.add('slide-in-right')
  } else {
    menu__StyledHamburgerButton_sdn9y6.classList.remove('eVRjg');
    menu__StyledHamburgerButton_sdn9y6.classList.add('eCxtrN');

    men.classList.remove('slide-in-right')
    men.classList.add('slide-out-right')

    men.classList.remove('slide-out-right')
    men.classList.remove('active')
  }
});

const bt_aa = document.querySelectorAll('.bt-aa');
for (let i = 0; i < bt_aa.length; i++) {
  bt_aa[i].addEventListener('click', function () {
    if (i == 0) {
      if (bt_aa[i].classList[2] === 'active') {
      } else {
        // activando mensual
        bt_aa[0].classList.add('active');
        bt_aa[1].classList.remove('active');
        document.querySelector('.section_tres__pannel_c.mensual').classList.add('active');
        document.querySelector('.section_tres__pannel_c.anual').classList.remove('active');
        console.log('a')
      }
    } else if (i == 1) {
      if (bt_aa[i].classList[2] === 'active') {

      } else {

        bt_aa[0].classList.remove('active');
        bt_aa[1].classList.add('active');
        document.querySelector('.section_tres__pannel_c.mensual').classList.remove('active');
        document.querySelector('.section_tres__pannel_c.anual').classList.add('active');
      }
    }

  });
}
