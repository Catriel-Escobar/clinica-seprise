package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.request.RegistroClinicoDTO;
import com.breaking.code.clinicaseprise.dto.response.RegistroClinicoResponseDTO;

public interface RegistroClinicoService {

	RegistroClinicoResponseDTO create ( RegistroClinicoDTO dto );
}
