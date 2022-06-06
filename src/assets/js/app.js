const section_diez__panel__preguntas__item__titulo = document.querySelectorAll('.section_diez__panel__preguntas__item__titulo');
const section_diez__panel__preguntas__item = document.querySelectorAll('.section_diez__panel__preguntas__item');
const men = document.querySelector('.men')
for (let i = 0; i < section_diez__panel__preguntas__item__titulo.length; i++) {
  section_diez__panel__preguntas__item__titulo[i].addEventListener('click', function () {
    section_diez__panel__preguntas__item[i].classList.toggle('active');

  });
}

const menu__StyledHamburgerButton_sdn9y6 = document.querySelector('.menu__StyledHamburgerButton-sdn9y6-1');

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