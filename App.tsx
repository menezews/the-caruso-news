import { useEffect, useState } from "react";

type Story = {
  kicker: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
  credit: string;
  metric: string;
  metricLabel: string;
};

const stories: Story[] = [
  {
    kicker: "Estratégia climática",
    number: "01",
    title: "CARUSO conclui inventário de carbono em tempo recorde",
    summary:
      "Uma entrega integrada que transforma dados ambientais em decisões mais inteligentes.",
    bullets: [
      "Mapeamento de 14 unidades operacionais",
      "Escopos 1, 2 e 3 consolidados em uma única plataforma",
      "Plano de redução com metas até 2030",
    ],
    image:
      "https://images.unsplash.com/photo-1581094482523-8555833e6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwZW5naW5lZXJzJTIwZmllbGQlMjB3b3JrJTIwdGFibGV0fGVufDF8fHx8MTc5NDgzNTkxMHww&ixlib=rb-4.1.0&q=85&w=1600",
    credit: "Foto: ThisisEngineering / Unsplash",
    metric: "42%",
    metricLabel: "mais agilidade na coleta",
  },
  {
    kicker: "Biodiversidade",
    number: "02",
    title: "Novo corredor ecológico protege 1.200 hectares",
    summary:
      "Consultoria técnica e escuta ativa conectam comunidades, empresas e conservação.",
    bullets: [
      "Diagnóstico de fauna e flora em campo",
      "Conexão de três fragmentos de Mata Atlântica",
      "Monitoramento participativo com comunidades locais",
    ],
    image:
      "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc3VsdGluZyUyMHN1c3RhaW5hYmlsaXR5JTIwdGVhbSUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMGZvcmVzdCUyMHdhdGVyfGVufDF8fHx8MTc5NDgzNTkwNHww&ixlib=rb-4.1.0&q=85&w=1600",
    credit: "Foto: Vlad Hilitanu / Unsplash",
    metric: "1.200",
    metricLabel: "hectares conectados",
  },
  {
    kicker: "Recursos hídricos",
    number: "03",
    title: "Tecnologia antecipa riscos na qualidade da água",
    summary:
      "O novo protocolo combina inteligência de dados e precisão laboratorial.",
    bullets: [
      "Análises preditivas em 28 pontos de coleta",
      "Alertas ambientais com atualização diária",
      "Relatórios executivos mais claros e acionáveis",
    ],
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3QlMjBlbnZpcm9ubWVudGFsJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzk0ODM1OTExfDA&ixlib=rb-4.1.0&q=85&w=1600",
    credit: "Foto: Julia Koblitz / Unsplash",
    metric: "24h",
    metricLabel: "para sinalizar desvios",
  },
];

const SCENE_DURATION = 8000;
const TOTAL_SCENES = stories.length + 1;

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="Caruso">
      <span className="logo-dot" />
      <span>CARUSO</span>
    </div>
  );
}

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Cover() {
  return (
    <section className="scene cover-scene">
      <div className="cover-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <header className="scene-header reveal reveal-1">
        <LogoMark />
        <span className="edition-pill">Edição 11 · 2026</span>
      </header>

      <div className="cover-content">
        <div className="eyebrow reveal reveal-2">
          <span />
          Comunicação interna
        </div>
        <h1 className="cover-title">
          <span className="reveal reveal-3">The CARUSO</span>
          <span className="outline-text reveal reveal-4">News</span>
        </h1>
        <div className="cover-meta reveal reveal-5">
          <div>
            <span className="meta-label">Edição</span>
            <strong>Novembro de 2026</strong>
          </div>
          <div className="meta-divider" />
          <p>Seu jornal mensal interno</p>
        </div>
      </div>

      <div className="cover-footer reveal reveal-6">
        <span>Impacto positivo começa com informação.</span>
        <div className="scroll-cue">
          <span>Começar</span>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}

function StoryScene({ story }: { story: Story }) {
  return (
    <section className="scene story-scene">
      <div className="story-image-wrap reveal-image">
        <img src={story.image} alt="" className="story-image" />
        <div className="image-overlay" />
        <span className="photo-credit">{story.credit}</span>
        <div className="story-number">{story.number}</div>
      </div>

      <div className="story-content">
        <header className="story-header reveal reveal-1">
          <LogoMark />
          <span>THE CARUSO NEWS · NOV 2026</span>
        </header>

        <div className="story-copy">
          <div className="eyebrow dark reveal reveal-2">
            <span />
            {story.kicker}
          </div>
          <h2 className="reveal reveal-3">{story.title}</h2>
          <p className="story-summary reveal reveal-4">{story.summary}</p>

          <ul className="story-bullets">
            {story.bullets.map((bullet, index) => (
              <li
                key={bullet}
                className="bullet-reveal"
                style={{ animationDelay: `${1.2 + index * 0.22}s` }}
              >
                <span className="bullet-index">0{index + 1}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="metric-card reveal reveal-6">
          <strong>{story.metric}</strong>
          <span>{story.metricLabel}</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackKey, setPlaybackKey] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setTimeout(() => {
      setScene((current) => (current + 1) % TOTAL_SCENES);
      setPlaybackKey((key) => key + 1);
    }, SCENE_DURATION);
    return () => window.clearTimeout(timer);
  }, [scene, isPlaying, playbackKey]);

  const changeScene = (nextScene: number) => {
    setScene((nextScene + TOTAL_SCENES) % TOTAL_SCENES);
    setPlaybackKey((key) => key + 1);
  };

  return (
    <main className="app-shell">
      <div className="player-frame">
        <div className="video-stage" key={`${scene}-${playbackKey}`}>
          {scene === 0 ? <Cover /> : <StoryScene story={stories[scene - 1]} />}
          <div className="scene-counter">
            <span>0{scene + 1}</span>
            <span className="counter-line" />
            <span>0{TOTAL_SCENES}</span>
          </div>
        </div>

        <div className="controls" aria-label="Controles do jornal">
          <button
            className="icon-button"
            onClick={() => changeScene(scene - 1)}
            aria-label="Cena anterior"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            className="play-button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14M16 5v14" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="play-fill" d="m8 5 11 7-11 7Z" />
              </svg>
            )}
          </button>
          <button
            className="icon-button"
            onClick={() => changeScene(scene + 1)}
            aria-label="Próxima cena"
          >
            <ArrowIcon />
          </button>

          <div className="timeline">
            {Array.from({ length: TOTAL_SCENES }).map((_, index) => (
              <button
                key={index}
                className={`timeline-segment ${index === scene ? "active" : ""} ${
                  index < scene ? "complete" : ""
                }`}
                onClick={() => changeScene(index)}
                aria-label={`Ir para cena ${index + 1}`}
              >
                <span
                  className={index === scene && isPlaying ? "progress-running" : ""}
                  style={{ animationDuration: `${SCENE_DURATION}ms` }}
                />
              </button>
            ))}
          </div>

          <div className="control-meta">
            <span>{scene === 0 ? "ABERTURA" : `NOTÍCIA 0${scene}`}</span>
            <span>00:{String((scene + 1) * 8).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
      <p className="outside-caption">
        CARUSO · Comunicação interna <span>—</span> Novembro 2026
      </p>
    </main>
  );
}

export default App;
