package com.breaking.code.clinicaseprise.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "historias_clinicas")
public class HistoriaClinica {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "historia_clinica_id")
    private Integer historiaClinicaId;

    @OneToOne
    @JoinColumn(name = "paciente_id",nullable = false,foreignKey = @ForeignKey(name = "FK_PACIENTE_HISTORIA_CLINICA"))
    @JsonIgnore
    private Paciente paciente;

    @OneToMany(mappedBy = "historiaClinica")
    private List<RegistroClinico> registrosClinicos;
}
