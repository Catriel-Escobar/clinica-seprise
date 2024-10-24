package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.dto.response.HonorarioResponseDTO;
import com.breaking.code.clinicaseprise.models.Honorario;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Turno;

import java.util.List;

public interface HonorarioService {

	void create( Turno turno, Medico medico );

	void pagarHonorarios(Integer medicoId);

	List<HonorarioResponseDTO> honorariosNoPagados( Integer medicoId);
}
