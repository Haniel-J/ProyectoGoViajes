import React, { useState } from "react";
import cancunImg from "../../assets/cancun.png";
import cancunImg2 from "../../assets/cancun2.png";
import cabosImg from "../../assets/cabos.png";
import cabosImg2 from "../../assets/cabos2.png";

import { Link } from "react-router-dom";
import { Plane, Train, Bus, Ship, MapPin, Users, User } from "lucide-react"

export default function Home() {
  const destinos = [cancunImg, cabosImg, cancunImg2, cabosImg2];
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % destinos.length);
  };
  const anterior = () => {
    setIndex((prev) => (prev - 1 + destinos.length) % destinos.length);
  };

  return (
    <div className="home-container">
       <header className="topbar flex justify-between items-center px-4 py-2 bg-white shadow-md">
        <div className="title-wrapper flex items-center">
          <div className="circle-deco mr-2" />
          <h1 className="site-title text-2xl font-bold text-[#8b1f3b]">GoViaje</h1>
        </div>
        <nav className="main-nav flex space-x-4">
          <Link to="/destination" className="nav-item flex items-center text-gray-700 hover:text-[#8b1f3b]">
            <MapPin className="icon mr-1" />
            <span>Destinos</span>
          </Link>
          <Link to="/about" className="nav-item flex items-center text-gray-700 hover:text-[#8b1f3b]">
            <Users className="icon mr-1" />
            <span>Nosotros</span>
          </Link>
          <Link to="/login" className="nav-item flex items-center text-gray-700 hover:text-[#8b1f3b]">
            <User className="icon mr-1" />
            <span>Iniciar sesión</span>
          </Link>
        </nav>
      </header>

      {/* Transporte moderno con botones estilizados */}
      <nav className="transport-nav">
        <button className="icon-button">
          <Plane />
          <span>Vuelos</span>
        </button>
        <button className="icon-button">
          <Train />
          <span>Trenes</span>
        </button>
        <button className="icon-button">
          <Bus />
          <span>Autobuses</span>
        </button>
      </nav>

      {/* Slider hero con animación */}
      <section className="hero">
        <button className="arrow arrow-left" onClick={anterior}>{'<'}</button>
        <div className="hero-slider" style={{ position: "relative" }}>
          {destinos.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Destino ${i}`}
              className={`hero-img ${i === index ? "active" : ""}`}
              style={{
                filter: i === index ? "brightness(0.55) grayscale(0.15) blur(0px)" : "brightness(0.7) grayscale(0.25) blur(2px)",
                transition: "filter 0.7s, opacity 0.7s",
                borderRadius: "1.5rem",
                boxShadow: i === index ? "0 8px 32px rgba(0,0,0,0.18)" : "none",
                opacity: i === index ? 1 : 0,
                position: i === index ? "relative" : "absolute",
                width: "100%",
                height: "340px",
                objectFit: "cover",
                zIndex: i === index ? 2 : 1,
              }}
            />
          ))}
          <div className="hero-overlay" style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            borderRadius: "1.5rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent 70%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            pointerEvents: "none",
            zIndex: 3,
          }}>
            <i className="hero-icon" style={{ fontSize: 38, marginBottom: 10, color: "#fff", textShadow: "0 2px 12px #8b1f3b" }}>
              {index === 0 && "🌴"}
              {index === 1 && "🌅"}
              {index === 2 && "🏨"}
              {index === 3 && "🌊"}
            </i>
            <h2 className="hero-title" style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: 34,
              marginBottom: 8,
              letterSpacing: 1.2,
              textShadow: "0 4px 18px #8b1f3b, 0 2px 8px #0007",
              textTransform: "uppercase",
              background: "linear-gradient(90deg,#fff,#8b1f3b 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {index === 0 && "Cancún"}
              {index === 1 && "Los Cabos"}
              {index === 2 && "Cancún Zona Hotelera"}
              {index === 3 && "Cabo San Lucas"}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 32,
                marginTop: 4,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 16,
                  padding: "12px 28px",
                  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: 0.3,
                  maxWidth: 420,
                  minWidth: 220,
                  textAlign: "center",
                  border: "1.5px solid #fff3",
                  gap: 12,
                  textShadow: "0 2px 8px #8b1f3b, 0 2px 8px #0007",
                }}
              >
                <span style={{ fontSize: 24, marginRight: 6 }}>
                  {index === 0 && "☀️"}
                  {index === 1 && "🏜️"}
                  {index === 2 && "🏊‍♂️"}
                  {index === 3 && "🐬"}
                </span>
                <span>
                  {index === 0 && "Playas paradisíacas y cultura maya"}
                  {index === 1 && "Paisajes desérticos y marinos"}
                  {index === 2 && "Hoteles de lujo y actividades"}
                  {index === 3 && "El Arco y vida marina"}
                </span>
              </div>
            </div>
          </div>
          {/* ...indicadores... */}
        </div>
        <button className="arrow arrow-right" onClick={siguiente}>{'>'}</button>
      </section>

      {/* Sección de servicios destacados */}
      <section className="services-section" style={{maxWidth: 900, margin: '0 auto', padding: '48px 0 24px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32}}>
        <div style={{background: 'rgba(255,255,255,0.85)', borderRadius: 18, boxShadow: '0 2px 16px #8b1f3b22', padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <span style={{fontSize: 36, marginBottom: 10}}>🛫</span>
          <h3 style={{fontWeight: 700, fontSize: 20, color: '#8b1f3b', marginBottom: 6}}>Viajes Flexibles</h3>
          <p style={{color: '#444'}}>Cambia o cancela tu viaje sin complicaciones y sin cargos ocultos.</p>
        </div>
        <div style={{background: 'rgba(255,255,255,0.85)', borderRadius: 18, boxShadow: '0 2px 16px #8b1f3b22', padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <span style={{fontSize: 36, marginBottom: 10}}>📞</span>
          <h3 style={{fontWeight: 700, fontSize: 20, color: '#8b1f3b', marginBottom: 6}}>Atención 24/7</h3>
          <p style={{color: '#444'}}>Soporte personalizado en todo momento para resolver tus dudas.</p>
        </div>
        <div style={{background: 'rgba(255,255,255,0.85)', borderRadius: 18, boxShadow: '0 2px 16px #8b1f3b22', padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <span style={{fontSize: 36, marginBottom: 10}}>🛡️</span>
          <h3 style={{fontWeight: 700, fontSize: 20, color: '#8b1f3b', marginBottom: 6}}>Viaja Seguro</h3>
          <p style={{color: '#444'}}>Tu seguridad es nuestra prioridad en cada destino y transporte.</p>
        </div>
      </section>

      {/* Sección de llamada a la acción */}
      <section className="cta-section" style={{textAlign: 'center', padding: '40px 0 60px 0'}}>
        <h3 style={{fontSize: 28, fontWeight: 700, color: '#8b1f3b', marginBottom: 12}}>¿Listo para tu próxima aventura?</h3>
        <Link
          to="/destination"
          style={{
            display: 'inline-block',
            background: '#8b1f3b',
            color: '#fff',
            padding: '16px 40px',
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 20,
            boxShadow: '0 2px 12px #8b1f3b44',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          Ver destinos y reservar
        </Link>
      </section>

      {/* Sección de testimonios */}
      <section className="testimonials-section" style={{background: 'linear-gradient(90deg, #fff 60%, #8b1f3b0a 100%)', padding: '40px 0 32px 0'}}>
        <h3 style={{textAlign: 'center', fontSize: 26, fontWeight: 700, color: '#8b1f3b', marginBottom: 32}}>Lo que opinan nuestros viajeros</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32}}>
          <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #8b1f3b22', padding: 24, maxWidth: 320, minWidth: 220}}>
            <div style={{fontSize: 22, marginBottom: 8}}>⭐⭐⭐⭐⭐</div>
            <p style={{color: '#333', fontStyle: 'italic', marginBottom: 10}}>
              "¡Una experiencia inolvidable! Todo fue fácil y seguro. Volveré a reservar con GoViaje."
            </p>
            <div style={{fontWeight: 600, color: '#8b1f3b'}}>María G.</div>
          </div>
          <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #8b1f3b22', padding: 24, maxWidth: 320, minWidth: 220}}>
            <div style={{fontSize: 22, marginBottom: 8}}>⭐⭐⭐⭐⭐</div>
            <p style={{color: '#333', fontStyle: 'italic', marginBottom: 10}}>
              "El mejor servicio y atención. Me ayudaron en todo momento. ¡Recomendado!"
            </p>
            <div style={{fontWeight: 600, color: '#8b1f3b'}}>Carlos R.</div>
          </div>
          <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #8b1f3b22', padding: 24, maxWidth: 320, minWidth: 220}}>
            <div style={{fontSize: 22, marginBottom: 8}}>⭐⭐⭐⭐⭐</div>
            <p style={{color: '#333', fontStyle: 'italic', marginBottom: 10}}>
              "Reservar fue rápido y sencillo. Los destinos son espectaculares."
            </p>
            <div style={{fontWeight: 600, color: '#8b1f3b'}}>Ana P.</div>
          </div>
        </div>
      </section>

      {/* Sección de contacto rápido */}
      <section className="contact-section" style={{background: '#8b1f3b', color: '#fff', padding: '36px 0 24px 0', textAlign: 'center'}}>
        <h3 style={{fontSize: 24, fontWeight: 700, marginBottom: 18}}>¿Tienes dudas o necesitas ayuda?</h3>
        <p style={{fontSize: 17, marginBottom: 18}}>Contáctanos por WhatsApp o correo y te responderemos lo antes posible.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap'}}>
          <a href="https://wa.me/5215555555555" target="_blank" rel="noopener noreferrer" style={{background: '#fff', color: '#25D366', borderRadius: 10, padding: '10px 24px', fontWeight: 600, fontSize: 17, textDecoration: 'none', boxShadow: '0 2px 8px #0002', display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{fontSize: 22}}>💬</span> WhatsApp
          </a>
          <a href="mailto:contacto@goviaje.com" style={{background: '#fff', color: '#8b1f3b', borderRadius: 10, padding: '10px 24px', fontWeight: 600, fontSize: 17, textDecoration: 'none', boxShadow: '0 2px 8px #0002', display: 'flex', alignItems: 'center', gap: 8}}>
            <span style={{fontSize: 22}}>✉️</span> Correo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#2d0a1a', color: '#fff', padding: '32px 0 18px 0', textAlign: 'center', marginTop: 0}}>
        <div style={{fontWeight: 700, fontSize: 20, letterSpacing: 1}}>GoViaje</div>
        <div style={{margin: '10px 0 8px 0', fontSize: 15, color: '#fff9'}}>Tu mejor experiencia de viaje en México</div>
        <div style={{fontSize: 13, color: '#fff7'}}>© {new Date().getFullYear()} GoViaje. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
