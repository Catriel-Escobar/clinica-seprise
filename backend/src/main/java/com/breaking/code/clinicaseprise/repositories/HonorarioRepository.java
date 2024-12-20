package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Honorario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface HonorarioRepository extends JpaRepository<Honorario,Integer> {


	@Query(value = "SELECT * FROM honorarios H WHERE H.medico_id = :medicoId AND H.pagado = :pagado", nativeQuery = true)
	List<Honorario> findByMedicoIdAndPagado( @Param ( "medicoId" ) Integer medicoId, @Param ( "pagado" ) Boolean pagado );


	@Query(value = "SELECT * FROM honorarios H WHERE H.pagado = false AND H.medico_id = :medicoId", nativeQuery = true)
	List<Honorario> findByNoPagado(@Param( "medicoId" ) Integer medicoId);
}
