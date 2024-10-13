package com.breaking.code.clinicaseprise.controllers;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.services.TurnoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/turno")
public class TurnoController {

	private final TurnoService turnoService;
	public TurnoController(TurnoService turnoService) {
		this.turnoService = turnoService;
	}
	@PostMapping("/create")
	public ResponseEntity<TurnoResponseDTO> create (@RequestBody TurnoRequestDTO dto) {

		return ResponseEntity.status(201).body(turnoService.create(dto));
	}

	@GetMapping("medico")
	public ResponseEntity<Turno> findMedicoId(@RequestParam("medicoId") Integer medicoId) {
		return ResponseEntity.ok().body(turnoService.findByMedicoId(medicoId));
	}

	@GetMapping("paciente")
	public ResponseEntity<Turno> findPacienteId(@RequestParam("pacienteId") Integer pacienteId) {
		return ResponseEntity.ok().body(turnoService.findByMedicoId(pacienteId));
	}
}
