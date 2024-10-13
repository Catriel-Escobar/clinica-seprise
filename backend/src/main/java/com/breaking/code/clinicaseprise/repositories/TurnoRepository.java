package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface TurnoRepository extends JpaRepository<Turno,Integer> {
	@Query(value = "SELECT * FROM turnos as t WHERE t.medico_id = :medicoId",nativeQuery = true)
	List<Turno> findByMedicoId( @Param("medicoId") Integer medicoId);

	@Query(value = "SELECT * FROM turnos as t WHERE t.paciente_id = :pacienteId",nativeQuery = true)
	List<Turno> findByPacienteId(@Param("pacienteId") Integer pacienteId);

	@Query(value = "SELECT * FROM turnos as T where t.medico_id = :medicoId AND t.fecha = :horaFecha", nativeQuery = true)
	Optional<Turno> findByFechaHoraMedico( @Param( "medicoId" ) Integer medicoId, @Param( "horaFecha" )LocalDateTime horaFecha );
}
