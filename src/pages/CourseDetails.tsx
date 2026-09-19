import { ArrowLeft } from "lucide-react";
import { cursos } from "../lib";
import { Link, useParams } from "react-router-dom";

export default function CoursesDetails() {
  const { id } = useParams<{ id: string }>();

  const curso = cursos.find((item) => item.id === String(id));

  if (!curso) {
    return <h1>Curso não encontrado</h1>;
  }
  return (
    <section>
      <div className="bg-studio-3 flex flex-col ">
        <div className="flex flex-col w-full max-w-6xl px-8 py-14 my-0 mx-auto gap-4">
          <Link
            to="/#cursos"
            className="flex gap-2 text-red text-xs items-center border border-ink-soft rounded-full w-fit px-3 py-2"
          >
            <ArrowLeft size={15} /> Voltar
          </Link>
          <h1 className="text-4xl sm:text-5xl text-paper-dim font-anto">
            {curso.titulo}
          </h1>
          <p className="text-paper max-w-[60ch]">{curso.lede}</p>
          <div className="flex w-fit flex-row gap-4">
            <span className="flex gap-2 text-cyan text-xs items-center border border-ink-soft rounded-full w-fit px-3 py-2">
              {curso.slotDia}
            </span>
            <span className="flex gap-2 text-blue text-xs items-center border border-ink-soft rounded-full w-fit px-3 py-2">
              {curso.slotHora}
            </span>
          </div>
        </div>
      </div>

      <div className="flex bg-paper">
        <div className="flex flex-col w-full gap-8 px-8 py-14 max-w-6xl my-0 mx-auto sm:px-0 sm:grid sm:grid-cols-2">
          <div className="flex flex-col w-full gap-8">
            <div>
              <img src={curso.imagem} alt="" className="rounded-radius" />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-xl text-ink">
                Para quem é esta formação
              </h1>
              <p className="text-base text-ink-soft">{curso.paraQuem}</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-xl text-ink">O que vai aprender</h1>
              <ul typeof="number" className="text-base text-ink-soft">
                {curso.modulos.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-4 items-center py-4 border-b border-b-line"
                  >
                    {" "}
                    <span className="bg-blue/25 p-1 font-bold text-blue font-anto rounded-radius">
                      0{index + 1}
                    </span>{" "}
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 h-fit ">
            <div className="bg-paper-dim border border-line flex flex-col gap-4 px-8 py-6 h-fit rounded-radius ">
              <div className="flex gap-4 justify-between py-1 border-b border-b-line">
                <h1 className=" text-ink-soft">Duração</h1>
                <p className="text-ink font-bold">{curso.duracao}</p>
              </div>
              <div className="flex gap-4 justify-between py-1 border-b border-b-line">
                <h1 className="text-base text-ink-soft">Formato</h1>
                <p className="text-ink font-bold">{curso.formato}</p>
              </div>
              <div className="flex justify-between py-1 border-b border-b-line">
                <h1 className="text-base text-ink-soft">Local</h1>
                <p className="text-ink font-bold">{curso.local}</p>
              </div>
              <div className="flex justify-between py-1 border-b border-b-line">
                <h1 className="text-base text-ink-soft">Data</h1>
                <p className="text-ink font-bold">{curso.data}</p>
              </div>
              <div className="flex justify-between py-1 border-b border-b-line">
                <h1 className="text-base text-ink-soft">Vagas</h1>
                <p className="text-ink font-bold">{curso.vagasTotal}</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to=""
                  className="flex justify-center w-full text-paper border border-line py-2 px-4 bg-blue font-bold rounded-radius mt-4"
                >
                  {" "}
                  Garantir a minha vaga{" "}
                </Link>
                <p className="text-xs text-ink-soft">
                  Entre em contacto conosco para garantir a sua vaga
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl text-ink">Outras formações </h1>
              <ul className="flex flex-col gap-2">
                {cursos.map((item, index) => (
                  <Link
                    key={index}
                    to={`/detalhes/${item.id}`}
                    className="flex relative gap-2 items-center py-4 border-b border-b-line cursor-pointer font-medium hover:text-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    {item.titulo}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
