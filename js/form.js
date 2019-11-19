const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

	let form = document.querySelector("#form-adiciona");
	// extraindo informacções do paciente.
	let paciente = obtemPacienteDoFormulario(form);
	//cria a Tr e a Td DO Paciente.
	let pacienteTr = montaTr(paciente);

	let erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeMensagensDeErros(erros);
		return;
	}

	let tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();
	let mensagensErros = document.querySelector("#mensagens-erro");
	mensagensErros.innerHTML = "";
});

function exibeMensagensDeErros(erros) {
	let ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro) {
		let li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteDoFormulario(form) {
	let paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaIMC(form.peso.value, form.altura.value)
	};

	return paciente;
}

function montaTr(paciente) {
	let pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	let td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}
