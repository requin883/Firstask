const formValue = document.querySelector('#form-value');
const divToEdit = document.querySelector('.to-edit');
const showArrayOnScreen = document.createElement('p');
const newForm = document.createElement('form');
const input = document.createElement('input');
const label = document.createElement('label');
const btnToSubmit = document.createElement('button');
const errorMsg = document.querySelector('.error-msg');
const firstBtn = document.querySelector('.first-btn');
const firstInputValue = document.querySelector('.values-2');
errorMsg.classList.add('text-red-500', 'transition-[display]', 'hidden');
errorMsg.innerText = 'Por favor ingrese un valor válido';
let arrayToProcess = [];

const createNewNumbersForm = (index) => {
  newForm.appendChild(document.createElement('label')).innerText = `Por favor ingrese el valor #${index}:`;
  let newInputChild = newForm.appendChild(document.createElement('input'));
  newInputChild.setAttribute('name', `value${index}`);
  newInputChild.setAttribute('type', 'number');
  newInputChild.classList.add('values');
}

const toShowArray = (arr) => {
  const valueToShow = longestIncreasingSequence(arr)
  showArrayOnScreen.innerText = `This is your array [${arr.join(',')}] and this is the result ${valueToShow}`;
  showArrayOnScreen.classList.add('col-span-4', 'mx-auto');
  newForm.appendChild(showArrayOnScreen);
  setTimeout(() => {
    location.reload();
  }, 5000);
}

const addValuesToArray = (e) => {
  e.preventDefault();
  const arrayValuesContainers = document.querySelectorAll('.values');
  arrayValuesContainers.forEach(element => {
    arrayToProcess.push(+element.value);
  })
  toShowArray(arrayToProcess);
}

formValue.addEventListener('submit', (e) => {
  e.preventDefault();
  let x = document.querySelector('#arr-length').value;
  if (x == "") {
    errorMsg.classList.remove('hidden');
    setTimeout(() => {
      errorMsg.classList.add('hidden');
    }, 1500);
    return false;
  } else {
    let valuesToRequest = e.target[0].value;
    formValue.classList.add('hide');
    for (let i = 1; i <= valuesToRequest; i++) {
      createNewNumbersForm(i);
    }
    btnToSubmit.setAttribute("type", "submit");
    btnToSubmit.classList.add('btn', 'last-btn');
    btnToSubmit.innerText = 'Ingresar';
    newForm.classList.add('array-container');
    const newFormTitle = document.createElement('h2');
    newFormTitle.innerText = 'Ingrese los valores a calcular';
    newFormTitle.classList.add('pb-[10px]');
    newFormTitle.classList.add('px-[20px]');
    divToEdit.append(newFormTitle);
    newForm.appendChild(btnToSubmit);
    divToEdit.appendChild(newForm);
    const arrValuesContainer = document.querySelectorAll('.values');
    arrValuesContainer.forEach(element => {
      element.setAttribute('required', '');
      element.setAttribute('min', '1');
      element.setAttribute('max', '100');
    })
    newForm.addEventListener('submit', addValuesToArray);
  }
})


function longestIncreasingSequence(arr) {
  let sizeOfLIS = [];
  let sizeOfCurrentLIS = 1;
  let currentValue = 0;
  for (let i = 0; i <= arr.length; i++) {
    currentValue = arr[i];
    for (let j = 1; j <= arr.length; j++) {
      if (arr[j] > currentValue) {
        sizeOfCurrentLIS++;
        currentValue = arr[j]
      }
      if (j == arr.length) {
        sizeOfLIS.push(sizeOfCurrentLIS);
        sizeOfCurrentLIS = 0;
      }
    }
    return Math.max(sizeOfLIS);
  }
}



//Return the length of the longest increasing Sequence
// Ex: [9,9,4,2] res: 1 / 