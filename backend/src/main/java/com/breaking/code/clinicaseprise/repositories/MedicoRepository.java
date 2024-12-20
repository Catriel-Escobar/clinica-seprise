package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.repositories.projections.MedicoProyeccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MedicoRepository  extends JpaRepository<Medico,Integer> {

	@Query("SELECT m FROM Medico m")
	List<MedicoProyeccion> findAllMedicosProjected();

	@Query("SELECT m FROM Medico m inner join m.usuario u WHERE LOWER(u.nombreApellido) LIKE LOWER(CONCAT('%', :nombre, '%'))")
	List<Medico> findByName(@Param("nombre") String nombre);

	@Query(value = "SELECT * FROM medicos  m where  m.usuario_id = :usuarioId",nativeQuery = true)
	Optional<Medico> findbyUserId(@Param( "usuarioId" ) Integer usuarioId );
}
