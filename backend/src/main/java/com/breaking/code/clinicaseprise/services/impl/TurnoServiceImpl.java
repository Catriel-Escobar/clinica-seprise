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
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


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



	public String armandoAgenda() {
//		List<MedicoProyeccion> medicos = medicoService.findAllProjections();
		List<LocalDate> semanaLaboral = new ArrayList<>();
		String currentDay = LocalDate.now().getDayOfWeek().name();
		if(currentDay.equals( "MONDAY" )) {
			List<AgendaTurno> agenda = this.agendaTurnoRepository.findByFecha( LocalDate.now() );
			if(!agenda.isEmpty()) throw new BadRequestException( "La agenda de esta semana ya esta realizada." );
			semanaLaboral = this.crearTurnos(LocalDate.now());
		}else {
			LocalDate lunes  = LocalDate.now().with( DayOfWeek.MONDAY );
			if( lunes.isBefore( LocalDate.now() )) {
				lunes = lunes.plusDays( 7L );
			}
			semanaLaboral = this.crearTurnos( lunes );
		}

		List<LocalTime> horarios = crearHorarios( 25 );

		return null;
	}

	@Override
	public TurnoResponseDTO create (TurnoRequestDTO dto) {
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
	public Turno findByMedicoId (Integer medicoId) {
		Turno turno = turnoRepository.findByMedicoId(medicoId).orElseThrow(() -> new NotFoundException(String.format(
					"Turno para el medico con id %s no encontrado!",medicoId.toString())));
		return turno;
	}

	@Override
	public Turno findByPacienteId (Integer pacienteId) {
		Turno turno = turnoRepository.findByMedicoId(pacienteId).orElseThrow(() -> new NotFoundException(String.format(
					"Turno para el medico con id %s no encontrado!",pacienteId.toString())));
		return turno;
	}


	private List<LocalDate> crearTurnos (LocalDate dateStart) {
		if(!this.agendaTurnoRepository.findByFecha( dateStart ).isEmpty()) throw new BadRequestException( "La agenda de esta semana ya esta realizada." );
		List<LocalDate> semanaLaboral = new ArrayList<>();
		for (int i = 0; i < 5; i++) {
			semanaLaboral.add(dateStart.plusDays(i));
		}
		return semanaLaboral;
	}

//	private List<LocalTime> crearHorarios (Integer duracion) {
//
//		LocalTime start = LocalTime.of( 8,0,0 );
//		LocalTime end = LocalTime.of( 19,0,0 );
//		List<LocalTime> horarioTurnos = new ArrayList<>();
//		while ( start.plusMinutes( duracion ).isBefore( end ) || start.plusMinutes( duracion ).equals( end ) ) {
//			if(duracion == 15) {
//				for ( int i = 0; i < 2; i++ ) {
//					horarioTurnos.add( start );
//					start = start.plusMinutes( 30 );
//				}
//			}else {
//				horarioTurnos.add( start );
//				start = start.plusMinutes( 60 );
//			}
//
//		}
//		return horarioTurnos;
//	}

	public static List<LocalTime> crearHorarios(Integer duracion) {
		LocalTime start = LocalTime.of(8, 0, 0);
		LocalTime end = LocalTime.of(19, 0, 0);
		List<LocalTime> horarioTurnos = new ArrayList<>();

		while (start.isBefore(end)) {
			horarioTurnos.add(start);


			if (duracion == 15) {
				start = start.plusMinutes(30);
				horarioTurnos.add(start);
			}

			start = start.plusMinutes(60 - (duracion == 15 ? 30 : 0));
		}

		return horarioTurnos;
	}
}
