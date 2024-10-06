package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.services.MedicoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuario")
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
}
