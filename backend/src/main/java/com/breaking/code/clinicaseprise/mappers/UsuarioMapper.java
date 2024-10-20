package com.breaking.code.clinicaseprise.mappers;

import com.breaking.code.clinicaseprise.dto.response.UsuarioResponseDTO;
import com.breaking.code.clinicaseprise.models.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    Usuario INSTANCE = Mappers.getMapper(Usuario.class);

    @Mapping( source = "nombreApellido", target = "nombre")
    UsuarioResponseDTO toResponse(Usuario usuario);

}
