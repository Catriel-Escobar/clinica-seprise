package com.breaking.code.clinicaseprise.dto.response;

import com.breaking.code.clinicaseprise.models.Especialidad;

import java.math.BigDecimal;

public record MedicoResponseDTO(
		Integer medicoId,
        String nombre,
        String apellido,
        Integer especialidadId,
		String nombreEspecialidad,
		Integer tiempoConsulta,
		BigDecimal precio,
		BigDecimal nomenclador
) {
}
