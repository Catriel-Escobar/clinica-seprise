package com.breaking.code.clinicaseprise.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "turnos")
public class Turno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "turno_id")
    private Integer turnoId;


    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false, foreignKey = @ForeignKey(name = "FK_PACIENTE_TURNO"))
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "medico_id",nullable = false,foreignKey = @ForeignKey(name = "FK_MEDICO_TURNO"))
    private Medico medico;

    private LocalDate fecha;

    private Boolean acreditado;


    @OneToOne(mappedBy = "turno")
    private Factura factura;


    @OneToOne(mappedBy = "turno")
    private Honorario honorario;
}
