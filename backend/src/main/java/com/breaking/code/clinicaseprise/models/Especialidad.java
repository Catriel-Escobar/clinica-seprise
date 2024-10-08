package com.breaking.code.clinicaseprise.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "especialidades")
public class Especialidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "especialidad_id")
    private Integer especialidadId;

    @Column(name = "nombre_especialidad",nullable = false)
    private String nombreEspecialidad;
    @Column(name = "tiempo_consulta",nullable = false)
    private Integer tiempoConsulta;

    @OneToMany(mappedBy = "especialidad",fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Medico> medicos;

    @Column(nullable = false)
    private BigDecimal precio;

    @Column(nullable = false)
    private BigDecimal nomenclador;
}
