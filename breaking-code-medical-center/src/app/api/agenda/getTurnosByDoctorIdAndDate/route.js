import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const doctorId = searchParams.get('medicoId');
  const selectedDate = searchParams.get('fecha');

  if (!doctorId || !selectedDate) {
    return NextResponse.json({ error: 'Faltan los parámetros "medicoId" o "fecha"' }, { status: 400 });
  }

  try {
    const turnoResponse = await fetch(`http://localhost:8080/api/turno?medicoId=${doctorId}&fecha=${selectedDate}`);
    if (!turnoResponse.ok) {
      return NextResponse.json({ error: 'Error al obtener los turnos del médico' }, { status: turnoResponse.status });
    }

    const turnosData = await turnoResponse.json();
    return NextResponse.json(turnosData, { status: 200 });

  } catch (error) {
    console.error('Error al conectarse con la API externa:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
};
