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

const service = document.querySelectorAll('.service-o');
for (let i = 0; i < service.length; i++) {
  service[i].addEventListener('click', () => {
    document.querySelector('.salidos').classList.toggle('active');

    let sc = service[i].classList[1];
    document.querySelector(`.salidos .${sc}`).classList.toggle('active');
    document.querySelector(`.salidos .${sc}`).classList.toggle('slide-in-right');
    setTimeout(() => {
      document.querySelector(`.salidos .${sc}`).classList.toggle('slide-in-right');
    }, 350);
  });
}

const close_cpn = document.querySelectorAll('.close_cpn');
for (let i = 0; i < close_cpn.length; i++) {
  close_cpn[i].addEventListener('click', () => {
    let sc = close_cpn[i].classList[1];
    document.querySelector(`.salidos .${sc}`).classList.toggle('active');
    document.querySelector('.salidos').classList.toggle('active');
  });
}
