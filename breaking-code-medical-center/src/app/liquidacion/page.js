'use client';
import { useState, useCallback, useEffect, useRef } from "react";
import Swal from 'sweetalert2';
import Message from "@/Components/UIComponents/Message";
import SearchMedico from "@/Components/UIComponents/SearchMedico";
import LiquidacionesForm from "@/Components/liquidaciones/LiquidacionesForm";
import PaymentOrder from "@/Components/liquidaciones/PaymentOrder";

const Liquidacion = () => {
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [honorarios, setHonorarios] = useState(null);
  const [error, setError] = useState(null);
  const [numeroFactura, setNumeroFactura] = useState(1687);
  const [responseMessage, setResponseMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [isPaymentProcessed, setIsPaymentProcessed] = useState(false); 

  const prevSelectedMedicoRef = useRef(); 

  const handleSearch = useCallback(async (searchText) => {
    if (!searchText.trim()) {
      setResultados(null);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`/api/agenda/getDoctorByName?name=${searchText}`);
      if (response.ok) {
        const data = await response.json();
        setResultados(data);
      } else {
        console.error("Error en la respuesta de la API");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleHonorarios = useCallback(async () => {
    if (!selectedMedico) {
      setError('No se ha seleccionado un médico.');
      return;
    }

    setLoading(true);
    setError(null);
    setHonorarios(null);

    const { nombreEspecialidad, medicoId } = selectedMedico;
    const fechaActual = new Date().toISOString().split('T')[0];

    try {
      const response = await fetch(`/api/liquidaciones/getFees?medicoId=${medicoId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al obtener información de honorarios');
      }
      const data = await response.json();

      if (data && data.length > 0) {
        const updatedData = data.map(item => ({
          ...item,
          medicoId,
          fechaActual,
          nombreEspecialidad
        }));

        setHonorarios(updatedData);
        setNumeroFactura((prev) => prev + 1);
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No hay honorarios para liquidar',
          showConfirmButton: false,
          timer: 1500
        });
        setHonorarios([]); 
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [selectedMedico]);

  useEffect(() => {
    if (prevSelectedMedicoRef.current !== selectedMedico) {
      handleHonorarios();
    } 
    prevSelectedMedicoRef.current = selectedMedico;
  }, [selectedMedico, handleHonorarios]);

  const payFees = async () => {
    const { medicoId } = selectedMedico;
    Swal.fire({
      title: '¿Está seguro?',
      text: "Vas a Liquidar los Honorarios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, pagar honorarios!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch("/api/liquidaciones/payFees", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ medicoId }), 
          });

          if (!response.ok) {
            const errorData = await response.json(); 
            setErrorMessage(errorData.error || 'Error al pagar honorarios'); 
            setResponseMessage('');             
            return;
          }

          const data = await response.json(); 
          setResponseMessage(data.respuesta || 'Honorarios pagados!'); 
          setErrorMessage(''); 
          setIsPaymentProcessed(true); 
          Swal.fire(
            'Pagado!',
            'Los honorarios han sido pagados.',
            'success'
          );
        } catch (error) {
          setErrorMessage('Error en la conexión al servidor: ' + error.message); 
          setResponseMessage(''); 
          Swal.fire(
            'Error!',
            'Hubo un problema al procesar el pago.',
            'error'
          );
        }
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-170px)]">
      <SearchMedico
        titulo="Liquidación de Honorarios"
        onSearch={handleSearch}
        setSelectedMedico={setSelectedMedico}
        setResultados={setResultados}
        resultados={resultados}
        loading={loading}
        setLoading={setLoading}
        handleHonorarios={handleHonorarios}
      />
      {selectedMedico && honorarios && honorarios.length > 0 ? (
        !isPaymentProcessed ? ( 
          <LiquidacionesForm loading={loading} honorarios={honorarios} payFees={payFees} />
        ) : null 
      ) : (
        selectedMedico && honorarios && honorarios.length === 0 && (
          <Message message="No hay honorarios para liquidar." />
        )
      )}
      {!selectedMedico && <Message message="Ingrese nombre del médico para su liquidación." />}
      {isPaymentProcessed && selectedMedico && honorarios && honorarios.length > 0 && ( 
        <PaymentOrder honorarios={honorarios} numeroFactura={numeroFactura} />
      )}
    </div>
  );
};

export default Liquidacion;
