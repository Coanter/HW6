function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Введите оба числа!";
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на ноль";
            break;
    }
    document.getElementById("result").textContent = `Результат: ${result}`;
}
