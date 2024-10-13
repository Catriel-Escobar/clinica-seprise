package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.dto.request.TurnoRequestDTO;
import com.breaking.code.clinicaseprise.dto.response.TurnoResponseDTO;
import com.breaking.code.clinicaseprise.exceptions.BadRequestException;
import com.breaking.code.clinicaseprise.exceptions.NotFoundException;
import com.breaking.code.clinicaseprise.mappers.TurnoMapper;
import com.breaking.code.clinicaseprise.models.AgendaTurno;
import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Paciente;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.repositories.AgendaTurnoRepository;
import com.breaking.code.clinicaseprise.repositories.TurnoRepository;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;
import com.breaking.code.clinicaseprise.services.MedicoService;
import com.breaking.code.clinicaseprise.services.PacienteService;
import com.breaking.code.clinicaseprise.services.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class TurnoServiceImpl implements TurnoService {

	private final TurnoRepository turnoRepository;

	private final AgendaTurnoRepository agendaTurnoRepository;
	private final PacienteService pacienteService;
	private final MedicoService medicoService;
	@Autowired
	private TurnoMapper turnoMapper;
	public TurnoServiceImpl (TurnoRepository turnoRepository, PacienteService pacienteService, MedicoService medicoService,AgendaTurnoRepository agendaTurnoRepository) {
		this.turnoRepository = turnoRepository;
		this.pacienteService = pacienteService;
		this.medicoService = medicoService;
		this.agendaTurnoRepository = agendaTurnoRepository;
	}





	@Override
	public TurnoResponseDTO create (TurnoRequestDTO dto) {
		Integer hora = dto.getFecha().getHour();
		String dia = dto.getFecha().getDayOfWeek().name();
		LocalDateTime fecha = dto.getFecha();
		if((hora < 8 || hora > 19) || (dia.equals( "SATURDAY" ) || dia.equals( "SUNDAY" )) || fecha.isBefore( LocalDateTime.now() ) ) throw new BadRequestException( "Fuera de dia y horario" );

		Optional<Turno> turnoFound = turnoRepository.findByFechaHoraMedico( dto.getMedicoId(),dto.getFecha() );
		if(turnoFound.isPresent()) throw new BadRequestException( "El turno solicitado ya esta ocupado" );

		Paciente paciente = pacienteService.findByDni(dto.getDni());
		Medico medico = medicoService.findById(dto.getMedicoId());
		Turno turno = new Turno();
		turno.setMedico(medico);
		turno.setPaciente(paciente);
		turno.setFecha(dto.getFecha());
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

//	public String armandoAgenda() {
//		List<MedicoProyeccion> medicos = medicoService.findAllProjections();
//		List<LocalDate> semanaLaboral = new ArrayList<>();
//		if(LocalDate.now().getDayOfWeek().name().equals( "MONDAY" )) {
//			List<AgendaTurno> agenda = this.agendaTurnoRepository.findByFecha( LocalDate.now() );
//			if(!agenda.isEmpty()) throw new BadRequestException( "La agenda de esta semana ya esta realizada." );
//			semanaLaboral = this.diasLaborales(LocalDate.now());
//		}else {
//			LocalDate lunes  = LocalDate.now().with( DayOfWeek.MONDAY ).plusDays( 7 );
//			semanaLaboral = this.diasLaborales( lunes );
//		}
//		List<List<LocalTime>> horarios = new ArrayList<>();
//		for (MedicoProyeccion medico :medicos) {
//			horarios.add(crearHorarios( medico.getEspecialidad().getTiempoConsulta() ))	;
//		}
//		List<AgendaTurno> agendaTurnos = new ArrayList<>();
//		return null;
//	}
//
//	private List<LocalDate> diasLaborales( LocalDate dateStart) {
//		if(!this.agendaTurnoRepository.findByFecha( dateStart ).isEmpty()) throw new BadRequestException( "La agenda de esta semana ya esta realizada." );
//		List<LocalDate> semanaLaboral = new ArrayList<>();
//		for (int i = 0; i < 5; i++) {
//			semanaLaboral.add(dateStart.plusDays(i));
//		}
//		return semanaLaboral;
//	}
//
//	public static List<LocalTime> crearHorarios(Integer duracion) {
//		//horario de comienzo
//		LocalTime start = LocalTime.of(8, 0, 0);
//		//horario de final
//		LocalTime end = LocalTime.of(19, 0, 0);
//		List<LocalTime> horarioTurnos = new ArrayList<>();
//
//		while (start.isBefore(end)) {
//			horarioTurnos.add(start);
//			if (duracion == 15) {
//				start = start.plusMinutes(30);
//				horarioTurnos.add(start);
//			}
//			start = start.plusMinutes(60 - (duracion == 15 ? 30 : 0));
//		}
//
//		return horarioTurnos;
//	}
}
