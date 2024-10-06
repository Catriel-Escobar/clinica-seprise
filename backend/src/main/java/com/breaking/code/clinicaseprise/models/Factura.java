package com.breaking.code.clinicaseprise.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "facturas")
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "factura_id")
    private Integer facturaId;

    @OneToOne
    @JoinColumn(name = "turno_id",nullable = false,foreignKey = @ForeignKey(name = "FK_FACTURA_TURNO"))
    private Turno turno;

    private LocalDate fecha;
    @Column(name = "forma_pago" ,nullable = false)
    private String formaPago;
}
