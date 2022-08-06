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

function calculateRangeImc(imc) {
    if (imc < 16.0) {
        return 'inválido';
    } else if (imc <= 16.9) {
        return 'Muito abaixo do peso';
    } else if (imc <= 18.4) {
        return 'Abaixo do peso';
    } else if (imc <= 24.9) {
        return 'Peso normal';
    } else if (imc <= 29.9) {
        return 'Acima do peso';
    } else if (imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc <= 40.0) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}

function handleButtonClick() {
    var weight = Number(document.querySelector("#input-weight").value);
    var height = Number(document.querySelector("#input-height").value);
    var imcResult = document.querySelector("#imc-result");
    var faixaResult = document.querySelector("#faixa-result");

    var imc = calculateImc(weight, height);
    var faixa = calculateRangeImc(imc);

    imcResult.textContent = imc.toFixed(2).replace('.', ',');
    faixaResult.textContent = faixa;
}

start();