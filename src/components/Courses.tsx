import { Link } from "react-router-dom";
import { cursos } from "../lib";

export default function Courses() {
  return (
    <section className="bg-paper flex flex-col px-8 py-14">
      <div className="flex w-full flex-col gap-6 max-w-6xl my-0 mx-auto">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="text-xs text-blue-dim font-bold">
            Grade de formações
          </div>
          <h2 className="text-[clamp(30px,4vw,46px)] text-ink font-anto">
            Escolha a sua próxima turma.
          </h2>
          <p className="text-ink-soft">
            Turmas com datas fixas e vagas limitadas. Toque numa formação para
            ver módulos, próxima data e vagas disponíveis.
          </p>
        </div>

        <div>
          {cursos.map((item, index) => (
            <Link key={index} to={`/detalhes/${item.id}`}>
              {/*  hover:bg-blue-dim/5 */}
              <div
                className="flex flex-col gap-6 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:items-start border-t border-t-line relative py-4 px-6 mb-4 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors duration-300
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full 
                    after:origin-bottom-right after:scale-x-0 after:bg-blue-600 
                    after:transition-transform after:duration-300 after:ease-in-out 
                    hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                <div className="relative z-10 flex flex-wrap gap-8">
                  <div>
                    <img
                      src={item.imagem}
                      alt=""
                      className="sm:max-w-50 rounded-radius"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-blue text-xs">
                      {item.slotDia}
                    </h3>
                    <span className="text-xs font-medium text-ink-soft">
                      {item.slotHora}
                    </span>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h1 className="font-bold text-ink text-xl">{item.titulo}</h1>
                  <p className="text-xs font-normal text-ink-soft">
                    {item.resumo}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
