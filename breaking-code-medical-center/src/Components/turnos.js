const turnos = [
  {
    id: 1,
    nombre: "Alejandro",
    apellido: "Abadi",
    especialidad: "Cardiología",
    valorConsulta: 1500,
    fecha: "14/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Fernando",
          apellido: "Ruiz",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sofía",
          apellido: "López",
          dni: "87654321",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Diego",
          apellido: "Fernández",
          dni: "11223344",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Ana",
          apellido: "Martínez",
          dni: "22334455",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Pedro",
          apellido: "Ramírez",
          dni: "33445566",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Sánchez",
          dni: "44556677",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carlos",
          apellido: "Martínez",
          dni: "55667788",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "José",
          apellido: "Torres",
          dni: "66778899",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Romero",
          dni: "77889900",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sebastián",
          apellido: "Gómez",
          dni: "88990011",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 1,
    nombre: "Alejandro",
    apellido: "Abadi",
    especialidad: "Cardiología",
    valorConsulta: 1500,
    fecha: "15/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Javier",
          apellido: "López",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "María",
          apellido: "González",
          dni: "23456789",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Francisco",
          apellido: "Pérez",
          dni: "34567890",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Valeria",
          apellido: "Muñoz",
          dni: "45678901",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gabriel",
          apellido: "Torres",
          dni: "56789012",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Gutiérrez",
          dni: "67890123",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Jorge",
          apellido: "Herrera",
          dni: "78901234",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carmen",
          apellido: "Rivera",
          dni: "89012345",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Martín",
          apellido: "Gómez",
          dni: "90123456",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Elena",
          apellido: "Ramírez",
          dni: "01234567",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 1,
    nombre: "Alejandro",
    apellido: "Abadi",
    especialidad: "Cardiología",
    valorConsulta: 1500,
    fecha: "16/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Ricardo",
          apellido: "Sánchez",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Patricia",
          apellido: "Vega",
          dni: "23456789",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Alejandro",
          apellido: "Herrera",
          dni: "34567890",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Jiménez",
          dni: "45678901",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Esteban",
          apellido: "Castillo",
          dni: "56789012",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Natalia",
          apellido: "Torres",
          dni: "67890123",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Felipe",
          apellido: "Morales",
          dni: "78901234",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lorena",
          apellido: "Díaz",
          dni: "89012345",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Andrés",
          apellido: "Paredes",
          dni: "90123456",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Viviana",
          apellido: "Soto",
          dni: "01234567",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 2,
    nombre: "Maria Eugenia ",
    apellido: "Bava",
    especialidad: "Dermatología",
    valorConsulta: 1300,
    fecha: "14/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Fernando",
          apellido: "Ruiz",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sofía",
          apellido: "López",
          dni: "87654321",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Diego",
          apellido: "Fernández",
          dni: "11223344",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Ana",
          apellido: "Martínez",
          dni: "22334455",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Pedro",
          apellido: "Ramírez",
          dni: "33445566",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Sánchez",
          dni: "44556677",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carlos",
          apellido: "Martínez",
          dni: "55667788",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "José",
          apellido: "Torres",
          dni: "66778899",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Romero",
          dni: "77889900",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sebastián",
          apellido: "Gómez",
          dni: "88990011",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 2,
    nombre: "Maria Eugenia ",
    apellido: "Bava",
    especialidad: "Dermatología",
    valorConsulta: 1300,
    fecha: "15/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Andrés",
          apellido: "Pérez",
          dni: "11112222",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Valentina",
          apellido: "Moreno",
          dni: "33334444",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Marta",
          apellido: "Rodríguez",
          dni: "55556666",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Jorge",
          apellido: "Ramos",
          dni: "77778888",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carolina",
          apellido: "Santos",
          dni: "99990000",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Emilio",
          apellido: "García",
          dni: "11223344",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gloria",
          apellido: "Ramírez",
          dni: "22334455",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Tomás",
          apellido: "Fernández",
          dni: "33445566",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Mariana",
          apellido: "Hernández",
          dni: "44556677",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Juan",
          apellido: "Lopez",
          dni: "55667788",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 2,
    nombre: "Maria Eugenia ",
    apellido: "Bava",
    especialidad: "Dermatología",
    valorConsulta: 1300,
    fecha: "16/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Federico",
          apellido: "Gómez",
          dni: "66667777",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Paula",
          apellido: "Mendoza",
          dni: "77778888",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Elena",
          apellido: "Suárez",
          dni: "88889999",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Nicolás",
          apellido: "Martín",
          dni: "99990000",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gabriela",
          apellido: "Díaz",
          dni: "00001111",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Esteban",
          apellido: "Ortiz",
          dni: "11112222",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Miriam",
          apellido: "Pérez",
          dni: "22223333",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Roberto",
          apellido: "Cruz",
          dni: "33334444",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Silvia",
          apellido: "Morales",
          dni: "44445555",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Matías",
          apellido: "Rojas",
          dni: "55556666",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 3,
    nombre: "Gustavo",
    apellido: "Baranda",
    especialidad: "Neurología",
    valorConsulta: 1800,
    fecha: "14/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Fernando",
          apellido: "Ruiz",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sofía",
          apellido: "López",
          dni: "87654321",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Diego",
          apellido: "Fernández",
          dni: "11223344",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Ana",
          apellido: "Martínez",
          dni: "22334455",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Pedro",
          apellido: "Ramírez",
          dni: "33445566",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Sánchez",
          dni: "44556677",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carlos",
          apellido: "Martínez",
          dni: "55667788",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "José",
          apellido: "Torres",
          dni: "66778899",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Romero",
          dni: "77889900",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sebastián",
          apellido: "Gómez",
          dni: "88990011",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 3,
    nombre: "Gustavo",
    apellido: "Baranda",
    especialidad: "Neurología",
    valorConsulta: 1800,
    fecha: "15/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Javier",
          apellido: "López",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "María",
          apellido: "González",
          dni: "23456789",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Francisco",
          apellido: "Pérez",
          dni: "34567890",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Valeria",
          apellido: "Muñoz",
          dni: "45678901",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gabriel",
          apellido: "Torres",
          dni: "56789012",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Gutiérrez",
          dni: "67890123",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Jorge",
          apellido: "Herrera",
          dni: "78901234",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carmen",
          apellido: "Rivera",
          dni: "89012345",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Martín",
          apellido: "Gómez",
          dni: "90123456",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Elena",
          apellido: "Ramírez",
          dni: "01234567",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id: 3,
    nombre: "Gustavo",
    apellido: "Baranda",
    especialidad: "Neurología",
    valorConsulta: 1800,
    fecha: "16/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Ricardo",
          apellido: "Sánchez",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Patricia",
          apellido: "Vega",
          dni: "23456789",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Alejandro",
          apellido: "Herrera",
          dni: "34567890",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Jiménez",
          dni: "45678901",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Esteban",
          apellido: "Castillo",
          dni: "56789012",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Natalia",
          apellido: "Torres",
          dni: "67890123",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Felipe",
          apellido: "Morales",
          dni: "78901234",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lorena",
          apellido: "Díaz",
          dni: "89012345",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Andrés",
          apellido: "Paredes",
          dni: "90123456",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Viviana",
          apellido: "Soto",
          dni: "01234567",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:4,
    nombre: "Marcelo",
    apellido: "Galimberti",
    especialidad: "Medicina General",
    valorConsulta: 1300,
    fecha: "14/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Fernando",
          apellido: "Ruiz",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sofía",
          apellido: "López",
          dni: "87654321",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Diego",
          apellido: "Fernández",
          dni: "11223344",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Ana",
          apellido: "Martínez",
          dni: "22334455",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Pedro",
          apellido: "Ramírez",
          dni: "33445566",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Sánchez",
          dni: "44556677",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carlos",
          apellido: "Martínez",
          dni: "55667788",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "José",
          apellido: "Torres",
          dni: "66778899",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Romero",
          dni: "77889900",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sebastián",
          apellido: "Gómez",
          dni: "88990011",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:4,
    nombre: "Marcelo",
    apellido: "Galimberti",
    especialidad: "Medicina General",
    valorConsulta: 1300,
    fecha: "15/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Andrés",
          apellido: "Pérez",
          dni: "11112222",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Valentina",
          apellido: "Moreno",
          dni: "33334444",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Marta",
          apellido: "Rodríguez",
          dni: "55556666",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Jorge",
          apellido: "Ramos",
          dni: "77778888",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carolina",
          apellido: "Santos",
          dni: "99990000",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Emilio",
          apellido: "García",
          dni: "11223344",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gloria",
          apellido: "Ramírez",
          dni: "22334455",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Tomás",
          apellido: "Fernández",
          dni: "33445566",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Mariana",
          apellido: "Hernández",
          dni: "44556677",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Juan",
          apellido: "Lopez",
          dni: "55667788",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:4,
    nombre: "Marcelo",
    apellido: "Galimberti",
    especialidad: "Medicina General",
    valorConsulta: 1300,
    fecha: "16/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Federico",
          apellido: "Gómez",
          dni: "66667777",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Paula",
          apellido: "Mendoza",
          dni: "77778888",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Elena",
          apellido: "Suárez",
          dni: "88889999",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Nicolás",
          apellido: "Martín",
          dni: "99990000",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gabriela",
          apellido: "Díaz",
          dni: "00001111",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Esteban",
          apellido: "Ortiz",
          dni: "11112222",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Miriam",
          apellido: "Pérez",
          dni: "22223333",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Roberto",
          apellido: "Cruz",
          dni: "33334444",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Silvia",
          apellido: "Morales",
          dni: "44445555",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Matías",
          apellido: "Rojas",
          dni: "55556666",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:5,
    nombre: "Catriel",
    apellido: "Escobar",
    especialidad: "Neumonologia",
    valorConsulta: 1300,
    fecha: "14/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Fernando",
          apellido: "Ruiz",
          dni: "12345678",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sofía",
          apellido: "López",
          dni: "87654321",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Diego",
          apellido: "Fernández",
          dni: "11223344",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Ana",
          apellido: "Martínez",
          dni: "22334455",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Pedro",
          apellido: "Ramírez",
          dni: "33445566",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Laura",
          apellido: "Sánchez",
          dni: "44556677",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carlos",
          apellido: "Martínez",
          dni: "55667788",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "José",
          apellido: "Torres",
          dni: "66778899",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Lucía",
          apellido: "Romero",
          dni: "77889900",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Sebastián",
          apellido: "Gómez",
          dni: "88990011",
          numeroHistoriaClinica: "HC876543",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:5,
    nombre: "Catriel",
    apellido: "Escobar",
    especialidad: "Neumonologia",
    valorConsulta: 1300,
    fecha: "15/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Andrés",
          apellido: "Pérez",
          dni: "11112222",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Valentina",
          apellido: "Moreno",
          dni: "33334444",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Marta",
          apellido: "Rodríguez",
          dni: "55556666",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Jorge",
          apellido: "Ramos",
          dni: "77778888",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Carolina",
          apellido: "Santos",
          dni: "99990000",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Emilio",
          apellido: "García",
          dni: "11223344",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gloria",
          apellido: "Ramírez",
          dni: "22334455",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Tomás",
          apellido: "Fernández",
          dni: "33445566",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Mariana",
          apellido: "Hernández",
          dni: "44556677",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Juan",
          apellido: "Lopez",
          dni: "55667788",
          numeroHistoriaClinica: "HC234567",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
  {
    id:5,
    nombre: "Catriel",
    apellido: "Escobar",
    especialidad: "Neumonologia",
    valorConsulta: 1300,
    fecha: "16/10/2024",
    horarios: [
      {
        hora: "08:00 - 08:30",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "08:30 - 09:00",
        turno: "Tomado",
        paciente: {
          nombre: "Federico",
          apellido: "Gómez",
          dni: "66667777",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:00 - 09:30",
        turno: "Tomado",
        paciente: {
          nombre: "Paula",
          apellido: "Mendoza",
          dni: "77778888",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "09:30 - 10:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "10:00 - 10:30",
        turno: "Tomado",
        paciente: {
          nombre: "Elena",
          apellido: "Suárez",
          dni: "88889999",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "10:30 - 11:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "11:00 - 11:30",
        turno: "Tomado",
        paciente: {
          nombre: "Nicolás",
          apellido: "Martín",
          dni: "99990000",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "11:30 - 12:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "12:00 - 12:30",
        turno: "Tomado",
        paciente: {
          nombre: "Gabriela",
          apellido: "Díaz",
          dni: "00001111",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "12:30 - 13:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "13:00 - 13:30",
        turno: "Tomado",
        paciente: {
          nombre: "Esteban",
          apellido: "Ortiz",
          dni: "11112222",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "13:30 - 14:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "14:00 - 14:30",
        turno: "Tomado",
        paciente: {
          nombre: "Miriam",
          apellido: "Pérez",
          dni: "22223333",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "14:30 - 15:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "15:00 - 15:30",
        turno: "Tomado",
        paciente: {
          nombre: "Roberto",
          apellido: "Cruz",
          dni: "33334444",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "15:30 - 16:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "16:00 - 16:30",
        turno: "Tomado",
        paciente: {
          nombre: "Silvia",
          apellido: "Morales",
          dni: "44445555",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "16:30 - 17:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
      {
        hora: "17:00 - 17:30",
        turno: "Tomado",
        paciente: {
          nombre: "Matías",
          apellido: "Rojas",
          dni: "55556666",
          numeroHistoriaClinica: "HC345678",
        },
      },
      {
        hora: "17:30 - 18:00",
        turno: "Disponible",
        paciente: {
          nombre: null,
          apellido: null,
          dni: null,
          numeroHistoriaClinica: null,
        },
      },
    ],
  },
];
export default turnos;
