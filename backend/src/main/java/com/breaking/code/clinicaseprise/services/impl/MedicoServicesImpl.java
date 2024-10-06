package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.mappers.MedicoMapper;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.MedicoRepository;
import com.breaking.code.clinicaseprise.repositories.UsuarioRepository;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MedicoServicesImpl implements MedicoService {

    private MedicoRepository medicoRepository;
    private MedicoMapper medicoMapper;
    public MedicoServicesImpl(UsuarioRepository usuarioRepository,MedicoMapper medicoMapper) {

        this.medicoRepository = medicoRepository;
        this.medicoMapper = medicoMapper;
    }

    public boolean crearUsuario(Medico medico) {
        medicoRepository.save(medico);
        return true;
    }

    @Override
    public boolean save(Medico medico) {
        medicoRepository.save(medico);
        return false;
    }

    @Override
    public List<MedicoResponseDTO> findAll() {
       List<Medico> medicos = medicoRepository.findAll();
       return medicoMapper.medicosToDto(medicos);
    }
}
