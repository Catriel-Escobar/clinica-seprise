package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
