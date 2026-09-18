
export default function Owner() {
  return (
    <section className="bg-ink flex flex-col px-8 py-20">
        <div className="flex flex-col gap-9 sm:flex sm:flex-row">
            <div className="">
                <img src="/francisco.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-blue font-medium text-xs">Quem criou o Centro</span>
                <h1 className="text-[clamp(30px,4vw,46px)] text-paper font-anto">Francisco Chinami Chitende</h1>
                <p className="text-blue font-medium">Profissional de Comunicação · Empreendedor</p>
                <div className="flex flex-col gap-2 mt-5">
                    <p className="text-gray-400 font-light">O Centro nasceu da visão de contribuir para a formação e transformação da juventude angolana através do conhecimento, da prática e do desenvolvimento de competências.</p>
                    <p className="text-gray-400">Criado por Francisco Chinami Chitende, surge como extensão de uma trajectória ligada à comunicação, liderança juvenil, formação e desenvolvimento de projectos — com uma ambição clara: formar pessoas para além do certificado.</p>
                </div>
                <div className="flex gap-6 mt-4">
                    <div className="w-1.5 bg-blue"></div>
                    <h2 className="text-paper font-medium text-2xl font-anto">"Formar pessoas para além do certificado — competências, confiança, responsabilidade e capacidade de transformar conhecimento em resultados."</h2>
                </div>
            </div>
        </div>
    </section>
  )
}
