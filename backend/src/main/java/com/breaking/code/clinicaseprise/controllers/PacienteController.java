package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.dto.request.PacienteRequestDTO;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.services.PacienteService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/paciente")
public class PacienteController {

	private final PacienteService pacienteService;

	public PacienteController(PacienteService pacienteService) {
		this.pacienteService = pacienteService;
	}

	@PostMapping("create")
	public ResponseEntity<Paciente> create(@Valid @RequestBody PacienteRequestDTO dto){
		return ResponseEntity.status(201).body(pacienteService.create(dto));
	}

	@GetMapping()
	public ResponseEntity<Paciente> findByDni(
				@RequestParam("dni")
				@Pattern(regexp = "^[0-9]{8}$", message = "El DNI debe tener exactamente 8 dígitos numéricos.")
				String dni
	){
		return ResponseEntity.ok().body(pacienteService.findByDni(dni));
	}
}
