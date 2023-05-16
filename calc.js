/* ###Primera forma sencilla de calculadora

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")

document.getElementById("+").addEventListener("click", sumar)

function sumar() {
    resultado.innerHTML = Number(num1.value) + Number(num2.value)
}

document.getElementById("-").addEventListener("click", restar)

function restar() {
    const num1Convertido = parseFloat(num1.value)
    const num2Convertido = parseFloat(num2.value)

    resultado.innerHTML = num1Convertido - num2Convertido
}

document.getElementById("*").addEventListener("click", multiplicar)

function multiplicar() {
    resultado.innerHTML = parseFloat(num1.value) * parseFloat(num2.value)
}

document.getElementById("/").addEventListener("click", dividir)

function dividir() {
    resultado.innerHTML = parseFloat(num1.value) / parseFloat(num2.value)
}*/

//calculadora forma mas compleja con resultado de colores

function operaciones(op) {

    let ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };



    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;


    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
    } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
        //Si se han introducido los números en ámbas cajas, operamos:
        switch (op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                if (resultado >= 0) {
                    document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + "Resultado: " + resultado + "</span>";
                } else {
                    document.getElementById('resultado').innerHTML = "<span style='color: red;'>" + "Resultado: " + resultado + "</span>";
                }
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                if (resultado >= 0) {
                    document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + "Resultado: " + resultado + "</span>";
                } else {
                    document.getElementById('resultado').innerHTML = "<span style='color: red;'>" + "Resultado: " + resultado + "</span>";
                }
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                if (resultado >= 0) {
                    document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + "Resultado: " + resultado + "</span>";
                } else {
                    document.getElementById('resultado').innerHTML = "<span style='color: red;'>" + "Resultado: " + resultado + "</span>";
                }
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                if (resultado >= 0) {
                    document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + "Resultado: " + resultado + "</span>";
                } else {
                    document.getElementById('resultado').innerHTML = "<span style='color: red;'>" + "Resultado: " + resultado + "</span>";
                }
                break;

        }
    }

}