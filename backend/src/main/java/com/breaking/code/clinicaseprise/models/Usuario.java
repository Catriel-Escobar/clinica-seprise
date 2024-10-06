package com.breaking.code.clinicaseprise.models;

import com.breaking.code.clinicaseprise.models.enums.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "usuarios")
public class Usuario extends UserGeneric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuario_id")
    private int usuarioId;

    @Enumerated(EnumType.STRING)
    private Role role;
}
