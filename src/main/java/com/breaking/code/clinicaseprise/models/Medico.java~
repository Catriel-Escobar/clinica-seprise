package com.breaking.code.clinicaseprise.models;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "medicos")
public class Medico extends UserGeneric{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int medicoId;

    @OneToMany(mappedBy = "medico")
    private List<RegistroClinico> registrosClinicos;
    @OneToMany(mappedBy = "medico")
    private List<Turno> turnos;

    @OneToMany(mappedBy = "medico")
    private List<Honorario> honorarios;

    @ManyToOne()
    @JoinColumn(name = "especialidad_id",nullable = false,foreignKey = @ForeignKey(name = "FK_ESPECIALIDAD_MEDICO"))
    private Especialidad especialidad;
}
