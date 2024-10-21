package com.breaking.code.clinicaseprise.dto.response;

import java.time.LocalDate;
import java.util.List;

public record PacienteResponseDTO(
	Integer pacienteId,
	String nombre,
	String apellido,
	String dni,
	LocalDate fechaNacimiento,
	Boolean obraSocial,
	String tipoSangre,
	String sexo,




	List<RegistroClinicoResponseDTO> registrosClinicos
) {
	public void setRegistrosClinicos( RegistroClinicoResponseDTO registroClinicoResponses ) {
		this.registrosClinicos.add( registroClinicoResponses );
	}



}
