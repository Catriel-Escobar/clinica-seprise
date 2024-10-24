package com.breaking.code.clinicaseprise.mappers;

import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MedicoMapper {

    Medico INSTANCE = Mappers.getMapper(Medico.class);


    @Mapping(source = "medico.medicoId",target = "medicoId")
    @Mapping(source = "usuario.nombreApellido",target = "nombre")
    @Mapping(source = "especialidad.especialidadId",target = "especialidadId")
    @Mapping(source = "especialidad.nombreEspecialidad",target = "nombreEspecialidad")
    @Mapping(source = "especialidad.tiempoConsulta",target = "tiempoConsulta")
    @Mapping(source = "especialidad.precio",target = "precio")
    @Mapping(source = "especialidad.nomenclador",target = "nomenclador")
    MedicoResponseDTO medicoToDto (Medico medico);
    List<MedicoResponseDTO> medicosToDto (List<Medico> medicos);
}
