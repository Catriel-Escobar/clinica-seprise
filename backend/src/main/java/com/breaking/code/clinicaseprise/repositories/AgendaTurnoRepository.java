package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.AgendaTurno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface AgendaTurnoRepository extends JpaRepository<AgendaTurno,Integer> {

	@Query(value = "SELECT A FROM AgendaTurno as A WHERE  A.isActived = true")
	List<AgendaTurno> findIsActived();

	@Query("SELECT a FROM AgendaTurno a WHERE a.fecha = :fecha")
	List<AgendaTurno> findByFecha(@Param("fecha") LocalDate fecha);
}
