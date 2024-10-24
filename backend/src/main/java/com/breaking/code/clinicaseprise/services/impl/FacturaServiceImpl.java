package com.breaking.code.clinicaseprise.services.impl;

import com.breaking.code.clinicaseprise.models.Factura;
import com.breaking.code.clinicaseprise.models.Turno;
import com.breaking.code.clinicaseprise.models.enums.FormaDePago;
import com.breaking.code.clinicaseprise.repositories.FacturaRepository;
import com.breaking.code.clinicaseprise.services.FacturaService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class FacturaServiceImpl implements FacturaService {

	private final FacturaRepository facturaRepository;

	public  FacturaServiceImpl (FacturaRepository facturaRepository) {
		this.facturaRepository = facturaRepository;
	}

	@Override
	public Factura crearFactura( Turno turno, FormaDePago formaDePago ) {
		Factura factura = new Factura();
		factura.setTurno(turno);
		factura.setFecha( LocalDate.now());
		factura.setFormaPago(formaDePago);
		factura.setMonto( turno.getMedico().getEspecialidad().getPrecio() );
		facturaRepository.save(factura);
		return factura;
	}
}
