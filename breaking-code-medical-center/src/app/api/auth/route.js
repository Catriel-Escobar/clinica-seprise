import { NextResponse } from 'next/server';

export async function POST(request) {
  const { usuario, contrasena } = await request.json();

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario, contrasena }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || "Error de autenticación" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Error al conectar con el servidor" }, { status: 500 });
  }
}
