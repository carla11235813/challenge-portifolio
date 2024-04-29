const form = document.querySelector(".formcontato__form");
const inputs = document.querySelectorAll(".formcontato__input");
const mensagem = document.getElementById('mensagem')
var spans = document.querySelectorAll(".formcontato__msg__span")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    nomeValidate();
    AssuntoValidate();
    emailValidate();
    textareaValidate();
})

function setError(index, msg) {
    spans[index].style.display = "block";
    spans[index].textContent = msg
}

function removeError(index) {
    spans[index].textContent = ''
    spans[index].style.display = "none";
}

function nomeValidate() {
    if (inputs[0].value.length > 50) {
        setError(0, "Esse campo deve ter no máximo 50 caracteres")
    } else if (inputs[0].value.trim() === '') {
        setError(0, "Este campo precisa ser preenchdio")
    } else {
        removeError(0)
    }
}

function emailValidate() {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(inputs[1].value)) {
        removeError(1);
    } else if (inputs[1].value.trim() === '') {
        setError(1, "Este campo precisa ser preenchdio")
    } else {
        setError(1, "digite um e-mail válido");
    }
}

function AssuntoValidate() {
    if (inputs[2].value.length > 50) {
        setError(2, "Esse campo deve ter no máximo 50 caracteres")
    } else if (inputs[2].value.trim() === '') {
        setError(2, "Este campo precisa ser preenchdio")
    } else {
        removeError(2)
    }
}

function textareaValidate() {
    if (mensagem.value.length > 300) {
        setError(3, "Esse campo deve ter no máximo 300 caracteres")
    } else if (mensagem.value.trim() === '') {
        setError(3, "Este campo precisa ser preenchdio")
    } else {
        removeError(3)
    }
}
