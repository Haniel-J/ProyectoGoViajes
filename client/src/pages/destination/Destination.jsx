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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Encabezado */}
      <header className="relative bg-white shadow-xl border-b overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-2xl bg-gradient-to-br from-[#8b1f3b] to-[#A91B60]">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Centro de <span className="bg-gradient-to-r from-[#8b1f3b] to-[#A91B60] bg-clip-text text-transparent">Reservas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre las mejores opciones de transporte desde Ciudad de México hacia Cancún o Los Cabos.
          </p>
        </div>
      </header>

      {/* Navegación */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center space-x-2">
          {Object.entries(configuraciones).map(([key, cfg]) => (
            <button
              key={key}
              onClick={() => setSeccionActiva(key)}
              className={`px-4 py-2 rounded-md font-semibold transition-all flex items-center space-x-2 ${seccionActiva === key ? `${cfg.bgColor} text-white shadow` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {cfg.icono}
              <span>{cfg.titulo}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tarjetas de destinos */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {destinosData[seccionActiva].map((destino, idx) => (
          <div
            key={idx}
            className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-gray-900">{destino.nombre}</h3>
              <span className="flex items-center text-yellow-500 text-sm font-medium">
                <Star className="w-4 h-4 mr-1" /> {destino.popularidad}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2"><Clock className="inline w-4 h-4 mr-1" /> {destino.duracion}</p>
            <p className="text-sm text-gray-600 mb-2"><MapPin className="inline w-4 h-4 mr-1" /> {destino.aeropuerto || destino.estacion || destino.terminal}</p>
            <p className="text-2xl font-bold text-[#8b1f3b] mb-1">{destino.precio}</p>
            <p className="text-xs text-gray-400">{destino.pasajeros} este mes</p>
            <button
              onClick={() => abrirModal(destino)}
              className="mt-4 w-full bg-[#8b1f3b] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#A91B60] transition"
            >
              Reservar <ChevronRight className="inline w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </main>

      {/* Selector de hotel */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-4 text-[#8b1f3b]">Elige tu hotel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotelesData.map((hotel, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border shadow transition cursor-pointer bg-white hover:shadow-lg ${hotelSeleccionado?.nombre === hotel.nombre ? 'ring-2 ring-[#8b1f3b]' : ''}`}
              onClick={() => setHotelSeleccionado(hotel)}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-lg text-gray-900">{hotel.nombre}</span>
                <span className="text-yellow-500">{'★'.repeat(hotel.estrellas)}</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">{hotel.ubicacion}</div>
              <div className="text-[#8b1f3b] font-bold text-xl mb-1">${hotel.precio}</div>
              <div className="text-xs text-gray-500">{hotel.descripcion}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resumen de total */}
      <section className="max-w-2xl mx-auto px-6 py-8 mt-8 mb-8 bg-white rounded-2xl shadow-lg border text-center">
        <h3 className="text-xl font-bold mb-4 text-[#8b1f3b]">Resumen de tu viaje</h3>
        <div className="mb-2">
          <span className="font-semibold">Transporte:</span> {destinoSeleccionado ? destinoSeleccionado.nombre : 'No seleccionado'}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Hotel:</span> {hotelSeleccionado ? hotelSeleccionado.nombre : 'No seleccionado'}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Total:</span> {
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