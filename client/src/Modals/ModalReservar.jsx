import React, { useEffect, useRef } from "react";
import { X, MapPin, Clock, DollarSign, Plane, Train, Bus } from "lucide-react";

export default function ModalReservar({ open, setOpen, destino }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
  };

  // Cerrar modal al hacer clic en el backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Función para obtener el icono según el tipo de transporte
  const getTransportIcon = () => {
    const nombre = destino?.nombre?.toLowerCase() || '';
    if (nombre.includes('avión') || nombre.includes('vuelo')) {
      return <Plane className="w-5 h-5 text-blue-500" />;
    } else if (nombre.includes('tren')) {
      return <Train className="w-5 h-5 text-green-500" />;
    } else if (nombre.includes('autobús')) {
      return <Bus className="w-5 h-5 text-orange-500" />;
    }
    return <MapPin className="w-5 h-5 text-gray-500" />;
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-[#8b1f3b] to-[#A91B60] rounded-t-3xl p-6 relative overflow-hidden">
        
          <button
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Título del modal */}
          <div className="text-white">
            <h2 id="modal-title" className="text-2xl font-bold mb-2">
              Reservar Viaje
            </h2>
            <p className="text-white/90 text-sm">
              Completa tus datos para confirmar la reserva
            </p>
          </div>

          {/* Decoración del header */}
          <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute -right-2 -bottom-4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>

        {/* Contenido del modal */}
        <div className="p-6">
         
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-6 border border-gray-200">
            <div className="flex items-start gap-3">
              {getTransportIcon()}
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {destino?.nombre}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{destino?.duracion}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{destino?.aeropuerto || destino?.estacion || destino?.terminal}</span>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#8b1f3b]" />
                    <span className="text-2xl font-bold text-[#8b1f3b]">
                      {destino?.precio}
                    </span>
                    <span className="text-sm text-gray-500">por persona</span>
                  </div>
                  
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    ★ {destino?.popularidad}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* Nombre */}
            <div className="space-y-2">
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-gray-700"
              >
                Nombre completo *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                ref={firstInputRef}
                placeholder="Ej. Juan Pérez García"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8b1f3b] focus:ring-2 focus:ring-[#8b1f3b]/20 transition-all duration-200"
              />
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Correo electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="correo@ejemplo.com"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8b1f3b] focus:ring-2 focus:ring-[#8b1f3b]/20 transition-all duration-200"
              />
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
              <label
                htmlFor="telefono"
                className="block text-sm font-semibold text-gray-700"
              >
                Teléfono de contacto *
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                placeholder="Ej. 555-123-4567"
                pattern="[0-9]{10,15}"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8b1f3b] focus:ring-2 focus:ring-[#8b1f3b]/20 transition-all duration-200"
              />
            </div>

            {/* Fecha de viaje */}
            <div className="space-y-2">
              <label
                htmlFor="fecha"
                className="block text-sm font-semibold text-gray-700"
              >
                Fecha preferida de viaje *
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8b1f3b] focus:ring-2 focus:ring-[#8b1f3b]/20 transition-all duration-200"
              />
            </div>

            {/* Número de pasajeros */}
            <div className="space-y-2">
              <label
                htmlFor="pasajeros"
                className="block text-sm font-semibold text-gray-700"
              >
                Número de pasajeros
              </label>
              <select
                id="pasajeros"
                name="pasajeros"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8b1f3b] focus:ring-2 focus:ring-[#8b1f3b]/20 transition-all duration-200"
              >
                <option value="1">1 pasajero</option>
                <option value="2">2 pasajeros</option>
                <option value="3">3 pasajeros</option>
                <option value="4">4 pasajeros</option>
                <option value="5+">5 o más pasajeros</option>
              </select>
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("¡Reservación enviada con éxito!");
                  handleClose();
                }}
                className="flex-1 bg-gradient-to-r from-[#8b1f3b] to-[#A91B60] text-white py-3 rounded-xl font-semibold hover:from-[#A91B60] hover:to-[#8b1f3b] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Confirmar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}