package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;

import java.util.List;

public interface MedicoService {

    boolean save(Medico medico);

    List<MedicoResponseDTO> findAll();
}
