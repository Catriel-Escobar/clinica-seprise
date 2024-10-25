import { NextResponse } from 'next/server';

const validarTipoSangre = (tipoSangre) => {
  const tiposValidos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  return tiposValidos.includes(tipoSangre);
};

const validarDNI = (dni) => {
  const dniRegex = /^\d{8}$/; 
  return dniRegex.test(dni);
};

export const POST = async (request) => {
  const formData = await request.json();

  const { nombre, apellido, dni, obraSocial, sexo, tipoSangre, fechaNacimiento } = formData;

  if (!nombre || !apellido || !dni) {
    return NextResponse.json({ error: 'Faltan campos requeridos: nombre, apellido o dni.' }, { status: 400 });
  }

  if (!validarTipoSangre(tipoSangre)) {
    return NextResponse.json({
      error: `<p style="color: red;">Tipo de sangre inválido.</p><p>Los tipos válidos son A+, A-, B+, B-, AB+, AB-, O+, O-.</p>`
    }, { status: 400 });
  }

  if (!validarDNI(dni)) {
    return NextResponse.json({
      error: `<p style="color: red;">DNI inválido.</p><p>Debe contener 8 dígitos.</p>`
    }, { status: 400 });
  }

  try {
    const externalApiResponse = await fetch('http://localhost:8080/api/paciente/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        dni,
        obraSocial,
        sexo,
        tipoSangre,
        fechaNacimiento,
      }),
    });

    if (!externalApiResponse.ok) {
      const errorData = await externalApiResponse.json();
      return NextResponse.json({ error: errorData.message || 'El DNI ya se encuentra registrado' }, { status: externalApiResponse.status });
    }

    const responseData = await externalApiResponse.json();
    return NextResponse.json({ message: 'Paciente creado exitosamente', data: responseData }, { status: 201 });

  } catch (error) {
    console.error('Error al hacer la solicitud al servidor:', error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
};
