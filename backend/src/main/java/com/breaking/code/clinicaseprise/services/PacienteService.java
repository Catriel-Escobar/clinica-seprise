package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.PacienteResponseDTO;
import com.breaking.code.clinicaseprise.models.Paciente;

public interface PacienteService {
	Paciente create(PacienteRequestDTO dto);
	PacienteResponseDTO findByDniDto( String dni);


	Paciente findByDni( String dni );
}
