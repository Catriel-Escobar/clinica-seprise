package com.breaking.code.clinicaseprise.mappers;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MedicoMapper {

    Medico INSTANCE = Mappers.getMapper(Medico.class);

    MedicoResponseDTO medicoToDto (Medico medico);
    List<MedicoResponseDTO> medicosToDto (List<Medico> medicos);
}
