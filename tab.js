// Tab Function

const buttonOne = document.querySelector('.tab1');
const buttonTwo = document.querySelector('.tab2');
const buttonThree = document.querySelector('.tab3');

const firstPage = document.querySelector('.content1');
const secondPage = document.querySelector('.content2');
const thridPage = document.querySelector('.content3');


buttonOne.addEventListener('click', () => {
    firstPage.classList.remove('close')
    secondPage.classList.add('close')
    thridPage.classList.add('close')

    buttonOne.classList.add('active')
    buttonTwo.classList.remove('active')
    buttonThree.classList.remove('active')
});

buttonTwo.addEventListener('click', () => {
    firstPage.classList.add('close')
    secondPage.classList.remove('close')
    thridPage.classList.add('close')
 
    
    buttonOne.classList.remove('active')
    buttonTwo.classList.add('active')
    buttonThree.classList.remove('active')
  
});

buttonThree.addEventListener('click', () => {
    firstPage.classList.add('close')

    secondPage.classList.add('close')
    thridPage.classList.remove('close')
    

    buttonOne.classList.remove('active')
    buttonTwo.classList.remove('active')
    buttonThree.classList.add('active')

});

//Q&A Section

const buttonFour = document.querySelector('.btn4');
const buttonFive = document.querySelector('.btn5');
const buttonSix = document.querySelector('.btn6');
const buttonSeven = document.querySelector('.btn7');

const firstAnswer = document.querySelector('.answer-1');
const secondAnswer = document.querySelector('.answer-2');
const thirdAnswer = document.querySelector('.answer-3');
const fourthAnswer = document.querySelector('.answer-4');

const arrowOne = document.querySelector('.arr1');
const arrowTwo = document.querySelector('.arr2');
const arrowThree = document.querySelector('.arr3');
const arrowFour = document.querySelector('.arr4');


buttonFour.addEventListener('click', () => {
    firstAnswer.classList.toggle('open')
    arrowOne.classList.toggle('reverse')
});
buttonFive.addEventListener('click', () => {
    secondAnswer.classList.toggle('open')
    arrowTwo.classList.toggle('reverse')
});
buttonSix.addEventListener('click', () => {
    thirdAnswer.classList.toggle('open')
    arrowThree.classList.toggle('reverse')
});
buttonSeven.addEventListener('click', () => {
    fourthAnswer.classList.toggle('open')
    arrowFour.classList.toggle('reverse')
});

// Hamburger Motion

const Hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu')
const Close = document.querySelector('.close-modal');

Hamburger.addEventListener('click', () => {
    Hamburger.classList.add('none')
    Menu.classList.add('open')

});
Close.addEventListener('click', () => {
    Hamburger.classList.remove('none')
    Menu.classList.remove('open')
});