package com.breaking.code.clinicaseprise.dto.request;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PacienteRequestDTO {
	@NotBlank
	private String nombre;
	@NotBlank
	private String apellido;
	@NotNull
	private Boolean obraSocial;
	@NotBlank
	@Pattern(regexp = "^[0-9]{8}$", message = "El DNI debe tener exactamente 8 dígitos numéricos.")
	private String dni;
	@NotBlank
	@Pattern(regexp = "^H|M$", message = "Solo admite H o M")
	private String sexo;
	@NotBlank
	@Pattern(regexp = "^(A|B|AB|O)[+-]$", message = "Los tipos de sangre validos son A+, B-, AB+ y O-")
	private String tipoSangre;

	private LocalDate fechaNacimiento;

}
