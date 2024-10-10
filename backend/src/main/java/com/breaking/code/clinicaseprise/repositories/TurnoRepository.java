package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface TurnoRepository extends JpaRepository<Turno,Integer> {
	@Query(value = "SELECT * FROM turnos as t WHERE t.medico_id = :medicoId",nativeQuery = true)
	Optional<Turno> findByMedicoId(@Param("medicoId") Integer medicoId);

	@Query(value = "SELECT * FROM turnos as t WHERE t.paciente_id = :pacienteId",nativeQuery = true)
	Optional<Turno> findByPacienteId(@Param("pacienteId") Integer pacienteId);
}
