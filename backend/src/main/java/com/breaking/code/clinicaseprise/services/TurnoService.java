package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.models.Turno;

public interface TurnoService {
	TurnoResponseDTO create(TurnoRequestDTO dto);
	Turno findByMedicoId(Integer medicoId);
	Turno findByPacienteId(Integer pacienteId);
}
