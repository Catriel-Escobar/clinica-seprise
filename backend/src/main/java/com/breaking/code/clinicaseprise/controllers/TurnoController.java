package com.breaking.code.clinicaseprise.controllers;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.mappers.TurnoMapper;
import com.breaking.code.clinicaseprise.models.Factura;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.enums.FormaDePago;
import com.breaking.code.clinicaseprise.repositories.FacturaRepository;
import com.breaking.code.clinicaseprise.services.TurnoService;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/turno")
public class TurnoController {


	@Autowired
	private TurnoMapper mapper;
	private final TurnoService turnoService;


    @Autowired
    private FacturaRepository facturaRepository;

	public TurnoController(TurnoService turnoService) {
		this.turnoService = turnoService;
	}
	@PostMapping("/create")
	public ResponseEntity<TurnoResponseDTO> create (@RequestBody TurnoRequestDTO dto) {

		return ResponseEntity.status(201).body(turnoService.create(dto));
	}

	@GetMapping("medico")
	public ResponseEntity<List<Turno>> findMedicoId( @RequestParam("medicoId") Integer medicoId) {
		return ResponseEntity.ok().body(turnoService.findByMedicoId(medicoId));
	}

	@GetMapping("paciente")
	public ResponseEntity<List<TurnoResponseDTO>> findPacienteId(@RequestParam("pacienteId") Integer pacienteId) {
		List<TurnoResponseDTO> turnoResponseDTOS = turnoService.findByMedicoId(pacienteId).stream().map(mapper::toDto).toList();
		return ResponseEntity.ok().body(turnoResponseDTOS);
	}

	@GetMapping
	public ResponseEntity<List<TurnoResponseDTO>> findByMedicoId(
			@NotNull
			@RequestParam("medicoId") Integer medicoId,
			@NotNull
			@RequestParam("fecha")LocalDate fecha
			) {

		return ResponseEntity.ok().body(turnoService.findByMedicoId(medicoId,fecha));
	}

	@GetMapping("/find-by-id")
	public ResponseEntity<TurnoResponseDTO> findById(@RequestParam("id") Integer id) {
		TurnoResponseDTO responseDTO = mapper.toDto( turnoService.findById(id) );
		return ResponseEntity.ok().body(responseDTO);
	}

	@DeleteMapping
	public ResponseEntity<Void> delete(@RequestParam("id") Integer id) {

		return ResponseEntity.ok().body(turnoService.delete(id));
	}

	@PutMapping("/acreditar-turno")
	public ResponseEntity<Factura> acreditarTurno(@RequestParam("turnoId") Integer turnoId, @RequestParam("formaDePago")FormaDePago formaDePago) {

		return ResponseEntity.ok().body(turnoService.AcreditarTurno(turnoId, formaDePago));

	}

	@GetMapping("/find-turno")
	public ResponseEntity<TurnoResponseDTO> findTurnoByDni(
			@RequestParam("dni")
			@Pattern(regexp = "^[0-9]{8}$", message = "El DNI debe tener exactamente 8 dígitos numéricos.")
			String dni
	) {
		return ResponseEntity.ok().body( turnoService.findByDni( dni ) );
	}

}
