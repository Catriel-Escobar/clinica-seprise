package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.RegistroClinico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RegistroClinicoRepository extends JpaRepository<RegistroClinico,Integer> {

	@Query(value = "SELECT R FROM RegistroClinico R WHERE R.paciente.pacienteId = :pacienteId")
	List<RegistroClinico> findByPacienteId(@Param( "pacienteId" ) Integer pacienteId );
}
