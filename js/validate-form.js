function validaPaciente(paciente) {
	let erros = [];

	if (paciente.nome.length == 0) {
		erros.push("O nome não pode ser em branco.");
	}

	if (!validaPeso(paciente.peso)) {
		erros.push("Peso inválido");
	}

	if (!validaAltura(paciente.altura)) {
		erros.push("Altura inválida");
	}

	if (paciente.gordura.length == 0) {
		erros.push("Gordura não pode ser em branco.");
	}

	if (paciente.peso.length == 0) {
		erros.push("Peso não pode ser em branco.");
	}

	if (paciente.altura.length == 0) {
		erros.push("Altura não pode ser em branco.");
	}

	return erros;
}
