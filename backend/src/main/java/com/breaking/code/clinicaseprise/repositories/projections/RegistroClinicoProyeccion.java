package com.breaking.code.clinicaseprise.repositories.projections;

import java.time.LocalDate;

public interface RegistroClinicoProyeccion {
	Integer getRegistroClinicoId();
	MedicoProyeccion getMedico();
	LocalDate getFecha();
	String getInforme();
}