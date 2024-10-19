package com.breaking.code.clinicaseprise.services;

import com.breaking.code.clinicaseprise.models.Factura;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.enums.FormaDePago;

public interface FacturaService {

	Factura crearFactura( Turno turno, FormaDePago formaDePago );
}
