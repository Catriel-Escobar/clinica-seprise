package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PacienteRepository extends JpaRepository<Paciente,Integer> {
	@Query(value = "SELECT * FROM pacientes p WHERE p.dni = :dni",nativeQuery = true)
	Optional<Paciente> findByDni(@Param("dni") String dni);
}
