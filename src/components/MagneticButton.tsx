import { useState, useRef } from "react";

const MagneticButton = () => {
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

  return (
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
      O Teu Botão Existente
    </button>
  );
};

export default MagneticButton;
