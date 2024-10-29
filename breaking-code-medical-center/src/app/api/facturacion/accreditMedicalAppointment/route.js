import { NextResponse } from 'next/server';

export const PUT = async (request) => {
  const { searchParams } = new URL(request.url);
  const turnoId = searchParams.get('turnoId');
  const formaDePago = searchParams.get('formaDePago');

  if (!turnoId || !formaDePago) {
    return NextResponse.json({ error: 'turnoId y formaDePago son requeridos' }, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:8080/api/turno/acreditar-turno?turnoId=${turnoId}&formaDePago=${formaDePago}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || 'Error al acreditar el turno' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error en la conexión al servidor' }, { status: 500 });
  }
};
