package com.breaking.code.clinicaseprise.repositories.projections;

import com.breaking.code.clinicaseprise.models.RegistroClinico;

import java.time.LocalDate;
import java.util.List;

public interface PacienteProyeccion {

	Integer getPacienteId();
	String getNombre();
	String getApellido();
	String getDni();
	String getSexo();
	String getTipoSangre();
	LocalDate getFechaNac();
	String getObraSocial();
	List<RegistroClinico> getRegistrosClinicos();

}
