package com.breaking.code.clinicaseprise.dto.response;

import com.breaking.code.clinicaseprise.models.Especialidad;

public record MedicoResponseDTO(
        String email,
        String nombre,
        String apellido,
        Especialidad especialidad
) {
}
