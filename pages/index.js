// SERAPHINE WEB - NIVEL RIOT 🔥
// Next.js listo para Vercel

// ============================
// package.json
// ============================
{
  "name": "seraphine-riot-style",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest"
  }
}

// ============================
// pages/index.js
// ============================
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.volume = 0.15;
    audio.loop = true;
    audio.play().catch(() => {});
  }, [started]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#0a001a,#1a0033,#000)",
      color: "white",
      fontFamily: "Arial",
      overflowX: "hidden"
    }}>

      {!started && (
        <div onClick={() => setStarted(true)} style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999
        }}>
          <h1 style={{ fontSize: "40px", cursor: "pointer" }}>
            🎧 CLICK PARA ENTRAR
          </h1>
        </div>
      )}

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "60px", textShadow: "0 0 30px #ff00ff" }}
        >
          SERAPHINE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ fontSize: "20px", opacity: 0.8 }}
        >
          "Escucho el mundo… y canto para cambiarlo"
        </motion.p>
      </section>

      {/* IMAGE */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center" }}
      >
        <img
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg"
          style={{ width: "85%", borderRadius: "20px", boxShadow: "0 0 50px #ff00ff" }}
        />
      </motion.div>

      {/* LORE */}
      <Section title="🌆 ORIGEN">
        Nacida entre Piltover y Zaun, Seraphine siempre escuchó las voces del mundo.
      </Section>

      <Section title="🎶 DON">
        Percibe emociones como música y puede amplificarlas.
      </Section>

      <Section title="⚔️ CONFLICTO">
        Dos ciudades, dos realidades. Ella busca unirlas.
      </Section>

      <Section title="🌈 PROPÓSITO">
        Crear armonía donde hay caos.
      </Section>

      {/* HABILIDADES */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>🎮 HABILIDADES</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "20px" }}>
          {[
            "Pasiva: Notas",
            "Q: Nota Alta",
            "W: Sonido Envolvente",
            "E: Beat Drop",
            "R: Encore"
          ].map((h, i) => (
            <motion.div key={i}
              whileHover={{ scale: 1.1 }}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 0 20px #ff00ff"
              }}
            >
              {h}
            </motion.div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "40px", opacity: 0.5 }}>
        ⚡ Nivel RIOT activado ⚡
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        margin: "40px auto",
        maxWidth: "800px",
        background: "rgba(255,255,255,0.05)",
        padding: "25px",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 0 30px rgba(255,0,255,0.3)"
      }}
    >
      <h2>{title}</h2>
      <p>{children}</p>
    </motion.div>
  );
}


      
