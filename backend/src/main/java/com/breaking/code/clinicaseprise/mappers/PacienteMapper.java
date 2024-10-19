package com.breaking.code.clinicaseprise.mappers;


import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.PacienteResponseDTO;
import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PacienteMapper {
	Paciente INSTANCE = Mappers.getMapper(Paciente.class);
	Paciente toPaciente(PacienteRequestDTO dto);


	@Mapping(target = "registrosClinicos", source = "registrosClinicos")
	PacienteResponseDTO toDto(Paciente paciente);

	@Mapping( source = "medico.medicoId",target = "medicoId")
	@Mapping( source = "medico.usuario.nombreApellido",target = "medicoNombre")
	@Mapping( source = "medico.especialidad.nombreEspecialidad",target = "nombreEspecialidad")
	RegistroClinicoResponseDTO toDto( RegistroClinico registroClinico);
}
