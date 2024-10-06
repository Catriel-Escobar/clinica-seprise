package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.dto.response.MedicoResponseDTO;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medico")
public class MedicoControllador {


    private MedicoService service;

    public MedicoControllador(MedicoService service) {
        this.service = service;
    }


    @PostMapping("/create")
    public String create(@RequestBody Medico medico) {
        service.save(medico);
        return "create";
    }

    @GetMapping("/find-all")
    public ResponseEntity<List<MedicoResponseDTO>>findAll() {
        return ResponseEntity.ok().body(service.findAll());
    }
}
