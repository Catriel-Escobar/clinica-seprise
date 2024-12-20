package com.breaking.code.clinicaseprise.repositories.projections;

import com.breaking.code.clinicaseprise.models.Honorario;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.Usuario;

import java.util.List;

public interface MedicoProyeccion {
	Integer getMedicoId();
	Usuario getUsuario();
	List<RegistroClinico> getRegistrosClinicos();
	List<Turno> getTurnos();
	List<Honorario> getHonorarios();
	EspecialidadProyeccion getEspecialidad();
}
