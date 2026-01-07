export default function Hero() {
  return (
    <div className="w-full h-full flex justify-center items-center p-10 lg:p-50">
      <div className="w-full h-full grid gap-4 xl:flex text-white">
        <div className="shadow-lg w-full rounded-lg transition hover:-translate-y-1 hover:shadow-gray-800 bg-white/10 hover:bg-white/30 group">
          <div className="h-10 w-10 bg-amber-50 group-hover:bg-bg transition float-right"></div>
        </div>
        <div className="shadow-lg w-full rounded-lg transition hover:-translate-y-1 hover:shadow-gray-800 bg-white/10 hover:bg-white/30 p-2">
          <details className="transition border  open:bg-gray-800 p-2 rounded-2xl">
            <summary className="">Titulo expandible</summary>
            <div>
              <p className="selection:bg-amber-400">Este es el texto expandible</p>
            </div>
          </details>
        </div>
        <div className="shadow-lg w-full rounded-lg transition hover:-translate-y-1 hover:shadow-gray-800 bg-white/10 hover:bg-white/30 p-2">
          <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">FrontEnd Developer</p>
        </div>
      </div>
    </div>
  );
}
