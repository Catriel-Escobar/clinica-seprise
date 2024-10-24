import { NextResponse } from 'next/server';

export const DELETE = async (request) => {
  const { searchParams } = new URL(request.url);
  const turnoId = searchParams.get('id');

  if (!turnoId) {
    return NextResponse.json({ error: 'Falta el parámetro "id"' }, { status: 400 });
  }

  try {
    const externalApiResponse = await fetch(`http://localhost:8080/api/turno?id=${turnoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!externalApiResponse.ok) {
      const errorResponse = await externalApiResponse.json();
      return NextResponse.json({ error: errorResponse.error || 'Error en la API externa' }, { status: externalApiResponse.status });
    }

    return NextResponse.json({ message: 'Turno eliminado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error al conectarse al servidor:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
