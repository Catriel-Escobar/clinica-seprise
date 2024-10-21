import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json({ error: 'Falta el parámetro "name"' }, { status: 400 });
  }

  try {
    const externalApiResponse = await fetch(`http://localhost:8080/api/medico?name=${name}`);
    if (!externalApiResponse.ok) {
      return NextResponse.json({ error: 'Error en la API externa' }, { status: externalApiResponse.status });
    }

    const data = await externalApiResponse.json();

    if (data.length === 0) {
      return NextResponse.json({ message: 'No se encontraron resultados' }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error al conectarse con la API externa:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
