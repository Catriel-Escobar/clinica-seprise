package com.breaking.code.clinicaseprise.repositories.projections;

import com.breaking.code.clinicaseprise.models.Honorario;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.Usuario;

import java.util.List;

public interface MedicoProyeccion {
	int getMedicoId();
	Usuario getUsuario(); // Asegúrate de que Usuario tenga una proyección o solo devuelvas los campos necesarios
	List<RegistroClinico> getRegistrosClinicos(); // Si quieres incluir estos, podrías hacer lo mismo
	List<Turno> getTurnos(); // Lo mismo aquí, pero si no necesitas la lista puedes omitir
	List<Honorario> getHonorarios(); // Omitir si no necesitas
	EspecialidadProyeccion getEspecialidad();
}
