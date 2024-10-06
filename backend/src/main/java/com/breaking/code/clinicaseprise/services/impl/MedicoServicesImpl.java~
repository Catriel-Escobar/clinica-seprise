package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.MedicoRepository;
import com.breaking.code.clinicaseprise.repositories.UsuarioRepository;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.stereotype.Service;


@Service
public class MedicoServicesImpl implements MedicoService {

    private MedicoRepository medicoRepository;

    public MedicoServicesImpl(UsuarioRepository usuarioRepository) {
        this.medicoRepository = medicoRepository;
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
}
