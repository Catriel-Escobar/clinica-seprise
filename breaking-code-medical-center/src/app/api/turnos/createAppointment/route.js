import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const data = await request.json();

  const { dni, medicoId, fecha, hora } = data;
  
  if (!dni || !medicoId || !fecha || !hora) {
    return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
  }

  try {
    const externalApiResponse = await fetch("http://localhost:8080/api/turno/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!externalApiResponse.ok) {
      const errorResponse = await externalApiResponse.json();
      return NextResponse.json({ error: errorResponse.error || 'DNI no encontrado' }, { status: externalApiResponse.status });
    }

    const result = await externalApiResponse.json();
    return NextResponse.json(result, { status: 201 }); 

  } catch (error) {
    console.error('Error al conectarse con el servidor:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
