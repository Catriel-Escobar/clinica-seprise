package com.breaking.code.clinicaseprise.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
    @JsonIgnore
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "medico_id",nullable = false,foreignKey = @ForeignKey(name = "FK_MEDICO_TURNO"))
    @JsonIgnore
    private Medico medico;
    @Column(nullable = false)
    private LocalDateTime fecha;
    @Column(nullable = false)
    private Boolean acreditado = false;
    @OneToOne(mappedBy = "turno")
    private Factura factura;

    @OneToOne(mappedBy = "turno")
    private Honorario honorario;
}
