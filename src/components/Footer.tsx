import { Link } from "react-router-dom";
import { ikigai } from "../lib";

export default function Footer() {
  return (
    <footer className=" flex flex-col ">
      <div className="flex bg-ink flex-col px-8 py-14 text-paper text-xs">
        <div className="flex flex-col w-full max-w-6xl my-0 mx-auto gap-4 sm:flex-row items-center justify-center sm:justify-between">

        <span className="text-center"> © 2026 Legado Essencial — Centro de Formação. Luanda, Angola. </span>
        <span>
          <a href="mailto:geral@centrovoz.ao"> geral@centrovoz.ao </a> ·
          <a href="tel:+244929348138" target="_blank" rel="noopener"> WhatsApp </a>
          ·
          <a href="https://instagram.com" target="_blank" rel="noopener"> Instagram </a>
        </span>
        </div>
      </div>
      <div className="flex bg-blue py-4 justify-center">
        <span className="text-xs font-medium text-studio-2">Desenvolvido por <Link to={ikigai} target="_blank" className="font-bold bg-red text-ink py-1 px-3 hover:bg-cyan transition-all"> IKIGAI </Link></span>
      </div>
    </footer>
  )
}
