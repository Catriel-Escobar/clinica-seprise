package com.breaking.code.clinicaseprise.mappers;

import com.breaking.code.clinicaseprise.dto.response.HonorarioResponseDTO;
import com.breaking.code.clinicaseprise.models.Honorario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface HonorarioMapper {
	Honorario INSTANCE = Mappers.getMapper(Honorario.class);

	@Mapping(source = "medico.usuario.nombreApellido", target = "medicoNombre")
	@Mapping(source = "medico.especialidad.precio", target = "especialidadPrecio")
	@Mapping(source = "turno.fecha", target = "fechaTurno")
	@Mapping(source = "turno.hora", target = "horaTurno")
	@Mapping(source = "turno.paciente.nombre", target = "nombrePaciente")
	@Mapping(source = "turno.paciente.apellido", target = "apellidoPaciente")
	HonorarioResponseDTO toDto(Honorario honorario);
	List<HonorarioResponseDTO> toDtoList( List<Honorario> honorarios);
}
