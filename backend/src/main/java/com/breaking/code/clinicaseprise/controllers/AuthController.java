package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.dto.request.UserRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.UsuarioResponseDTO;
import com.breaking.code.clinicaseprise.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<UsuarioResponseDTO> loging (@RequestBody UserRequestDTO userRequestDTO){
        UsuarioResponseDTO response = usuarioService.login(userRequestDTO);
        return ResponseEntity.ok().body(response);
    }
}
