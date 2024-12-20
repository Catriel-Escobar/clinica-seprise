package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface TurnoRepository extends JpaRepository<Turno,Integer> {
	@Query(value = "SELECT * FROM turnos as t WHERE t.medico_id = :medicoId",nativeQuery = true)
	List<Turno> findByMedicoId( @Param("medicoId") Integer medicoId);
	@Query(value = "SELECT * FROM turnos as t WHERE t.medico_id = :medicoId AND t.fecha = :fecha",nativeQuery = true)
	List<Turno> findByMedicoId( @Param("medicoId") Integer medicoId,@Param( "fecha" ) LocalDate fecha);

	@Query(value = "SELECT * FROM turnos as t WHERE t.paciente_id = :pacienteId",nativeQuery = true)
	List<Turno> findByPacienteId(@Param("pacienteId") Integer pacienteId);


	@Query(value = "SELECT * FROM turnos as t WHERE t.paciente_id = :pacienteId ORDER BY t.fecha DESC LIMIT 1", nativeQuery = true)
	Optional<Turno> findLastByPacienteId(@Param("pacienteId") Integer pacienteId);
	@Query(value = "SELECT * FROM turnos as T where t.medico_id = :medicoId AND t.fecha = :fecha AND HOUR(t.hora)  = HOUR(:hora) ", nativeQuery = true)
	List<Turno> findByFechaHoraMedico( @Param( "medicoId" ) Integer medicoId, @Param( "fecha" )LocalDate fecha,@Param( "hora" ) LocalTime hora );
}
