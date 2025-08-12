function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
