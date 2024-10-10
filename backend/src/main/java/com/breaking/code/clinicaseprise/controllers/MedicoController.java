package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medico")
public class MedicoController {


    private MedicoService service;

    public MedicoController (MedicoService service) {
        this.service = service;
    }


    @PostMapping("/create")
    public String create(@RequestBody Medico medico) {
        service.save(medico);
        return "create";
    }


    @GetMapping("/find-all")
    public ResponseEntity<List<MedicoProyeccion>>findAllProjection() {
        return ResponseEntity.ok().body(service.findAllProjections());
    }
}
