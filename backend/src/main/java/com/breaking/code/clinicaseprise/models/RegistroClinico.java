package com.breaking.code.clinicaseprise.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

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
    @JoinColumn(name = "paciente_id",foreignKey = @ForeignKey(name = "FK_PACIENTE_REGISTRO_CLINICO"))
    @JsonIgnore
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "medico_id", nullable = false,foreignKey = @ForeignKey(name = "FK_MEDICO_REGISTRO_CLINICO"))
    private Medico medico;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false)
    private String motivo;

    @Column(nullable = false)
    private String informe;
}


