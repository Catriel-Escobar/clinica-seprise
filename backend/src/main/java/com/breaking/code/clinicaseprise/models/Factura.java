package com.breaking.code.clinicaseprise.models;

import com.breaking.code.clinicaseprise.models.enums.FormaDePago;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
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

    @Column(nullable = false)
    private BigDecimal monto;

    private LocalDate fecha;
    @Column(name = "forma_pago" ,nullable = false)
    @Enumerated(EnumType.STRING)
    private FormaDePago formaPago;
}
