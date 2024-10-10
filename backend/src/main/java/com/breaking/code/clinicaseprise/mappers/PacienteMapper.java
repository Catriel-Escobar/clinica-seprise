package com.breaking.code.clinicaseprise.mappers;


import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PacienteMapper {
	Paciente INSTANCE = Mappers.getMapper(Paciente.class);
	Paciente toPaciente(PacienteRequestDTO dto);
}
