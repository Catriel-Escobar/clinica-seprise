package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.PacienteResponseDTO;
import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.BadRequestException;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.PacienteMapper;
import com.breaking.code.clinicaseprise.mappers.RegistroClinicoMapper;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import com.breaking.code.clinicaseprise.repositories.PacienteRepository;
import com.breaking.code.clinicaseprise.repositories.RegistroClinicoRepository;
import com.breaking.code.clinicaseprise.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PacienteServiceImpl implements PacienteService {
	@Autowired
	PacienteMapper pacienteMapper;

	@Autowired
	RegistroClinicoMapper registroClinicoMapper;

	PacienteRepository pacienteRepository;

	RegistroClinicoRepository registroClinicoRepository;
	public PacienteServiceImpl (PacienteRepository pacienteRepository, RegistroClinicoRepository registroClinicoRepository) {
		this.pacienteRepository = pacienteRepository;
		this.registroClinicoRepository = registroClinicoRepository;
	}

	@Transactional
	public Paciente create (PacienteRequestDTO dto) {

		try {
			Paciente paciente = pacienteMapper.toPaciente(dto);
			pacienteRepository.save(paciente);
			return paciente;
		} catch(Exception ex) {
			throw new BadRequestException("El DNI ya se encuentra registrado");
		}

	}

	@Override
	public PacienteResponseDTO findByDniDto( String dni) {
		Paciente paciente =
					pacienteRepository.findByDni(dni).orElseThrow(() -> new NotFoundException(String.format("No se encontro " +
								"ningun paciente con el dni: %s",dni)));
		PacienteResponseDTO pacienteResponseDTO = pacienteMapper.toDto( paciente );
		return pacienteResponseDTO;
	}

	@Override
	public Paciente findByDni( String dni ) {
		Paciente paciente =
				pacienteRepository.findByDni(dni).orElseThrow(() -> new NotFoundException(String.format("No se encontro " +
						"ningun paciente con el dni: %s",dni)));
		return paciente;
	}


}
