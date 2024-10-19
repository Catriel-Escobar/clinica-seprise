package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.BadRequestException;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.TurnoMapper;
import com.breaking.code.clinicaseprise.models.Factura;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.enums.FormaDePago;
import com.breaking.code.clinicaseprise.repositories.FacturaRepository;
import com.breaking.code.clinicaseprise.repositories.TurnoRepository;
import com.breaking.code.clinicaseprise.services.MedicoService;
import com.breaking.code.clinicaseprise.services.PacienteService;
import com.breaking.code.clinicaseprise.services.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


@Service
public class TurnoServiceImpl implements TurnoService {

	private final TurnoRepository turnoRepository;
	private final FacturaRepository facturaRepository;


	private final PacienteService pacienteService;
	private final MedicoService medicoService;
	@Autowired
	private TurnoMapper turnoMapper;
	public TurnoServiceImpl (TurnoRepository turnoRepository, PacienteService pacienteService, MedicoService medicoService, FacturaRepository facturaRepository  ) {
		this.turnoRepository = turnoRepository;
		this.pacienteService = pacienteService;
		this.medicoService = medicoService;
		this.facturaRepository = facturaRepository;
	}

	public Factura AcreditarTurno(Integer turnoId, FormaDePago formaDePago){
		Turno turnoRespuesta = turnoRepository.findById(turnoId).orElseThrow( () -> new NotFoundException("Turno no encontrado") );
		if (turnoRespuesta.getAcreditado() ) throw new BadRequestException("Turno ya acreditado");

		turnoRespuesta.setAcreditado(true);
		Factura factura = new Factura();
		factura.setTurno(turnoRespuesta);
		factura.setFecha(LocalDate.now());
		factura.setFormaPago(formaDePago);

		turnoRepository.save(turnoRespuesta);
		facturaRepository.save(factura);

		return factura;
	}



	@Override
	public TurnoResponseDTO create (TurnoRequestDTO dto) {
		LocalDate fecha = dto.getFecha();
		LocalTime hora = dto.getHora();
		String dia = dto.getFecha().getDayOfWeek().name();
		if((hora.getHour() < 8 || hora.getHour() > 19) || (dia.equals( "SATURDAY" ) || dia.equals( "SUNDAY" )) || fecha.isBefore( LocalDate.now() ) ) throw new BadRequestException( "Fuera de dia y horario" );

		Optional<Turno> turnoFound = turnoRepository.findByFechaHoraMedico( dto.getMedicoId(),fecha,hora );
		if(turnoFound.isPresent()) throw new BadRequestException( "El turno solicitado ya esta ocupado" );

		Paciente paciente = pacienteService.findByDni(dto.getDni());
		Medico medico = medicoService.findById(dto.getMedicoId());
		Turno turno = new Turno();
		turno.setMedico(medico);
		turno.setPaciente(paciente);
		turno.setFecha(dto.getFecha());
		turno.setHora(dto.getHora());
		turno = turnoRepository.save(turno);
		return turnoMapper.toDto(turno);
	}

	@Override
	public List<Turno> findByMedicoId (Integer medicoId) {
		List<Turno> turnos = turnoRepository.findByMedicoId(medicoId);
		return turnos;
	}

	@Override
	public List<Turno> findByPacienteId (Integer pacienteId) {
		List<Turno> turnos = turnoRepository.findByPacienteId(pacienteId);
		return turnos;
	}




	@Override
	public List<TurnoResponseDTO> findByMedicoId( Integer medicoId, LocalDate fecha ) {
		List<Turno> turnos = this.turnoRepository.findByMedicoId(medicoId,fecha);
		List<TurnoResponseDTO> turnosResponse = turnos.stream().map( turno -> turnoMapper.toDto( turno ) ).toList();
		return turnosResponse;
	}

	@Override
	public Turno findById( Integer id ) {
		return this.turnoRepository.findById( id ).orElseThrow(() -> new NotFoundException( "Turno no encontrado" ) );
	}

	@Override
	public Void delete( Integer id ) {
		Turno turno = this.findById( id );
		this.turnoRepository.delete( turno );
		return null;
	}


}
