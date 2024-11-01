import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const { medicoId } = await request.json(); // Obtener medicoId del cuerpo de la solicitud

    try {
        const response = await fetch(`http://localhost:8080/api/honorarios?medicoId=${medicoId}`, {
            method: 'POST', // Cambiar a POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ medicoId }), // Aquí puedes enviar más datos si es necesario
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            return NextResponse.json({ error: errorData.error || 'Error al procesar la solicitud de honorarios' }, { status: response.status });
        }

        const data = await response.json(); // Supongamos que la respuesta tiene algún dato

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Error en la conexión al servidor' }, { status: 500 });
    }
};
