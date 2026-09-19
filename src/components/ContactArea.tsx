import { LocationEdit, Mail, PhoneCall, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function ContactArea() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    curso: "",
    mensagem: "",
  });
  const [erro, setErro] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Este formulário ainda não se encontra activo.");
    setFormulario({ nome: "", email: "", curso: "", mensagem: "" });
    setErro("Envie-nos uma mensagem pelo whatsapp");
  };
  return (
    <section className=" min-h-screen">
      <div className="flex flex-col w-full max-w-6xl my-0 mx-auto sm:grid sm:grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-ink">Contactos directos</h1>
          <div className="flex flex-row gap-4 py-4 items-start border-t border-t-ink-soft/20">
            <span className="text-blue">
              <PhoneCall />
            </span>
            <span className="flex flex-col gap-1">
              <h1 className="text-xs font-bold text-ink">Telefone</h1>
              <p className="text-base text-ink-soft">+244 929 348 138</p>
            </span>
          </div>
          <div className="flex flex-row gap-4 py-4 items-start border-t border-t-ink-soft/20">
            <span className="text-blue">
              <Mail />
            </span>
            <span className="flex flex-col gap-1">
              <h1 className="text-xs font-bold text-ink">Email</h1>
              <p className="text-base text-ink-soft">geral@gmail.com</p>
            </span>
          </div>
          <div className="flex flex-row gap-4 py-4 items-start border-t border-t-ink-soft/20">
            <span className="text-blue">
              <LocationEdit />
            </span>
            <span className="flex flex-col gap-1">
              <h1 className="text-xs font-bold text-ink">Onde formamos</h1>
              <p className="text-base text-ink-soft">
                Instituto Médio de Economia de Luanda - IMEL
              </p>
            </span>
          </div>
          <div className="flex flex-row gap-4 py-4 items-start border-t border-t-ink-soft/20">
            <span className="text-blue">
              <Timer />
            </span>
            <span className="flex flex-col gap-1">
              <h1 className="text-xs font-bold text-ink">
                Horário de formação
              </h1>
              <p className="text-base text-ink-soft">
                Sábados e domingos, consoante a turma
              </p>
            </span>
          </div>
          <div className="flex gap-4 py-4 border-t border-t-ink-soft/20">
            {loading && <Loading />}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.9140415983948!2d13.24377110960675!3d-8.829424891187541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f37df86fc64f%3A0xa06f4031efd37cd0!2sINSTITUTO%20M%C3%89DIO%20DE%20ECONOMIA%20DE%20LUANDA%20-%20IMEL!5e1!3m2!1spt-PT!2sao!4v1789852924826!5m2!1spt-PT!2sao"
              className="w-full rounded-radius"
            ></iframe>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h1 className="text-xl font-bold text-ink">Enviar Mensagem</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="f-nome" className="text-xs font-bold text-ink">
                Nome
              </label>
              <input
                id="f-nome"
                type="text"
                placeholder="Ex. Francisco PCA"
                className="flex w-full text-ink-soft border border-line py-2 px-4 rounded-radius"
                value={formulario.nome}
                onChange={(e) =>
                  setFormulario({ ...formulario, nome: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="f-email" className="text-xs font-bold text-ink">
                Email
              </label>
              <input
                id="f-email"
                type="email"
                placeholder="franciscopca@gmail.com"
                className="flex w-full text-ink-soft border border-line py-2 px-4 rounded-radius"
                value={formulario.email}
                onChange={(e) =>
                  setFormulario({ ...formulario, email: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="f-curso" className="text-xs font-bold text-ink">
                Curso
              </label>
              <select
                id="f-curso"
                value={formulario.curso}
                onChange={(e) =>
                  setFormulario({ ...formulario, curso: e.target.value })
                }
                required
                className="flex w-full text-ink-soft border border-line rounded-radius py-2 px-4"
              >
                <option value="">Selecione uma opção</option>
                <option value="">Comunicação Assertiva e Oratória</option>
                <option>Empreendedorismo e Educação Financeira</option>
                <option>Marketing Digital e Marca Pessoal</option>
                <option>Gestão de Projectos</option>
                <option>Técnicas de Apresentação em TV e Rádio</option>
                <option>Ainda não sei / outra questão</option>
                <option value="">Outra</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="f-msg" className="text-xs font-bold text-ink">
                Mensagem
              </label>
              <textarea
                id="f-msg"
                className="flex w-full text-ink-soft border border-line py-2 px-4 resize-none rounded-radius"
                placeholder="Escreva a sua mensagem..."
                value={formulario.mensagem}
                onChange={(e) =>
                  setFormulario({ ...formulario, mensagem: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex justify-center w-full text-paper border border-line py-2 px-4 bg-blue font-bold rounded-radius mt-4"
            >
              Enviar mensagem
            </button>

            <div
              className="flex flex-col gap-1 items-center w-full"
              id="formSuccess"
            >
              {/* Mensagem de sucesso ou erro */}
              {erro && (
                <div>
                  <div className="flex w-full font-bold py-2 px-6 justify-center bg-red/20 text-red rounded-radius border border-dashed border-red">
                    {erro}
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
