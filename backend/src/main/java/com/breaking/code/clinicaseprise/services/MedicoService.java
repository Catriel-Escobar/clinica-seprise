package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;

import java.util.List;

public interface MedicoService {

    boolean save(Medico medico);
    List<MedicoProyeccion> findAllProjections();

    List<MedicoResponseDTO> findByName(String name );

    Medico findById(Integer id);

}
