// Random Color Js 
randomColor = function (e) {
    e.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}

//  Set Input get Value and multiplited function 
function getAndSetInputValueThenMultiplited(inputOne, showValueOne, inputTwo, showValueTwo, lawValue1, lawValue2) {
    const firstInput = document.getElementById(inputOne);
    const firstInputString = firstInput.value;
    const firstInputNumber = parseFloat(firstInputString);
    const setInputOfA = document.getElementById(showValueOne);
    const secondInput = document.getElementById(inputTwo);
    const secondInputString = secondInput.value;
    const secondInputNumber = parseFloat(secondInputString);
    const setInputOfB = document.getElementById(showValueTwo);
    if (firstInputString.length == 0 || secondInputString.length == 0 || firstInputNumber < 0 || secondInputNumber < 0) {
        alert('Please Enter Positive Number');
        return ;
    }
    else {
        setInputOfA.innerText = firstInputNumber;
        setInputOfB.innerText = secondInputNumber;
        document.getElementById(lawValue1).innerText = firstInputNumber;
        document.getElementById(lawValue2).innerText = secondInputNumber;
        const multiplicationOfTwoInput = firstInputNumber * secondInputNumber;
        return multiplicationOfTwoInput;
    }
}

// Output Result Function
function outputResult(type, value) {
    
    if (typeof value === 'string' && value === 'NaN') {
        return;
    }
    else {
        const outputResultElement = document.getElementById('order-list');
        if (type == 'triangle') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Triangle  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
            
        }
        else if (type == 'rectangle') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Rectangle  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
            
        }
        else if (type == 'parallelogram') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Parallelogram  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
            
        }
        else if (type == 'rhombus') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Rhombus  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
           
        }
        else if (type == 'pentagon') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Pentagon  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
            
        }
        else if (type == 'ellipse') {
            outputResultElement.innerHTML = `${outputResultElement.innerHTML} <li class="mt-3">
        Ellipse  <span id="output-result" class="mx-3">${value}</span> cm<sup>2</sup> <button type="button" class="btn btn-primary">Covert to m <sup>2</sup></button></li>`
            
        }
    }

}