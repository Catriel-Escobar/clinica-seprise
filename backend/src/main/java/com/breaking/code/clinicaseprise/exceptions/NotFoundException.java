package com.breaking.code.clinicaseprise.exceptions;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class NotFoundException extends RuntimeException {

    private final Integer statusCode = 404;

    public NotFoundException(String message) {
        super(message);
    }
}
