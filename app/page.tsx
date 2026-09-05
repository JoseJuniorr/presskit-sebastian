'use client';

import { useState, useRef } from 'react';

export default function PressKit() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main style={{ position: 'relative' }}>

      {/* Áudio de Fundo Global */}
      <audio ref={audioRef} src="/trilha.mp3" loop />

      {/* Botão Flutuante de Áudio */}
      <button 
        onClick={toggleAudio}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          backgroundColor: 'rgba(10, 10, 12, 0.85)',
          border: '1px solid var(--accent-magenta)',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '30px',
          cursor: 'pointer',
          fontFamily: "'Oswald', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '0.85rem',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: '0.3s'
        }}
      >
        <span style={{ 
          width: '8px', 
          height: '8px', 
          backgroundColor: isPlaying ? 'var(--accent-magenta)' : '#666', 
          borderRadius: '50%',
          display: 'inline-block',
          boxShadow: isPlaying ? '0 0 10px var(--accent-magenta)' : 'none'
        }}></span>
        {isPlaying ? 'Som: Ligado' : 'Ouvir Trilha'}
      </button>

      {/* 01. CAPA HERO */}
      <section className="section" style={{ justifyContent: 'space-between', paddingTop: '15vh' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/capa-zolpidem.jpg" 
            className="cover-img" 
            alt="Zolpidem" 
            style={{ maxWidth: '500px', marginBottom: '5vh', boxShadow: '0 20px 60px rgba(247,37,133,0.3)', margin: '0 auto' }} 
          />
          <h1 style={{ fontSize: '6rem', lineHeight: 1, letterSpacing: '-2px', marginTop: '40px' }}>
            SEBASTIAN<br />E O FAROL
          </h1>
          <h2 style={{ color: 'var(--accent-magenta)', fontSize: '1.5rem', marginTop: '20px', letterSpacing: '4px' }}>
            ZOLPIDEM / VERNIZ
          </h2>
        </div>
      </section>

      {/* 02. A BANDA E TRAJETÓRIA */}
      <section className="section" style={{ backgroundColor: 'var(--bg-lighter)' }}>
        <div className="row">
          <div className="col" style={{ flex: 1.2 }}>
            <img src="/banda.jpg" className="img-fluid" alt="Sebastian e o Farol" />
          </div>
          <div className="col">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>TRAJETÓRIA AUTORAL</h2>
            <p className="highlight-text" style={{ marginBottom: '40px' }}>Campo Mourão, PR • Desde 2018</p>
            <p style={{ color: '#fff' }}>Ao longo de sua trajetória, a banda percorreu diferentes territórios do rock alternativo, ampliando referências e experiências enquanto desenvolvia seu próprio repertório.</p>
            <p>Entre palco, composição e diferentes fases da formação, esse percurso gradualmente transformou influências diversas em uma linguagem autoral própria.</p>
            <p>Zolpidem representa o capítulo mais recente dessa trajetória e antecede Verniz, o próximo EP. O novo trabalho nasce depois de anos explorando diferentes caminhos: não para apagar as fases anteriores, mas para mostrar como elas desembocam no presente.</p>
          </div>
        </div>
      </section>

      {/* 03. FORMAÇÃO */}
      <section className="section">
        <h2 style={{ fontSize: '3.5rem', borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '20px' }}>FORMAÇÃO</h2>
        <div className="formation-grid">
          <div>
            <img src="/caio.jpg" className="member-img" alt="Caio Larraneaga" />
            <h3 style={{ fontSize: '1.8rem', marginTop: '15px', letterSpacing: '1px' }}>CAIO LARRANEAGA</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>voz / guitarra</p>
          </div>
          <div>
            <img src="/jose.jpg" className="member-img" alt="José Jr" />
            <h3 style={{ fontSize: '1.8rem', marginTop: '15px', letterSpacing: '1px' }}>JOSÉ JR</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>baixo</p>
          </div>
          <div>
            <img src="/gean.jpg" className="member-img" alt="Gean Razera" />
            <h3 style={{ fontSize: '1.8rem', marginTop: '15px', letterSpacing: '1px' }}>GEAN RAZERA</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>bateria / voz</p>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO DISCOGRAFIA */}
      <section className="section" style={{ minHeight: '40vh', textAlign: 'center', backgroundColor: 'var(--bg-lighter)', alignItems: 'center' }}>
        <h2 style={{ fontSize: '3rem', color: '#fff', letterSpacing: '2px' }}>QUATRO CAPAS. DIFERENTES FASES.</h2>
        <h2 style={{ fontSize: '3rem', color: 'var(--accent-magenta)', letterSpacing: '2px' }}>UMA TRAJETÓRIA AUTORAL.</h2>
      </section>

      {/* 04. PRIMEIRO EP */}
      <section className="section">
        <div className="row">
          <div className="col" style={{ textAlign: 'center' }}>
            <img src="/capa-ep1.jpg" className="cover-img" alt="Primeiro EP" />
          </div>
          <div className="col">
            <p className="highlight-text" style={{ color: '#666' }}>2019 • EP</p>
            <h3 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '20px' }}>PRIMEIRO EP</h3>
            <p style={{ color: '#fff' }}>O ponto de partida.</p>
            <p>O registro inicial do caminho autoral que a banda continuaria desenvolvendo nos lançamentos seguintes. Reúne músicas fundamentais para a primeira identidade do grupo, como “Visita”, “Nem de Longe” e “Cartão-Postal”.</p>
          </div>
        </div>
      </section>

      {/* 05. CARTAS E CANÇÕES */}
      <section className="section" style={{ backgroundColor: 'var(--bg-lighter)' }}>
        <div className="row row-reverse">
          <div className="col" style={{ textAlign: 'center' }}>
            <img src="/capa-cartas.jpg" className="cover-img" alt="Cartas e Canções para Estranhos" />
          </div>
          <div className="col">
            <p className="highlight-text" style={{ color: '#666' }}>EP • 3 faixas</p>
            <h3 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '20px' }}>CARTAS E CANÇÕES<br />PARA ESTRANHOS</h3>
            <p style={{ color: '#fff' }}>Um mergulho para dentro.</p>
            <p>Letras confessionais, cartas que não foram enviadas e canções que visitam lugares difíceis com delicadeza. O título e a arte reforçam uma linguagem mais íntima, ligada a relações, memória e comunicação.</p>
          </div>
        </div>
      </section>

      {/* 06. QUADROS */}
      <section className="section">
        <div className="row">
          <div className="col" style={{ textAlign: 'center' }}>
            <img src="/capa-quadros.jpg" className="cover-img" alt="Quadros" />
          </div>
          <div className="col">
            <p className="highlight-text" style={{ color: '#666' }}>Single</p>
            <h3 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '20px' }}>QUADROS</h3>
            <p style={{ color: '#fff' }}>Retratos de cenas e pessoas que marcaram o caminho.</p>
            <p>Aqui surge outro ponto de inflexão na trajetória autoral. Arranjos mais densos e uma produção que passa a moldar o rock da banda em novas cores, mantendo a presença humana que atravessa os trabalhos anteriores.</p>
          </div>
        </div>
      </section>

      {/* 07. ZOLPIDEM */}
      <section className="section" style={{ background: 'radial-gradient(circle at center, #23083b 0%, var(--bg-dark) 80%)' }}>
        <div className="row row-reverse">
          <div className="col" style={{ textAlign: 'center' }}>
            <img src="/capa-zolpidem.jpg" className="cover-img" alt="Zolpidem" style={{ boxShadow: '0 20px 60px rgba(247,37,133,0.15)' }} />
          </div>
          <div className="col">
            <p className="highlight-text" style={{ color: 'var(--accent-magenta)' }}>Novo Single</p>
            <h3 style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '20px', color: '#fff' }}>ZOLPIDEM</h3>
            <p style={{ color: '#fff', fontSize: '1.4rem' }}>Ansiedade, insônia e fuga.</p>
            <p>Um mergulho noturno, saturado e íntimo. A imagem do single troca a ilustração dos trabalhos anteriores por uma fotografia direta — uma ruptura visual e estética que abre as portas para a próxima fase da banda.</p>
          </div>
        </div>
      </section>

      {/* 08. VERNIZ */}
      <section className="section" style={{ textAlign: 'center', alignItems: 'center', backgroundColor: 'var(--bg-lighter)' }}>
        <p className="highlight-text" style={{ marginBottom: '10px' }}>O Próximo Capítulo</p>
        <h1 style={{ fontSize: '8rem', letterSpacing: '12px', marginBottom: '30px', color: '#fff' }}>VERNIZ</h1>
        <div style={{ maxWidth: '700px' }}>
          <p style={{ color: 'var(--accent-magenta)', fontWeight: 600, fontSize: '1.5rem', marginBottom: '25px' }}>Zolpidem foi apenas o primeiro sinal.</p>
          <p style={{ fontSize: '1.3rem' }}>Verniz aprofunda a densidade sonora da banda. O novo EP traz mais peso, equilibrando texturas ruidosas.</p>
        </div>
      </section>

      {/* 09. AO VIVO */}
      <section className="section" style={{ padding: 0, minHeight: '80vh', position: 'relative', backgroundColor: '#000', overflow: 'hidden' }}>
        <video 
          src="/aovivo.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: '0.65', 
            position: 'absolute', 
            top: 0, 
            left: 0 
          }} 
        />
        <div style={{ position: 'relative', zIndex: 2, padding: '10vh 8vw', pointerEvents: 'none' }}>
          <h2 style={{ fontSize: '4rem', color: '#fff', letterSpacing: '2px' }}>AO VIVO</h2>
        </div>
      </section>

      {/* 10. SPOTIFY / CONTATO */}
      <section className="section" style={{ alignItems: 'center', textAlign: 'center', minHeight: '50vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>SEBASTIAN E O FAROL</h1>
        <p style={{ marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Ouça a discografia completa</p>
        
        <a 
          href="https://open.spotify.com/artist/6SKi5CS6eE65mZTKPER9cP" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: 'var(--accent-magenta)', 
            color: '#fff', 
            padding: '15px 40px', 
            fontSize: '1.2rem', 
            fontFamily: "'Oswald', sans-serif", 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            textDecoration: 'none', 
            borderRadius: '5px', 
            transition: '0.3s', 
            boxShadow: '0 10px 20px rgba(247,37,133,0.3)' 
          }}
        >
          Ouvir no Spotify
        </a>
      </section>
    </main>
  );
}
