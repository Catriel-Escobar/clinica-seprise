package com.breaking.code.clinicaseprise.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public record TurnoResponseDTO(
			Integer turnoId,
			LocalDate fecha,
			LocalTime hora,
			Boolean acreditado,
			Boolean esSobreTurno,
			Integer pacienteId,
			String pacienteName,
			String pacienteApellido,
			String pacienteDni,
			String pacienteSexo,
			Integer medicoId,
			String medicoNombre,
			String medicoApellido,
			String especialidadNombre,
			BigDecimal especialidadPrecio
) {}
