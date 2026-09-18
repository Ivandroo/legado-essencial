import Courses from "../components/Courses";
import Hero from "../components/Hero";
import Owner from "../components/Owner";

export default function Home() {
  return (
    <section>
      <Hero />
      <section className="bg-paper py-14 px-8 border-b border-b-line">
        <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:grid sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col w-full text-center gap-3 ">
            <span
              className="font-anto text-5xl text-blue-dim block"
              data-target="5"
            >
              5
            </span>
            <span className="text-xs text-ink-soft">Formações no arranque</span>
          </div>
          <div className="flex flex-col w-full text-center gap-3">
            <span className="font-anto text-5xl text-blue-dim block">2</span>
            <span className="text-xs text-ink-soft">
              Dias de formação por semana
            </span>
          </div>
          <div className="flex flex-col text-center w-full gap-3">
            <span className="font-anto text-5xl text-cyan block">100%</span>
            <span className="text-xs text-ink-soft">Abordagem prática</span>
          </div>
          <div className="flex flex-col w-full text-center gap-3">
            <span className="font-anto text-5xl text-blue-dim block">7</span>
            <span className="text-xs text-ink-soft">
              Valores que praticamos
            </span>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 px-8" id="sobre">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="text-xs text-blue-dim font-bold">
              Sobre o Centro
            </div>
            <h2 className="text-[clamp(30px,4vw,46px)] text-ink font-anto">
              Formação para além do certificado.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-ink-soft text-base mb-4">
              O Centro é uma instituição vocacionada para a formação,
              capacitação e desenvolvimento de competências pessoais e
              profissionais, com especial atenção à juventude angolana.
            </p>
            <p className="text-ink-soft text-base mb-4">
              Numa primeira fase, actuamos com forte incidência em Comunicação e
              Oratória, Comunicação Social e Jornalismo, Marketing Digital e
              Marca Pessoal, Empreendedorismo, Educação Financeira, Gestão de
              Projectos e Desenvolvimento Pessoal.
            </p>
            <p className="text-ink-soft text-base mb-4">
              A nossa abordagem é prática, acessível, dinâmica e orientada para
              competências que se aplicam de imediato no mercado de trabalho.
            </p>
            <div className="flex flex-col gap-0.5 sm:grid sm:grid-cols-2">
              <div className="flex flex-col gap-2 p-7 bg-paper border border-line">
                <h3 className="font-anto text-ink">Missão</h3>
                <p className="text-ink-soft text-[14.5px] mb-4">
                  Promover formação profissional acessível, prática e de
                  qualidade, desenvolvendo competências que contribuam para o
                  crescimento pessoal, profissional e empreendedor de jovens e
                  adultos em Angola.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-7 bg-paper border border-line">
                <h3 className="font-anto text-ink">Visão</h3>
                <p className="text-ink-soft text-[14.5px] mb-4">
                  Ser uma instituição de referência em Angola na formação e
                  capacitação profissional, reconhecida pela qualidade,
                  inovação, impacto social e capacidade de transformar
                  conhecimento em oportunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim flex flex-col px-8 py-14" id="modelo">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="text-xs text-blue-dim font-bold">Como funcionamos</div>
            <h2 className="text-[clamp(30px,4vw,46px)] text-ink font-anto">Um modelo que cresce em duas fases.</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 py-8 px-4 border-t border-t-line">
              <div className="font-anto text-4xl text-blue-dim">01</div>
              <div className="flex flex-col gap-2">
                <h3 className="font-extrabold text-xl mb-4 font-inter">Parcerias e fins de semana</h3>
                <p className="text-ink-soft max-w-[60ch]">
                  Funcionamos através de parcerias com instituições de ensino e
                  outros espaços em Luanda, principalmente aos sábados e
                  domingos, para não competir com o trabalho ou os estudos de
                  quem se forma connosco.
                </p>
                <span className="inline-block w-fit mt-1 text-xs font-bold py-1 px-3 rounded-xl bg-tag text-blue-dim">Fase actual</span>
              </div>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 py-8 px-4 border-t border-t-line">
              <div className="font-anto text-4xl text-blue-dim">02</div>
              <div className="flex flex-col gap-2">
                <h3 className="font-extrabold text-xl mb-4 font-inter">Instituição de referência</h3>
                <p className="text-ink-soft max-w-[60ch]">
                  Construímos progressivamente instalações próprias, programas
                  de excelência, formadores qualificados e reconhecimento
                  institucional — sem perder a proximidade que nos trouxe até
                  aqui.
                </p>
                <span className="rinline-block w-fit mt-1 text-xs font-bold py-1 px-3 rounded-xl bg-line text-ink-soft">Próxima fase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper flex flex-col px-8 py-14" id="valores">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="text-xs text-blue-dim font-bold">O que nos guia</div>
            <h2 className="text-[clamp(30px,4vw,46px)] text-ink font-anto">Valores que aplicamos, não só que escrevemos.</h2>
          </div>
          <div className="border-t border-t-line" id="valoresList">
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-blue"></span>
                <h3 className="font-bold">Excelência</h3>
              </div>
              <p>
                Procuramos fazer cada formação com qualidade, do primeiro ao
                último módulo.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-cyan"></span>
                <h3 className="font-bold">Integridade</h3>
              </div>
              <p>
                Trabalhamos com transparência, ética e responsabilidade em cada
                turma e em cada parceria.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-red"></span>
                <h3 className="font-bold">Inovação</h3>
              </div>
              <p>
                Procuramos novas formas de ensinar e de desenvolver
                competências.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-blue"></span>
                <h3 className="font-bold">Prática</h3>
              </div>
              <p>
                Acreditamos que conhecimento precisa de aplicação — por isso
                formamos fazendo.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-cyan"></span>
                <h3 className="font-bold">Inclusão</h3>
              </div>
              <p>
                Queremos tornar a formação acessível a diferentes públicos e
                realidades.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-red"></span>
                <h3 className="font-bold">Impacto</h3>
              </div>
              <p>
                O nosso sucesso mede-se também pelas vidas que conseguimos
                transformar.
              </p>
            </div>
            <div className="flex flex-col gap-6 py-6 px-2 border-b border-b-line sm:grid sm:grid-cols-[200px_1fr]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-blue" ></span>
                <h3 className="font-bold">Legado</h3>
              </div>
              <p>
                Formamos hoje pensando no impacto que vai permanecer amanhã.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Courses />
      <Owner />
    </section>
  );
}
