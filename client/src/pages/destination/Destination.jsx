import React, { useState } from "react";
import {
  Plane, Train, Bus, Clock, MapPin, Star, ChevronRight, Users, Zap
} from "lucide-react";
import ModalReservar from "../../Modals/ModalReservar"; // IMPORTA EL MODAL

const destinosData = {
  aviones: [
    {
      nombre: "Ciudad de México → Cancún",
      duracion: "2h 30min",
      precio: "$2,450",
      popularidad: 4.8,
      aeropuerto: "Terminal 2",
      pasajeros: "180+"
    },
    {
      nombre: "Ciudad de México → Los Cabos",
      duracion: "2h 45min",
      precio: "$3,200",
      popularidad: 4.7,
      aeropuerto: "Terminal 1",
      pasajeros: "95+"
    }
  ],
  trenes: [
    {
      nombre: "Ciudad de México → Cancún",
      duracion: "18h 30min",
      precio: "$1,850",
      popularidad: 4.2,
      estacion: "Buenavista",
      pasajeros: "120+"
    },
    {
      nombre: "Ciudad de México → Los Cabos",
      duracion: "24h 45min",
      precio: "$2,100",
      popularidad: 4.0,
      estacion: "Buenavista",
      pasajeros: "85+"
    }
  ],
  autobuses: [
    {
      nombre: "Ciudad de México → Cancún",
      duracion: "22h 15min",
      precio: "$980",
      popularidad: 4.1,
      terminal: "Terminal Sur",
      pasajeros: "65+"
    },
    {
      nombre: "Ciudad de México → Los Cabos",
      duracion: "28h 30min",
      precio: "$1,200",
      popularidad: 3.9,
      terminal: "Terminal Norte",
      pasajeros: "45+"
    }
  ]
};


const hotelesData = [
  {
    nombre: "Hotel Paraíso Maya",
    ubicacion: "Cancún",
    precio: 1800,
    estrellas: 5,
    descripcion: "Frente al mar, todo incluido, ideal para familias.",
  },
  {
    nombre: "Resort Cabo Sol",
    ubicacion: "Los Cabos",
    precio: 2200,
    estrellas: 4,
    descripcion: "Piscina infinita y spa de lujo.",
  },
  {
    nombre: "Hotel Centro Cancún",
    ubicacion: "Cancún",
    precio: 950,
    estrellas: 3,
    descripcion: "Económico, céntrico y cómodo.",
  },
  {
    nombre: "Cabo Suites",
    ubicacion: "Los Cabos",
    precio: 1300,
    estrellas: 4,
    descripcion: "Suites modernas cerca de la playa.",
  },
];

const Destination = () => {
  const [seccionActiva, setSeccionActiva] = useState("aviones");
  const [modalOpen, setModalOpen] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);

  const configuraciones = {
    aviones: {
      titulo: "Vuelos Disponibles",
      icono: <Plane className="w-6 h-6" />,
      color: "border-[#8b1f3b]",
      bgColor: "bg-[#8b1f3b]",
      lightBg: "bg-[#8b1f3b]/5",
      textColor: "text-[#8b1f3b]",
      gradientBg: "bg-gradient-to-br from-[#8b1f3b]/10 to-[#A91B60]/5"
    },
    trenes: {
      titulo: "Rutas de Tren",
      icono: <Train className="w-6 h-6" />,
      color: "border-[#A91B60]",
      bgColor: "bg-[#A91B60]",
      lightBg: "bg-[#A91B60]/5",
      textColor: "text-[#A91B60]",
      gradientBg: "bg-gradient-to-br from-[#A91B60]/10 to-[#8b1f3b]/5"
    },
    autobuses: {
      titulo: "Líneas de Autobús",
      icono: <Bus className="w-6 h-6" />,
      color: "border-[#8b1f3b]",
      bgColor: "bg-[#8b1f3b]",
      lightBg: "bg-[#8b1f3b]/5",
      textColor: "text-[#8b1f3b]",
      gradientBg: "bg-gradient-to-br from-[#8b1f3b]/10 to-[#A91B60]/5"
    }
  };

  const abrirModal = (destino) => {
    setDestinoSeleccionado(destino);
    setModalOpen(true);
  };

  return (
    <div className="fondo-destinos">
      {/* Encabezado */}
      <header className="banner-destinos">
        <div className="title-wrapper" style={{ flexDirection: "column", alignItems: "center", padding: "2.5rem 0" }}>
          <div className="circle-deco" style={{ marginBottom: "1.5rem" }}>
            <MapPin className="hero-icon" />
          </div>
          <h1 className="hero-title site-title" style={{ marginBottom: "1rem" }}>
            Centro de <span style={{ color: "#A91B60" }}>Reservas</span>
          </h1>
          <p className="site-title" style={{ color: "#8b1f3b", fontSize: "1.2rem", marginBottom: 0 }}>
            Descubre las mejores opciones de transporte desde Ciudad de México hacia Cancún o Los Cabos.
          </p>
        </div>
      </header>

      {/* Navegación de transportes */}
      <nav className="transport-nav">
        {Object.entries(configuraciones).map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => setSeccionActiva(key)}
            className={`icon-button${seccionActiva === key ? " active" : ""}`}
            style={seccionActiva === key ? { backgroundColor: "#f3f4f6", color: "#A91B60", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" } : {}}
          >
            {cfg.icono}
            <span>{cfg.titulo}</span>
          </button>
        ))}
      </nav>

      {/* Tarjetas de destinos */}
      <div className="destinos-container">
        {destinosData[seccionActiva].map((destino, idx) => (
          <div
            key={idx}
            className="destino"
            style={{
              border: "1px solid #f3e6ed",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
              background: "#fff"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#8b1f3b", margin: 0 }}>{destino.nombre}</h2>
              <span style={{ color: "#FFD700", fontWeight: 500, fontSize: "0.95rem" }}>
                <Star className="icon" /> {destino.popularidad}
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#444", margin: "8px 0 4px 0" }}>
              <Clock className="icon" /> {destino.duracion}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#444", margin: "4px 0" }}>
              <MapPin className="icon" /> {destino.aeropuerto || destino.estacion || destino.terminal}
            </p>
            <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "#8b1f3b", margin: "8px 0 2px 0" }}>{destino.precio}</p>
            <p style={{ fontSize: "0.85rem", color: "#888" }}>{destino.pasajeros} este mes</p>
            <button
              onClick={() => abrirModal(destino)}
              className="btn-destinos"
              style={{ width: "100%", marginTop: 12 }}
            >
              Reservar <ChevronRight className="icon" />
            </button>
          </div>
        ))}
      </div>

      {/* Selector de hotel */}
      <section className="destinos-container" style={{ marginTop: 40 }}>
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "#8b1f3b", fontWeight: 700, fontSize: "1.2rem", marginBottom: 16 }}>Elige tu hotel</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {hotelesData.map((hotel, idx) => (
              <div
                key={idx}
                className="destino"
                style={{
                  border: hotelSeleccionado?.nombre === hotel.nombre ? "2px solid #8b1f3b" : "1px solid #f3e6ed",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  background: "#fff",
                  minWidth: 220
                }}
                onClick={() => setHotelSeleccionado(hotel)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#8b1f3b" }}>{hotel.nombre}</span>
                  <span style={{ color: "#FFD700" }}>{'★'.repeat(hotel.estrellas)}</span>
                </div>
                <div style={{ fontSize: "0.95rem", color: "#444", marginBottom: 4 }}>{hotel.ubicacion}</div>
                <div style={{ color: "#8b1f3b", fontWeight: 700, fontSize: "1.2rem", marginBottom: 4 }}>${hotel.precio}</div>
                <div style={{ fontSize: "0.85rem", color: "#888" }}>{hotel.descripcion}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen de total */}
      <section className="banner-destinos" style={{ maxWidth: 600, margin: "40px auto", borderRadius: 16, padding: 24, textAlign: "center" }}>
        <h3 style={{ color: "#8b1f3b", fontWeight: 700, fontSize: "1.1rem", marginBottom: 16 }}>Resumen de tu viaje</h3>
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600 }}>Transporte:</span> {destinoSeleccionado ? destinoSeleccionado.nombre : 'No seleccionado'}
        </div>
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600 }}>Hotel:</span> {hotelSeleccionado ? hotelSeleccionado.nombre : 'No seleccionado'}
        </div>
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 600 }}>Total:</span> {
            destinoSeleccionado && hotelSeleccionado
              ? `$${parseInt(destinoSeleccionado.precio.replace(/[^\d]/g, '')) + hotelSeleccionado.precio}`
              : 'Selecciona transporte y hotel'
          }
        </div>
      </section>

      {modalOpen && (
        <ModalReservar
          open={modalOpen}
          setOpen={setModalOpen}
          destino={destinoSeleccionado}
        />
      )}
    </div>
  );
};

export default Destination;