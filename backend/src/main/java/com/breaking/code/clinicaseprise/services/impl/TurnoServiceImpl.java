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
import com.breaking.code.clinicaseprise.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class TurnoServiceImpl implements TurnoService {

	private final TurnoRepository turnoRepository;


	private final PacienteService pacienteService;
	private final FacturaService facturaService;
	private final MedicoService medicoService;
	private  final HonorarioService honorarioService;
	@Autowired
	private TurnoMapper turnoMapper;

	public TurnoServiceImpl(TurnoRepository turnoRepository, PacienteService pacienteService,
			MedicoService medicoService, FacturaService facturaService, HonorarioService honorarioService) {
		this.turnoRepository = turnoRepository;
		this.pacienteService = pacienteService;
		this.medicoService = medicoService;
		this.facturaService = facturaService;
		this.honorarioService = honorarioService;
	}

	public Factura AcreditarTurno(Integer turnoId, FormaDePago formaDePago) {
		Turno turnoRespuesta = turnoRepository.findById(turnoId)
				.orElseThrow(() -> new NotFoundException("Turno no encontrado"));
		if (turnoRespuesta.getAcreditado())
			throw new BadRequestException("Turno ya acreditado");

		Medico medico = medicoService.findById(turnoRespuesta.getMedico().getMedicoId());
		turnoRespuesta.setAcreditado(true);
		turnoRepository.save(turnoRespuesta);
		honorarioService.create( turnoRespuesta,medico );
		return facturaService.crearFactura( turnoRespuesta, formaDePago );
	}

	@Override
	public TurnoResponseDTO create(TurnoRequestDTO dto) {
		LocalDate fecha = dto.getFecha();
		LocalTime hora = dto.getHora();
		String dia = dto.getFecha().getDayOfWeek().name();
		if ((hora.getHour() < 8 || hora.getHour() > 19) || (dia.equals("SATURDAY") || dia.equals("SUNDAY"))
				|| fecha.isBefore(LocalDate.now()))
			throw new BadRequestException("Fuera de dia y horario");


		Medico medico = medicoService.findById(dto.getMedicoId());

		Integer tiempoConsulta = medico.getEspecialidad().getTiempoConsulta();

		Integer maxTurnoPordia = tiempoConsulta == 15 ? 5 : 3;

		List<Turno> turnosFound = turnoRepository.findByFechaHoraMedico(dto.getMedicoId(), fecha, hora);
		if (turnosFound.size() == maxTurnoPordia )
			throw new BadRequestException("Ya estan todos los turnos tomado de esta hora");

		turnosFound.forEach( t -> {
			if (t.getHora().equals( hora )  && t.getFecha().equals( fecha )) {
				throw new BadRequestException( "El turno ya esta ocupado" );
			}
		} );

		Paciente paciente = pacienteService.findByDni(dto.getDni());
		Turno turno = new Turno();
		turno.setMedico(medico);
		turno.setPaciente(paciente);
		turno.setFecha(fecha);
		turno.setHora(hora);
		Integer tamanoArray = turnosFound.size() + 1;
		if ( tamanoArray < maxTurnoPordia) {
			turno.setEsSobreTurno(false);
		} else {
			turno.setHora(LocalTime.of(hora.getHour(),59));
			turno.setEsSobreTurno(true);
		}
		turno = turnoRepository.save(turno);
		return turnoMapper.toDto(turno);
	}

	@Override
	public List<Turno> findByMedicoId(Integer medicoId) {
		List<Turno> turnos = turnoRepository.findByMedicoId(medicoId);
		return turnos;
	}

	@Override
	public List<Turno> findByPacienteId(Integer pacienteId) {
		List<Turno> turnos = turnoRepository.findByPacienteId(pacienteId);
		return turnos;
	}


	public TurnoResponseDTO findByDni(String dni) {
		Paciente paciente = pacienteService.findByDni( dni );
		Turno turno = turnoRepository.findLastByPacienteId(paciente.getPacienteId()).orElseThrow(() -> new NotFoundException( "Turno no encontrado" ));
		return turnoMapper.toDto( turno );
	}

	@Override
	public List<TurnoResponseDTO> findByMedicoId(Integer medicoId, LocalDate fecha) {
		List<Turno> turnos = this.turnoRepository.findByMedicoId(medicoId, fecha);
		List<TurnoResponseDTO> turnosResponse = turnos.stream().map(turno -> turnoMapper.toDto(turno)).toList();
		return turnosResponse;
	}

	@Override
	public Turno findById(Integer id) {
		return this.turnoRepository.findById(id).orElseThrow(() -> new NotFoundException("Turno no encontrado"));
	}

	@Override
	public Void delete(Integer id) {
		Turno turno = this.findById(id);
		this.turnoRepository.delete(turno);
		return null;
	}

}
