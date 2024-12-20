package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.MedicoMapper;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.MedicoRepository;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Service
public class MedicoServiceImpl implements MedicoService {

    private MedicoRepository medicoRepository;
    private MedicoMapper medicoMapper;
    public MedicoServiceImpl (MedicoRepository medicoRepository,MedicoMapper medicoMapper) {

        this.medicoRepository = medicoRepository;
        this.medicoMapper = medicoMapper;
    }

    @Override
    public boolean save(Medico medico) {
        medicoRepository.save(medico);
        return false;
    }

    public List<MedicoProyeccion> findAllProjections() {
      return medicoRepository.findAllMedicosProjected();
    }

    public List<MedicoResponseDTO> findByName( String name ) {
        List<Medico> medicos = this.medicoRepository.findByName(name);

        List<MedicoResponseDTO> medicoResponseDTOS = new ArrayList<>();
        for ( Medico medico : medicos ) {
            medicoResponseDTOS.add( medicoMapper.medicoToDto(medico) );
        }

        if(medicos.isEmpty())throw new NotFoundException( String.format( "No se encontraron medicos con el nombre: %s",name ) );
        return medicoResponseDTOS;
    }

    @Override
    public Medico findById (Integer id) {
        Medico medico =
              medicoRepository.findById(id).orElseThrow(() -> new NotFoundException(String.format("Medico no " +
                    "encontrado con el id: %s",id)));
        return  medico;
    }
}
