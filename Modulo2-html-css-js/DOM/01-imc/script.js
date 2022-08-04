function start() {
    var buttonCalculateImc = document.querySelector("#button-calculate-imc");
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var weight = document.querySelector("#input-weight");
    var height = document.querySelector("#input-height");

    weight.addEventListener('input', handleButtonClick);
    height.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height) {
    return weight / (height ** 2);
}

function handleButtonClick() {
    var weight = Number(document.querySelector("#input-weight").value);
    var height = Number(document.querySelector("#input-height").value);
    var imcResult = document.querySelector("#imc-result");

    var imc = calculateImc(weight, height);

    imcResult.textContent = imc.toFixed(2).replace('.', ',');
}

start();