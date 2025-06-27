import React, { useEffect, useRef } from "react";
import { X, MapPin, Clock, DollarSign, Plane, Train, Bus } from "lucide-react";

export default function ModalReservar({ open, setOpen, destino }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (open && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [open]);

  const handleClose = () => setOpen(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // Icono según transporte
  const getTransportIcon = () => {
    const nombre = destino?.nombre?.toLowerCase() || '';
    if (nombre.includes('avión') || nombre.includes('vuelo')) {
      return <Plane className="icon" style={{ color: "#007BFF" }} />;
    } else if (nombre.includes('tren')) {
      return <Train className="icon" style={{ color: "#22c55e" }} />;
    } else if (nombre.includes('autobús')) {
      return <Bus className="icon" style={{ color: "#f59e42" }} />;
    }
    return <MapPin className="icon" style={{ color: "#8b1f3b" }} />;
  };

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(3px)",
        padding: 16,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
    >
      <div
        className="form"
        style={{
          borderRadius: 24,
          maxWidth: 480,
          width: "100%",
          position: "relative",
          boxShadow: "0 8px 32px rgba(139, 31, 59, 0.08)",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: 0,
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(90deg, #8b1f3b 0%, #A91B60 100%)",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: "2rem 2rem 1.2rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              width: 32,
              height: 32,
              background: "rgba(255,255,255,0.18)",
              border: "none",
              borderRadius: "50%",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, transform 0.2s",
            }}
            onClick={handleClose}
            aria-label="Cerrar modal"
            onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.28)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
          <h2 id="modal-title" className="site-title" style={{ color: "#fff", fontSize: "2rem", marginBottom: 6 }}>
            Reservar Viaje
          </h2>
          <p style={{ color: "#fff", opacity: 0.9, fontSize: "1rem", marginBottom: 0 }}>
            Completa tus datos para confirmar la reserva
          </p>
        </div>

        {/* Info destino */}
        <div
          style={{
            background: "linear-gradient(90deg, #f9fafb 0%, #f3f4f6 100%)",
            borderRadius: 18,
            margin: "1.5rem 2rem 1.5rem 2rem",
            padding: "1rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            {getTransportIcon()}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 700, color: "#8b1f3b", fontSize: "1.1rem", marginBottom: 8 }}>
                {destino?.nombre}
              </h3>
              <div style={{ display: "flex", gap: 16, fontSize: "0.95rem", color: "#444" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock className="icon" /> <span>{destino?.duracion}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin className="icon" /> <span>{destino?.aeropuerto || destino?.estacion || destino?.terminal}</span>
                </div>
              </div>
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <DollarSign className="icon" style={{ color: "#8b1f3b" }} />
                  <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#8b1f3b" }}>
                    {destino?.precio}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#888" }}>por persona</span>
                </div>
                <div style={{
                  background: "#d1fae5",
                  color: "#065f46",
                  padding: "2px 10px",
                  borderRadius: 999,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}>
                  ★ {destino?.popularidad}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form style={{ padding: "0 2rem 2rem 2rem" }}>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="nombre" style={{ color: "#8b1f3b", fontWeight: 500, marginBottom: 4, display: "block" }}>
              Nombre completo *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              ref={firstInputRef}
              placeholder="Ej. Juan Pérez García"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1.5px solid #8b1f3b",
                borderRadius: 8,
                marginTop: 4,
                marginBottom: 12,
                fontSize: "1rem",
                color: "#333",
                background: "#f9f9fa",
                transition: "border 0.2s, box-shadow 0.2s",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = "#A91B60"}
              onBlur={e => e.target.style.borderColor = "#8b1f3b"}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="email" style={{ color: "#8b1f3b", fontWeight: 500, marginBottom: 4, display: "block" }}>
              Correo electrónico *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="correo@ejemplo.com"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1.5px solid #8b1f3b",
                borderRadius: 8,
                marginTop: 4,
                marginBottom: 12,
                fontSize: "1rem",
                color: "#333",
                background: "#f9f9fa",
                transition: "border 0.2s, box-shadow 0.2s",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = "#A91B60"}
              onBlur={e => e.target.style.borderColor = "#8b1f3b"}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="telefono" style={{ color: "#8b1f3b", fontWeight: 500, marginBottom: 4, display: "block" }}>
              Teléfono de contacto *
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              placeholder="Ej. 555-123-4567"
              pattern="[0-9]{10,15}"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1.5px solid #8b1f3b",
                borderRadius: 8,
                marginTop: 4,
                marginBottom: 12,
                fontSize: "1rem",
                color: "#333",
                background: "#f9f9fa",
                transition: "border 0.2s, box-shadow 0.2s",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = "#A91B60"}
              onBlur={e => e.target.style.borderColor = "#8b1f3b"}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="fecha" style={{ color: "#8b1f3b", fontWeight: 500, marginBottom: 4, display: "block" }}>
              Fecha preferida de viaje *
            </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1.5px solid #8b1f3b",
                borderRadius: 8,
                marginTop: 4,
                marginBottom: 12,
                fontSize: "1rem",
                color: "#333",
                background: "#f9f9fa",
                transition: "border 0.2s, box-shadow 0.2s",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = "#A91B60"}
              onBlur={e => e.target.style.borderColor = "#8b1f3b"}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="pasajeros" style={{ color: "#8b1f3b", fontWeight: 500, marginBottom: 4, display: "block" }}>
              Número de pasajeros
            </label>
            <select
              id="pasajeros"
              name="pasajeros"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                border: "1.5px solid #8b1f3b",
                borderRadius: 8,
                marginTop: 4,
                marginBottom: 12,
                fontSize: "1rem",
                color: "#333",
                background: "#f9f9fa",
                transition: "border 0.2s, box-shadow 0.2s",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = "#A91B60"}
              onBlur={e => e.target.style.borderColor = "#8b1f3b"}
            >
              <option value="1">1 pasajero</option>
              <option value="2">2 pasajeros</option>
              <option value="3">3 pasajeros</option>
              <option value="4">4 pasajeros</option>
              <option value="5+">5 o más pasajeros</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: 12, paddingTop: 16 }}>
            <button
              type="button"
              onClick={handleClose}
              style={{
                flex: 1,
                background: "#f3f4f6",
                color: "#8b1f3b",
                padding: "0.75rem 0",
                borderRadius: 8,
                fontWeight: 600,
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.background = "#e5e7eb"}
              onMouseOut={e => e.currentTarget.style.background = "#f3f4f6"}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => {
                alert("¡Reservación enviada con éxito!");
                handleClose();
              }}
              style={{
                flex: 1,
                background: "linear-gradient(90deg, #8b1f3b 0%, #A91B60 100%)",
                color: "#fff",
                padding: "0.75rem 0",
                borderRadius: 8,
                fontWeight: 600,
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(139, 31, 59, 0.08)",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.background = "linear-gradient(90deg, #A91B60 0%, #8b1f3b 100%)"}
              onMouseOut={e => e.currentTarget.style.background = "linear-gradient(90deg, #8b1f3b 0%, #A91B60 100%)"}
            >
              Confirmar Reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}