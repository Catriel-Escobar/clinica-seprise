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



//	@Mapping( source = "registrosClinicos.medico.medicoId",target = "registrosClinicos.medicoId")
//	@Mapping( source = "registrosClinicos.medico.nombre",target = "registrosClinicos.medicoNombre")
//	@Mapping( source = "registrosClinicos.medico.apellido",target = "registrosClinicos.medicoApellido")
//	@Mapping( source = "registrosClinicos.medico.especialidad.nombreEspecialidad",target = "registrosClinicos.nombreEspecialidad")
//	PacienteResponseDTO toDto(Paciente paciente);

	@Mapping(target = "registrosClinicos", source = "registrosClinicos") // Mapeo de registros clínicos
	PacienteResponseDTO toDto(Paciente paciente);

	// Mapeo específico para convertir cada RegistroClinico a su DTO correspondiente
	@Mapping( source = "medico.medicoId",target = "medicoId")
	@Mapping( source = "medico.usuario.nombre",target = "medicoNombre")
	@Mapping( source = "medico.usuario.apellido",target = "medicoApellido")
	@Mapping( source = "medico.especialidad.nombreEspecialidad",target = "nombreEspecialidad")
	RegistroClinicoResponseDTO toDto( RegistroClinico registroClinico);
}
