package com.breaking.code.clinicaseprise.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "honorarios")
public class Honorario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "honorario_id")
    private Integer honorarioId;

    @OneToOne
    @JoinColumn(name = "turno_id", nullable = false, foreignKey = @ForeignKey(name = "FK_TURNO_HONORARIO"))
    private Turno turno;

    @ManyToOne
    @JoinColumn(name = "medico_id", nullable = false, foreignKey = @ForeignKey(name ="FK_MEDICO_HONORARIO"))
    private Medico medico;

    @Column(nullable = false)
    private Boolean pagado;

    @Column(name = "fecha_pago",nullable = false)
    private LocalDate fechaPago;
}
