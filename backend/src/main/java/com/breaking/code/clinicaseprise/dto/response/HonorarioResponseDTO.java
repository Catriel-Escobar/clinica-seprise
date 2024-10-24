package com.breaking.code.clinicaseprise.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;

public record HonorarioResponseDTO(
		Integer honorarioId,
		Boolean pagado,
		LocalDate fechaPago,
		String medicoNombre,

		BigDecimal especialidadPrecio
) {
}
