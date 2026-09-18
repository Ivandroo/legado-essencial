import { Link } from "react-router-dom";
import { cursos } from "../lib";

export default function Courses() {
  return (
    <section className="bg-paper flex flex-col px-8 py-14">

        <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-3 max-w-2xl">
                <div className="text-xs text-blue-dim font-bold">Grade de formações</div>
                <h2 className="text-[clamp(30px,4vw,46px)] text-ink font-anto">Escolha a sua próxima turma.</h2>
                <p className="text-ink-soft"> 
                    Turmas com datas fixas e vagas limitadas. Toque numa formação para ver módulos, próxima data e vagas disponíveis.
                </p>
            </div>

            <div>
                {cursos.map((item, index) => (
                    <Link key={index} to={`/detalhes/${item.id}`}>
                        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-[300px_1fr] sm:items-center py-6 mb-2 border-t border-t-line border-b border-b-line">
                            <div className="flex gap-8">
                                <div>
                                    <h1>IMG</h1>
                                </div>
                                <div>
                                    <h3 className="font-medium uppercase text-blue text-xs">{item.slotDia}</h3>
                                    <span className="text-xs font-medium text-ink-soft">{item.slotHora}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-base">{item.titulo}</h1>
                                <p className="text-xs font-normal text-ink-soft">{item.resumo}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>

    </section>
  )
}
