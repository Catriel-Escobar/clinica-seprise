package com.breaking.code.clinicaseprise.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

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
    @Column(nullable = false, name = "tipo_sangre")
    private String tipoSangre;

    @Column(nullable = false, name = "fecha_nac")
    private LocalDate fechaNacimiento;

    @OneToMany(mappedBy = "paciente")
    @JsonIgnore
    private List<Turno> turnos;

    @OneToMany(mappedBy = "paciente", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private List<RegistroClinico> registrosClinicos;
}
