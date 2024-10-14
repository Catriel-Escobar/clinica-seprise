package com.breaking.code.clinicaseprise.exceptions;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BadRequestException extends RuntimeException {
	private final Integer statusCode = 400;

	public BadRequestException(String message) {
		super(message);
	}
}
