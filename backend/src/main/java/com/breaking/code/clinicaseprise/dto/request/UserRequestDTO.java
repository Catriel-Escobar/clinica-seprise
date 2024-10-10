package com.breaking.code.clinicaseprise.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class UserRequestDTO {

    @NotBlank
    private String usuario;
    @NotBlank
    private String contrasena;
}
