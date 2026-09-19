import GalleryArea from "../components/GalleryArea";

export default function Gallery() {
  return (
    <section>
      <div className="bg-studio-3 flex flex-col ">
        <div className="flex flex-col w-full max-w-6xl px-8 py-14 my-0 mx-auto gap-4 sm:px-0">
          <h1 className="text-5xl text-paper-dim font-anto">Galeria</h1>
          <p className="text-paper max-w-[60ch]">
            Momentos das nossas formações — fotos e vídeos das turmas, dos
            bastidores e das entregas de certificados.
          </p>
        </div>
      </div>
      <div className="bg-studio flex flex-col min-h-screen px-8 py-14">
        <GalleryArea />
      </div>
    </section>
  );
}
