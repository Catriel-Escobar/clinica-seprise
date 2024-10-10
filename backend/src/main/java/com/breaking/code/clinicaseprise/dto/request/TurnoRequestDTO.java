package com.breaking.code.clinicaseprise.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TurnoRequestDTO {
	@NotBlank
	@Pattern(regexp = "^[0-9]{8}$", message = "El DNI debe tener exactamente 8 dígitos numéricos.")
	private String dni;
	@NotNull
	private Integer medicoId;
	@NotNull
	private LocalDateTime fecha;
}
