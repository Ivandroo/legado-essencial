import ContactArea from "../components/ContactArea";


export default function Contact() {
  return (
    <section>
        <div className="bg-studio-3 flex flex-col ">
            <div className="flex flex-col w-full max-w-6xl px-8 py-14 my-0 mx-auto gap-4">
                <h1 className="text-5xl text-paper-dim font-anto">Fale conosco</h1>
                <p className="text-paper max-w-[60ch]">
                    Dúvidas sobre uma formação, parcerias ou como levar o Centro à sua
                    instituição — estamos por aqui.
                </p>
            </div>
        </div>
        <div className="bg-paper flex flex-col px-8 py-14">
            <ContactArea />
        </div>
    </section>
  );
}
