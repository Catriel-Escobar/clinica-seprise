package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.models.Honorario;
import com.breaking.code.clinicaseprise.services.HonorarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/honorarios")
public class HonorariosController {

	private  final HonorarioService honorarioService;
	public  HonorariosController(HonorarioService honorarioService) {
		this.honorarioService = honorarioService;
	}


	@PostMapping()
	public ResponseEntity<Map<String, String>> pagarHonorarios(
			@RequestParam("medicoId") Integer medicoId
	) {
		this.honorarioService.pagarHonorarios( medicoId );
		Map<String,String> response = new HashMap<>();
		response.put( "respuesta", "Honorarios pagados!" );

		return ResponseEntity.ok().body( response );
	}


	@GetMapping()
	public ResponseEntity<List<Honorario>> honorariosNoPagos(
			@RequestParam("medicoId") Integer medicoId
	) {
		return ResponseEntity.ok().body( this.honorarioService.honorariosNoPagados( medicoId ));
	}

}

