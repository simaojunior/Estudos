const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	let paciente = pacientes[i];

	let tdPeso = paciente.querySelector(".info-peso");
	let peso = tdPeso.textContent;

	let tdAltura = paciente.querySelector(".info-altura");
	let altura = tdAltura.textContent;

	let tdImc = paciente.querySelector(".info-imc");

	let pesoEhvalido = validaPeso(peso);
	let alturaEhvalida = validaAltura(altura);

	if (!pesoEhvalido) {
		console.log("peso inválido");
		pesoEhvalido = false;
		tdImc.textContent = "peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhvalida) {
		console.log("altura inválida");
		alturaEhvalida = false;
		tdImc.textContent = "altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEhvalida && pesoEhvalido) {
		let imc = calculaIMC(peso, altura);
		tdImc.textContent = imc;
	}
}

function validaPeso(peso) {
	if (peso >= 0 && peso <= 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}

function calculaIMC(peso, altura) {
	let imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
