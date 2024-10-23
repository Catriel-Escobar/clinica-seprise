package com.breaking.code.clinicaseprise.controllers;


import com.breaking.code.clinicaseprise.dto.request.RegistroClinicoDTO;
import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;
import com.breaking.code.clinicaseprise.mappers.RegistroClinicoMapper;
import com.breaking.code.clinicaseprise.models.RegistroClinico;
import com.breaking.code.clinicaseprise.services.RegistroClinicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/registros-clinicos")
public class RegistroClinicoController {


	private final RegistroClinicoService registroClinicoService;

	public RegistroClinicoController( RegistroClinicoService registroClinicoService ) {
		this.registroClinicoService = registroClinicoService;
	}

	@PostMapping()
	public ResponseEntity<RegistroClinicoResponseDTO> create( @RequestBody RegistroClinicoDTO dto ) {

		return ResponseEntity.status( 201 ).body( registroClinicoService.create( dto )  );
	}
}
