package com.breaking.code.clinicaseprise.models;

import com.breaking.code.clinicaseprise.models.enums.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "usuarios")
public class Usuario  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuario_id")
    private Integer usuarioId;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false, unique = true,name = "usuario")
    private String usuario;

    @Column(nullable = false)
    private String contrasena;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;
}
