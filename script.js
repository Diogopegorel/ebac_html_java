function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if(campoA >= campoB){
        document.getElementById("msg").innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
    } else {
        document.getElementById("msg").innerHTML = "Formulário válido";
    }
}