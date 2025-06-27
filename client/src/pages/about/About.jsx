import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl border-t-8 border-[#8b1f3b] p-12 overflow-hidden">
        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-72 h-72 bg-[#8b1f3b] rounded-full opacity-20 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#8b1f3b] rounded-full opacity-20 blur-3xl pointer-events-none"
        />

        {/* Contenido principal */}
        <h1 className="text-5xl font-extrabold text-[#8b1f3b] mb-10 text-center md:text-left tracking-wider drop-shadow-md">
          Sobre Nosotros
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-14 text-center md:text-left">
          En{" "}
          <span className="font-semibold text-[#8b1f3b]">GoViaje</span> somos un equipo apasionado
          por los viajes y las experiencias únicas. Nuestra misión es ayudarte a descubrir destinos
          increíbles y vivir aventuras inolvidables, siempre con la mejor atención y confianza.
        </p>

        {/* Tarjetas del equipo */}
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {[{
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
            alt: "Equipo GoViaje",
            title: "Nuestro Equipo",
            desc: "Profesionales dedicados a planear tu viaje ideal."
          }, {
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80",
            alt: "Experiencia",
            title: "Nuestra Experiencia",
            desc: "Más de 10 años creando recuerdos para nuestros viajeros."
          }].map(({ img, alt, title, desc }, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-tr from-[#8b1f3b] to-[#5e1226] rounded-3xl shadow-xl p-6 flex flex-col items-center text-white group cursor-pointer hover:scale-[1.05] transition-transform"
            >
              {/* Imagen circular con efecto */}
              <div className="rounded-full border-8 border-white p-1 shadow-lg -mt-16 mb-6 bg-white">
                <img
                  src={img}
                  alt={alt}
                  className="w-28 h-28 object-cover rounded-full transition-transform group-hover:rotate-3 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">{title}</h2>
              <p className="text-sm font-light max-w-xs text-center drop-shadow-md">{desc}</p>

              {/* Decoración dinámica */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full opacity-20 blur-xl rotate-12 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-4 left-4 w-20 h-20 border-4 border-white rounded-full opacity-30 animate-pulse pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
