package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.exceptions.BadRequestException;
import com.breaking.code.clinicaseprise.models.Honorario;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.repositories.HonorarioRepository;
import com.breaking.code.clinicaseprise.services.HonorarioService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HonorarioServiceImpl implements HonorarioService {

	private final HonorarioRepository honorarioRepository;
	public HonorarioServiceImpl (HonorarioRepository honorarioRepository) {
		this.honorarioRepository = honorarioRepository;
	}
	@Override
	public void create( Turno turno, Medico medico ) {
		Honorario honorario = new Honorario();
		honorario.setTurno(turno);
		honorario.setMedico(medico);
		honorarioRepository.save(honorario);
	}

	@Override
	public void pagarHonorarios( Integer medicoId ) {
		List<Honorario> honorarios = honorarioRepository.findByMedicoIdAndPagado( medicoId, false );

		if ( honorarios.isEmpty() ) throw new BadRequestException( "No hay honorarios para pagar" );

		honorarios.forEach( h -> {
			h.setPagado( true );
			h.setFechaPago( LocalDate.now() );
		} );
		honorarioRepository.saveAll( honorarios );
	}

	@Override
	public List<Honorario> honorariosNoPagados( Integer medicoId ) {
		return honorarioRepository.findByNoPagado(medicoId);
	}
}
