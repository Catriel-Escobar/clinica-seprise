package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<Paciente,Integer> {
}
