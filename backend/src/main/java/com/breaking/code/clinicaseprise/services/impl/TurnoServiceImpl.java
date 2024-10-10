package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.TurnoMapper;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.repositories.TurnoRepository;
import com.breaking.code.clinicaseprise.services.MedicoService;
import com.breaking.code.clinicaseprise.services.PacienteService;
import com.breaking.code.clinicaseprise.services.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TurnoServiceImpl implements TurnoService {

	private final TurnoRepository turnoRepository;
	private final PacienteService pacienteService;
	private final MedicoService medicoService;
	@Autowired
	private TurnoMapper turnoMapper;
	public TurnoServiceImpl (TurnoRepository turnoRepository, PacienteService pacienteService, MedicoService medicoService) {
		this.turnoRepository = turnoRepository;
		this.pacienteService = pacienteService;
		this.medicoService = medicoService;
	}

	@Override
	public TurnoResponseDTO create (TurnoRequestDTO dto) {
		Paciente paciente = pacienteService.findByDni(dto.getDni());
		Medico medico = medicoService.findById(dto.getMedicoId());
		Turno turno = new Turno();
		turno.setMedico(medico);
		turno.setPaciente(paciente);
		turno.setFecha(dto.getFecha());
		turno = turnoRepository.save(turno);
		return turnoMapper.toDto(turno);

	}

	@Override
	public Turno findByMedicoId (Integer medicoId) {
		Turno turno = turnoRepository.findByMedicoId(medicoId).orElseThrow(() -> new NotFoundException(String.format(
					"Turno para el medico con id %s no encontrado!",medicoId.toString())));
		return turno;
	}

	@Override
	public Turno findByPacienteId (Integer pacienteId) {
		Turno turno = turnoRepository.findByMedicoId(pacienteId).orElseThrow(() -> new NotFoundException(String.format(
					"Turno para el medico con id %s no encontrado!",pacienteId.toString())));
		return turno;
	}
}
