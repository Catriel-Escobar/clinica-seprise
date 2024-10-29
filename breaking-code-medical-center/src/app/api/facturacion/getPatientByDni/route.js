import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const dni = searchParams.get('dni');

  if (!dni || !/^\d{8}$/.test(dni)) {
    return NextResponse.json({ error: 'DNI tiene que tener 8 dígitos' }, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:8080/api/turno/find-turno?dni=${dni}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || 'Error al obtener información del paciente' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error en la conexión al servidor' }, { status: 500 });
  }
};
