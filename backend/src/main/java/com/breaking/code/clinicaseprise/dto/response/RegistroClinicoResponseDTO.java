package com.breaking.code.clinicaseprise.dto.response;

import java.time.LocalDate;

public record RegistroClinicoResponseDTO(
	Integer registroClinicoId,
	LocalDate fecha,
	String motivo,
	String informe,
	Integer medicoId,
	String medicoNombre,
	String nombreEspecialidad
) {
}
