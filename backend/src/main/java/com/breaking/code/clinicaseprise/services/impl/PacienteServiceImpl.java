package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.PacienteMapper;
import com.breaking.code.clinicaseprise.models.HistoriaClinica;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.repositories.PacienteRepository;
import com.breaking.code.clinicaseprise.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PacienteServiceImpl implements PacienteService {
	@Autowired
	PacienteMapper pacienteMapper;
	PacienteRepository pacienteRepository;
	public PacienteServiceImpl (PacienteRepository pacienteRepository) {
		this.pacienteRepository = pacienteRepository;
	}

	@Transactional
	public Paciente create (PacienteRequestDTO dto) {
		Paciente paciente = pacienteMapper.toPaciente(dto);
		HistoriaClinica historiaClinica = new HistoriaClinica();
		historiaClinica.setPaciente(paciente);
		paciente.setHistoriaClinica(historiaClinica);
		pacienteRepository.save(paciente);
		return paciente;
	}

	@Override
	public Paciente findByDni (String dni) {
		Paciente paciente =
					pacienteRepository.findByDni(dni).orElseThrow(() -> new NotFoundException(String.format("No se encontro " +
								"ningun paciente con el dni: %s",dni)));
		return paciente;
	}
}
