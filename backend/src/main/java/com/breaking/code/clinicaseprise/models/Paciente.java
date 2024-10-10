package com.breaking.code.clinicaseprise.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "pacientes")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paciente_id")
    private Integer pacienteId;
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private String apellido;
    @Column(nullable = false, unique = true)
    private String dni;
    @Column(nullable = false, name = "obra_social")
    private Boolean obraSocial;
    @Column(nullable = false)
    private String sexo;
    @Column(nullable = false)
    private String sangre;

    @OneToOne(mappedBy = "paciente",cascade = CascadeType.PERSIST)
    private HistoriaClinica historiaClinica;

    @OneToMany(mappedBy = "paciente")
    private List<Turno> turnos;
}
