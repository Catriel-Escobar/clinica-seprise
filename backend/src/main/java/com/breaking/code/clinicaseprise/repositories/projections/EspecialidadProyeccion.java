package com.breaking.code.clinicaseprise.repositories.projections;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;


public interface EspecialidadProyeccion {

	Integer getEspecialidadId();
	String getNombreEspecialidad();
	Integer getTiempoConsulta();
	BigDecimal getPrecio();
	BigDecimal getNomenclador();
}
