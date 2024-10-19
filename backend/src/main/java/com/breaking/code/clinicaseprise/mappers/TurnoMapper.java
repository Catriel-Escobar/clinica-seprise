package com.breaking.code.clinicaseprise.mappers;

import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.models.Turno;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TurnoMapper {
	Turno INSTANCE = Mappers.getMapper(Turno.class);

	@Mapping(source = "paciente.pacienteId", target = "pacienteId")
	@Mapping(source = "paciente.nombre", target = "pacienteName")
	@Mapping(source = "paciente.apellido", target = "pacienteApellido")
	@Mapping(source = "paciente.dni", target = "pacienteDni")
	@Mapping(source = "paciente.sexo", target = "pacienteSexo")
	@Mapping(source = "medico.medicoId", target = "medicoId")
	@Mapping(source = "medico.usuario.nombreApellido", target = "medicoNombre")
	@Mapping(source = "medico.especialidad.nombreEspecialidad", target = "especialidadNombre")
	@Mapping(source = "medico.especialidad.precio", target = "especialidadPrecio")
	@Mapping( source = "esSobreTurno" , target = "esSobreTurno")
	TurnoResponseDTO toDto(Turno turno);
}
