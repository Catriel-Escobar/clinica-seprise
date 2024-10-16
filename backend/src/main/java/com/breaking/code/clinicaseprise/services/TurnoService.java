package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.models.Turno;

import java.time.LocalDate;
import java.util.List;

public interface TurnoService {
	TurnoResponseDTO create(TurnoRequestDTO dto);
	List<Turno> findByMedicoId( Integer medicoId);
	List<Turno> findByPacienteId(Integer pacienteId);

	List<TurnoResponseDTO> findByMedicoId( Integer medicoId, LocalDate fecha );

	Turno findById(Integer id);

	Void delete( Integer id );
//	String armandoAgenda();
}
