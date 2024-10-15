package com.breaking.code.clinicaseprise.dto.response;

import com.breaking.code.clinicaseprise.models.enums.Role;

public record UsuarioResponseDTO (
        Integer usuarioId,
        String usuario,
        String nombre,
        String apellido,
		String role
) {
}
