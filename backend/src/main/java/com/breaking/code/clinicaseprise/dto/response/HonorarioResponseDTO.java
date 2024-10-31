package com.breaking.code.clinicaseprise.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

public record HonorarioResponseDTO(
		Integer honorarioId,
		Boolean pagado,
		LocalDate fechaPago,
		String medicoNombre,

		LocalDate fechaTurno,
		LocalTime horaTurno,

		String nombrePaciente,
		String apellidoPaciente,


		BigDecimal especialidadPrecio
) {
}
