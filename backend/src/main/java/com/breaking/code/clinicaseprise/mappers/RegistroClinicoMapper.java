package com.breaking.code.clinicaseprise.mappers;


import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RegistroClinicoMapper {
	RegistroClinico INSTANCE = Mappers.getMapper( RegistroClinico.class );


	@Mapping( source = "medico.medicoId",target = "medicoId")
	@Mapping( source = "medico.usuario.nombreApellido",target = "medicoNombre")
//	@Mapping( source = "medico.usuario.apellido",target = "medicoApellido")
	@Mapping( source = "medico.especialidad.nombreEspecialidad",target = "nombreEspecialidad")
	RegistroClinicoResponseDTO toDto( RegistroClinico registroClinico);
}
