window.addEventListener('load', () => {
  let element = document.createElement('div');
  element.id = 'calc';
  document.body.appendChild(element); // create div

  element = document.createElement('INPUT'); // init firstInput
  element.id = 'firstInput';
  let selector = document.body.querySelector('#calc'); // select main div
  selector.appendChild(element);

  element = document.createElement('p');
  element.id = 'firstPar';
  selector.appendChild(element); // create firstPar

  element = document.createElement('INPUT');
  element.id = 'secondInput';
  selector.appendChild(element); // create secondInput

  element = document.createElement('p');
  element.id = 'secondPar';
  selector.appendChild(element); // create secondPar

  element = document.createElement('BUTTON');
  element.id = 'button';
  element.style.cssText = 'height: 21px; width: 173px;';
  selector.appendChild(element); // create button
  element.textContent = 'Посчитать';

  element = document.createElement('p');
  element.id = 'resultPar';
  selector.appendChild(element); // create resultPar

  selector = document.body.querySelector('#button'); // select button

  selector.addEventListener('click', () => {
    const firstNumber = Number(document.body.querySelector('#firstInput').value); // find firstNumber
    const secondNumber = Number(document.body.querySelector('#secondInput').value); // find secondNumber

    selector = document.body.querySelector('#firstPar');
    if (selector.hasChildNodes()) {
      selector.querySelector('.error-message').remove(); // clear firstPar
    }
    selector = document.body.querySelector('#secondPar');
    if (selector.hasChildNodes()) {
      selector.querySelector('.error-message').remove(); // clear secondPar
    }
    selector = document.body.querySelector('#resultPar');
    if (selector.hasChildNodes()) {
      selector.querySelector('#result').remove(); // clear resultPar
    }

    if (Number.isNaN(firstNumber)) {
      element = document.createElement('div');
      selector = document.body.querySelector('#firstPar'); // select firstPar
      element.className = 'error-message';
      selector.appendChild(element); // create error-message
      element.textContent = 'Это не число';
    }
    if (Number.isNaN(secondNumber)) {
      element = document.createElement('div');
      selector = document.body.querySelector('#secondPar'); // select secondPar
      element.className = 'error-message';
      selector.appendChild(element); // create error-message
      element.textContent = 'Это не число';
    }
    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
      element = document.createElement('div');
      selector = document.body.querySelector('#resultPar'); // select resultPar
      element.style.cssText = 'height: 21px; width: 173px;';
      element.id = 'result';
      selector.appendChild(element); // create result
      element.textContent = Number(firstNumber + secondNumber);
    }
  });
});
