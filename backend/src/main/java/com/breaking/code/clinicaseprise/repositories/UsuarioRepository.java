package com.breaking.code.clinicaseprise.repositories;

import com.breaking.code.clinicaseprise.models.Medico;
import com.breaking.code.clinicaseprise.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query(value = "SELECT u FROM Usuario u WHERE u.usuario = ?1")
    Optional<Usuario> findByUsuario(String username);

}
