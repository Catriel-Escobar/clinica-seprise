package com.breaking.code.clinicaseprise.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "registros_clinicos")
public class RegistroClinico {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "registro_clinico_id")
    private Integer registroClinicoId;


    @ManyToOne
    @JoinColumn(name = "historia_clinica_id",nullable = false,foreignKey = @ForeignKey(name = "FK_HISTORIA_CLINICA_REGISTRO_CLINICO"))
    private HistoriaClinica historiaClinica;

    @ManyToOne
    @JoinColumn(name = "medico_id", nullable = false,foreignKey = @ForeignKey(name = "FK_MEDICO_REGISTRO_CLINICO"))
    private Medico medico;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false)
    private String informe;
}


