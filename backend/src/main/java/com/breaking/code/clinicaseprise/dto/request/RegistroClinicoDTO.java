package com.breaking.code.clinicaseprise.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistroClinicoDTO {

	@NotNull(message = "Paciente id no puede ser nulo")
	Integer pacienteId;

	@NotNull(message = "Medico id no puede ser nulo")
	Integer usuarioId;
	@NotBlank(message = "El motivo de la registro clinico es requerido")
	String motivo;
	@NotBlank(message = "El informe de la registro clinico es requerido")
	String informe;

}
