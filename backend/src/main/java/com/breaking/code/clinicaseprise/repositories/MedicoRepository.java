package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MedicoRepository  extends JpaRepository<Medico,Integer> {

	@Query("SELECT m FROM Medico m")
	List<MedicoProyeccion> findAllMedicosProjected();
}
