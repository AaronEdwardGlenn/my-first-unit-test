import isEven from './is-even';

function testNumber () {
const numberInput = document.getElementById('number-input'); 
const resultParagraph = document.getElementById('result');


const number = parseInt(numberInput.value); 
const reult = isEven(number); 

if(result) {
    resultParagraph.textContent ='even';

}
else {
    resultParagraph.textContent ='odd';

}



}

window.testNumber = testNumber; 