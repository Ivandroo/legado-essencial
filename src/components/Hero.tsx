import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export const whatsapp = "https://wa.me/244929348138";

function Hero() {
  // 1. Referência para conseguir medir o tamanho e posição do botão real
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 2. Estado para guardar o deslocamento X e Y (offset)
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    if (!buttonRef.current) return;

    // Obter a posição e o tamanho exato do botão no ecrã
    const rect = buttonRef.current.getBoundingClientRect();

    // Calcular o centro do botão
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcular a distância entre o rato e o centro do botão
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    // Força magnética: divide o valor para o movimento ser mínimo (ex: move apenas 30% da distância)
    // Altere o divisor (3) se quiser que ele se mova mais ou menos
    const strength = 3;

    setOffset({
      x: distanceX / strength,
      y: distanceY / strength,
    });
  };

  // 3. Resetar a posição do botão quando o rato sai de cima dele
  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const delays = [
    "0.1s",
    "0.4s",
    "0.2s",
    "0.6s",
    "0.3s",
    "0.8s",
    "0.5s",
    "0.9s",
    "0.7s",
  ];

  return (
    <section className="bg-[url('/fundo.jpg')] bg-center bg-cover bg-no-repeat min-h-[80vh]">
      <div className="backdrop-blur-xs bg-black/30">
        <div className="flex flex-col items-center gap-4 justify-between min-h-[80vh] px-8 py-16 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-[clamp(42px,5.4vw,74px)] text-paper font-medium font-anto">
              Formar vozes que <span className="text-blue">transformam</span>{" "}
              Angola
            </h1>
            <p className="text-paper">
              Um centro de formação prática para jovens e profissionais que
              querem comunicar melhor, empreender com base e transformar
              conhecimento em resultados.
            </p>
            <div className="flex gap-4">
              
              <Link to={whatsapp}>
                <button
                  ref={buttonRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  // Adicionamos transição suave no Tailwind para o botão não dar saltos rígidos
                  className="bg-blue text-paper font-bold px-6 py-3 rounded-radius shadow-md transition-transform duration-200 ease-out inline-block"
                  style={{
                    // Aplica o movimento mínimo apenas nos eixos X e Y
                    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                  }}
                >
                  Falar conosco
                </button>
              </Link>

              <a
                href="#cursos"
                className="flex w-fit items-center px-4 py-2 text-paper border border-paper rounded-radius"
              >
                Ver cursos
              </a>
            </div>
          </div>
          <div className="w-full sm:relative h-65 border border-line-dark rounded-radius flex items-center justify-center bg-linear-to-b from-[rgba(46,107,255,0.08)] to-transparent overflow-hidden">
            {/* Barras da Onda */}
            <div className="flex items-end gap-1.25 h-30">
              {delays.map((delay, index) => (
                <span
                  key={index}
                  className="w-6 bg-blue rounded-[2px] animate-[bar_1.4s_ease-in-out_infinite]"
                  style={{ animationDelay: delay }}
                />
              ))}
            </div>

            {/* Legenda */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-[11.5px] tracking-[0.08em] text-[rgba(238,241,244,0.45)]">
              AUDIO RECORDING
            </div>
          </div>
        </div>
        <div className="ticker-strip">
      <div className="ticker-track" id="tickerTrack">
        <span className="hl">4 OUT</span><span>COMUNICAÇÃO ASSERTIVA E ORATÓRIA</span>
        <span className="hl">11 OUT</span><span>EMPREENDEDORISMO E EDUCAÇÃO FINANCEIRA</span>
        <span className="hl">18 OUT</span><span>MARKETING DIGITAL E MARCA PESSOAL</span>
        <span className="hl">25 OUT</span><span>GESTÃO DE PROJECTOS</span>
        <span className="hl">1 NOV</span><span>TÉCNICAS DE APRESENTAÇÃO EM TV E RÁDIO</span>
      </div>
    </div>
      </div>
    </section>
  );
}

export default Hero;
