package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.UserRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.UsuarioResponseDTO;

public interface UsuarioService {

    UsuarioResponseDTO login(UserRequestDTO userRequestDTO);
}
