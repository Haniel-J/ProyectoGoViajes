import React, { useState, useEffect } from "react";
import cancunImg from "../../assets/cancun.png";
import cancunImg3 from "../../assets/cancun3.png";
import cabosImg from "../../assets/cabos.png";
import cabosImg3 from "../../assets/cabos3.png";

export default function Login() {
  const fondos = [cancunImg, cabosImg, cancunImg3, cabosImg3];
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json(); // 👈 Agregado: obtener datos del usuario
        localStorage.setItem("user", JSON.stringify(data)); // 👈 Guardar todo el objeto del usuario
        window.location.href = "/";
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (err) {
      alert("Error de conexión");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100">
      {fondos.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`fondo-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          } filter brightness-75`}
          style={{ willChange: "opacity" }}
        />
      ))}

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 75%)",
        }}
      ></div>

      <div className="relative z-20 w-full max-w-md bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-t-8 border-[#8b1f3b]">
        <h2 className="text-4xl font-extrabold text-center text-[#8b1f3b] mb-10 tracking-wide drop-shadow-md">
          Inicia sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#8b1f3b] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#8b1f3b] transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#8b1f3b] hover:bg-[#6e162a] text-white font-bold rounded-xl shadow-lg transition-colors duration-300 focus:ring-4 focus:ring-[#6e162a]/70"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-700 space-y-2">
          <a
            href="/recuperar"
            className="inline-block hover:text-[#8b1f3b] font-semibold transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <br />
          <a
            href="/register"
            className="inline-block hover:text-[#8b1f3b] font-semibold transition-colors"
          >
            ¿No tienes cuenta? Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
