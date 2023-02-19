document.getElementById('blog-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'blog.html';
})
//  for Triangle Card
document.getElementById('triangle-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('traingle-first-input-filed', 'triangle-first-value', 'traingle-second-input-filed', 'triangle-second-value', 'traingle-law-value-1', 'traingle-law-value-2');
    const area = (multiplication * 0.5).toFixed(2);
    outputResult('triangle', area);

})

//  For Rectangle Card
document.getElementById('rectangle-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('rectangle-first-input-filed', 'rectangle-first-value', 'rectangle-second-input-filed', 'rectangle-second-value', 'rectangle-law-value-1', 'rectangle-law-value-2');
    const area = multiplication.toFixed(2);
    outputResult('rectangle', area);
})

// For Parallelogram Card
document.getElementById('parallelogram-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('parallelogram-first-input-filed', 'parallelogram-first-value', 'parallelogram-second-input-filed', 'parallelogram-second-value', 'parallelogram-law-value-1', 'parallelogram-law-value-2');
    const area = multiplication.toFixed(2);
    outputResult('parallelogram', area);
})

// For Rhombus Card
document.getElementById('rhombus-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('rhombus-first-input-filed', 'rhombus-first-value', 'rhombus-second-input-filed', 'rhombus-second-value', 'rhombus-law-value-1', 'rhombus-law-value-2');
    const area = (multiplication * 0.5).toFixed(2);
    outputResult('rhombus', area);
})

//  For Pentagon Card
document.getElementById('pentagon-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('pentagon-first-input-filed', 'pentagon-first-value', 'pentagon-second-input-filed', 'pentagon-second-value', 'pentagon-law-value-1', 'pentagon-law-value-2');
    const area = (multiplication * 0.5).toFixed(2);
    outputResult('pentagon', area);
})

// For Ellipse Card
document.getElementById('ellipse-button').addEventListener('click', function () {
    const multiplication = getAndSetInputValueThenMultiplited('ellipse-first-input-filed', 'ellipse-first-value', 'ellipse-second-input-filed', 'ellipse-second-value', 'ellipse-law-value-1', 'ellipse-law-value-2');
    const area = (3.14 * multiplication).toFixed(2);
    outputResult('ellipse', area);
})


