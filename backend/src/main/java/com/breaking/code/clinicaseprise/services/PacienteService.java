package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.models.Paciente;

public interface PacienteService {
	Paciente create(PacienteRequestDTO dto);
	Paciente findByDni(String dni);
}
