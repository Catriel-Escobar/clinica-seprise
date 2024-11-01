import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const medicoId = searchParams.get('medicoId');

  try {
    const response = await fetch(`http://localhost:8080/api/honorarios?medicoId=${medicoId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json(); 
      return NextResponse.json({ error: errorData.error || 'Error al obtener información de honorarios' }, { status: response.status });
    }
   
    const data = await response.json();
   
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error en la conexión al servidor' }, { status: 500 });
  }
};
