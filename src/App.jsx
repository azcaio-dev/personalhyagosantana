import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight, Dumbbell, HeartPulse, House, Menu, MoveUpRight,
  ShieldCheck, Target, Clock3, Headset, X, MessageCircle, Activity,
  PersonStanding, MapPin, Instagram
} from 'lucide-react';
import logo from './assets/logo-hyago.png';
import heroPhoto from './assets/hyago-hero.jpg';
import aboutPhoto from './assets/hyago-sobre.jpg';
import beforePhoto from './assets/resultado-antes.jpg';
import afterPhoto from './assets/resultado-depois.jpg';

const whatsapp = 'https://wa.me/5581988879369';
const message = (text) => `${whatsapp}?text=${encodeURIComponent(text)}`;

const track = (name) => {
  try { window.gtag?.('event', name); window.fbq?.('track', 'Contact'); } catch (e) { /* sem rastreamento */ }
};

// Adicione mais pares antes/depois aqui (importe as fotos acima). Com mais de um, vira carrossel no mobile.
const results = [
  { before: beforePhoto, after: afterPhoto },
];

const steps = [
  ['Conversa inicial', 'Você conta seu objetivo, sua rotina e onde prefere treinar.'],
  ['Plano sob medida', 'O treino é montado de acordo com seu nível e sua disponibilidade.'],
  ['Acompanhamento', 'Orientação próxima e ajustes conforme a sua evolução.'],
];

const faq = [
  ['Quanto custa o acompanhamento?', 'O valor depende da frequência semanal, do local e do seu objetivo. Chame no WhatsApp e receba uma proposta.'],
  ['Preciso ter experiência com treino?', 'Não. O plano é montado para o seu nível atual, seja você iniciante ou já treine.'],
  ['Em quais locais você atende?', 'Em Olinda e Recife, em domicílio, academias e condomínios.'],
  ['Quantas vezes por semana eu treino?', 'Isso é definido junto com você, de acordo com sua meta e sua rotina.'],
  ['Como eu começo?', 'É só chamar no WhatsApp. A gente conversa sobre seu objetivo e define o melhor formato.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -55px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    const onScroll = () => setVisible(window.scrollY > 30);
    const onClick = (e) => {
      if (e.target.closest?.('a[href^="https://wa.me"]')) track('whatsapp_click');
      if (!e.target.closest?.('.site-header')) setMenuOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${visible ? 'scrolled' : ''}`}>
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Hyago Santana - início">
          <img src={logo} alt="Hyago Santana Personal Trainer" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#treinamento" onClick={closeMenu}>Treinamento</a>
          <a href="#resultados" onClick={closeMenu}>Resultados</a>
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a className="nav-cta" href={message('Olá, Hyago! Gostaria de saber mais sobre seus treinamentos.')} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={17} /> Falar comigo
          </a>
        </nav>
      </header>

      <main>
      <section className="hero" id="inicio">
        <img className="hero-photo" src={heroPhoto} alt="Hyago Santana, personal trainer, sorrindo na academia" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <h1>HYAGO<br /><em>SANTANA</em></h1>
          <h2>PERSONAL TRAINER EM OLINDA E RECIFE</h2>
          <p className="hero-copy">Seu corpo mais forte.<br />Sua melhor versão começa agora.</p>
          <a className="button button-red" href={message('Olá, Hyago! Quero começar meu acompanhamento personalizado.')} target="_blank" rel="noreferrer">
            <MessageCircle size={21} /> Quero meu plano de treino <ArrowUpRight size={19} />
          </a>
          <div className="hero-highlights">
            <div><Dumbbell /><span>Treinos<br />personalizados</span></div>
            <div><Activity /><span>Condicionamento<br />e funcional</span></div>
            <div><House /><span>Atendimento<br />onde você estiver</span></div>
          </div>
        </div>
      </section>

      <section className="training section-pad" id="treinamento">
        <div className="section-heading reveal">
          <p className="section-kicker">COMO POSSO TE AJUDAR</p>
          <h2>Treinamento <em>personalizado</em></h2>
          <p>Um plano pensado para o seu objetivo e para a sua realidade.</p>
        </div>
        <div className="training-grid">
          <article className="training-card reveal"><span className="card-number">01</span><Dumbbell /><h3>Emagrecimento</h3><p>Treinos direcionados para apoiar sua jornada e construir hábitos mais ativos.</p><i /></article>
          <article className="training-card reveal"><span className="card-number">02</span><Activity /><h3>Condicionamento físico</h3><p>Desenvolva resistência, disposição e capacidade para o dia a dia.</p><i /></article>
          <article className="training-card reveal"><span className="card-number">03</span><HeartPulse /><h3>Treinamento funcional</h3><p>Movimentos e exercícios planejados para trabalhar o corpo de forma integrada.</p><i /></article>
          <article className="training-card reveal"><span className="card-number">04</span><Target /><h3>Treino personalizado</h3><p>Orientação de acordo com seus objetivos, nível e rotina.</p><i /></article>
        </div>
        <div className="locations reveal">
          <div className="locations-title"><MapPin /><div><strong>Você escolhe onde treinar</strong><span>Atendimento flexível para sua rotina.</span></div></div>
          <div className="location-chip"><House /> Domicílio</div>
          <div className="location-chip"><Dumbbell /> Academias</div>
          <div className="location-chip"><MapPin /> Condomínios</div>
        </div>
      </section>

      <section className="results section-pad" id="resultados">
        <div className="results-copy reveal">
          <p className="section-kicker">RESULTADOS REAIS</p>
          <h2>Evolução que<br /><em>inspira.</em></h2>
          <p>Cada jornada é única. Com orientação, consistência e dedicação, um passo de cada vez faz diferença.</p>
          <span className="result-note">REGISTRO DE EVOLUÇÃO DE ALUNA</span>
        </div>
        <div className="comparison-list reveal">
          {results.map((r, i) => (
            <div className="comparison" key={i}>
              <figure><img src={r.before} alt="Registro de evolução - antes" loading="lazy" /><figcaption>ANTES</figcaption></figure>
              <div className="comparison-arrow"><MoveUpRight /></div>
              <figure><img src={r.after} alt="Registro de evolução - depois" loading="lazy" /><figcaption>DEPOIS</figcaption></figure>
            </div>
          ))}
        </div>
      </section>

      <section className="about section-grid" id="sobre">
        <div className="about-image reveal">
          <img src={aboutPhoto} alt="Hyago Santana em uma academia" />
          <span className="image-corner" />
          <div className="photo-tag">HYAGO SANTANA <small>PERSONAL TRAINER</small></div>
        </div>
        <div className="about-copy reveal">
          <p className="section-kicker">SOBRE MIM</p>
          <h2>Treino com propósito.<br /><em>Resultado com estratégia.</em></h2>
          <p>Sou Hyago Santana, Personal Trainer. Meu trabalho é ajudar você a evoluir com treinos personalizados, foco no emagrecimento e desenvolvimento do condicionamento físico.</p>
          <p>O acompanhamento é pensado para sua rotina, seu objetivo e o lugar onde você prefere treinar.</p>
          <div className="cref"><span /> CREF 022176-G/PE</div>
          <a className="text-link" href="https://www.instagram.com/hyagosantana_personal/" target="_blank" rel="noreferrer">CONHEÇA MEU TRABALHO <MoveUpRight size={17} /></a>
        </div>
      </section>

      <section className="steps section-pad" id="como-funciona">
        <div className="section-heading reveal"><p className="section-kicker">COMO FUNCIONA</p><h2>Do primeiro contato <em>ao seu treino</em></h2></div>
        <ol className="steps-list">
          {steps.map(([title, text], i) => (
            <li className="step reveal" key={title}><span>{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="benefits section-pad">
        <div className="section-heading reveal"><p className="section-kicker">DIFERENCIAIS</p><h2>Seu objetivo. <em>Meu acompanhamento.</em></h2></div>
        <div className="benefit-grid">
          <div className="benefit reveal"><ShieldCheck /><div><strong>Acompanhamento próximo</strong><span>Orientação durante sua evolução.</span></div></div>
          <div className="benefit reveal"><Target /><div><strong>Treino personalizado</strong><span>Planejamento alinhado ao seu objetivo.</span></div></div>
          <div className="benefit reveal"><Clock3 /><div><strong>Flexibilidade</strong><span>Opções para encaixar na sua rotina.</span></div></div>
          <div className="benefit reveal"><Headset /><div><strong>Suporte contínuo</strong><span>Mais segurança para seguir evoluindo.</span></div></div>
        </div>
      </section>

      <section className="faq section-pad" id="duvidas">
        <div className="section-heading reveal"><p className="section-kicker">DÚVIDAS FREQUENTES</p><h2>Antes de <em>começar</em></h2></div>
        <div className="faq-list reveal">
          {faq.map(([q, a]) => (<details key={q}><summary>{q}</summary><p>{a}</p></details>))}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-text reveal"><p className="section-kicker">VAMOS COMEÇAR?</p><h2>DÊ O PRIMEIRO PASSO<br /><em>RUMO À SUA MELHOR VERSÃO.</em></h2><p>Entre em contato e conheça as opções de acompanhamento.</p></div>
        <a className="button button-red reveal" href={message('Olá, Hyago! Quero dar o primeiro passo e saber como funciona seu acompanhamento.')} target="_blank" rel="noreferrer"><MessageCircle size={22} /> Começar agora pelo WhatsApp <ArrowUpRight size={20} /></a>
      </section>

      </main>

      <footer className="footer">
        <img src={logo} alt="Hyago Santana" />
        <span>© {new Date().getFullYear()} Hyago Santana Personal Trainer · Olinda e Recife · CREF 022176-G/PE</span>
        <a href="https://www.instagram.com/hyagosantana_personal/" target="_blank" rel="noreferrer" aria-label="Instagram de Hyago Santana"><Instagram size={20} /><small>@hyagosantana_personal</small></a>
      </footer>
      <a className="whatsapp-float" href={message('Olá, Hyago! Vim pela sua página e gostaria de saber mais.')} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle /></a>
    </>
  );
}

export default App;