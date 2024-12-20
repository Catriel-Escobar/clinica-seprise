package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.RegistroClinicoDTO;
import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.RegistroClinicoMapper;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import com.breaking.code.clinicaseprise.repositories.MedicoRepository;
import com.breaking.code.clinicaseprise.repositories.PacienteRepository;
import com.breaking.code.clinicaseprise.repositories.RegistroClinicoRepository;
import com.breaking.code.clinicaseprise.services.RegistroClinicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class RegistroClinicoServiceImpl implements RegistroClinicoService {

	private final PacienteRepository pacienteRepository;
	private final RegistroClinicoRepository registroClinicoRepository;
	private final MedicoRepository medicoRepository;

	@Autowired
	private RegistroClinicoMapper mapper;

	public RegistroClinicoServiceImpl( PacienteRepository pacienteRepository, RegistroClinicoRepository registroClinicoRepository, MedicoRepository medicoRepository ) {
		this.pacienteRepository = pacienteRepository;
		this.registroClinicoRepository = registroClinicoRepository;
		this.medicoRepository = medicoRepository;
	}

	@Override
	public RegistroClinicoResponseDTO create( RegistroClinicoDTO dto ) {
		Medico medico = medicoRepository.findbyUserId( dto.getUsuarioId() ).orElseThrow(() -> new NotFoundException( "Medico no encontrado" ) );
		RegistroClinico registroClinico = new RegistroClinico();
		Paciente paciente = pacienteRepository.findById( dto.getPacienteId() ).orElseThrow(() -> new NotFoundException( "Paciente no encontrado" ));
		paciente.setPacienteId( dto.getPacienteId() );
		registroClinico.setMedico( medico );
		registroClinico.setPaciente( paciente );
		registroClinico.setFecha( LocalDate.now() );
		registroClinico.setMotivo( dto.getMotivo() );
		registroClinico.setInforme( dto.getInforme() );
		registroClinicoRepository.save( registroClinico );
		return mapper.toDto( registroClinico );
	}
}
