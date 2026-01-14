export default function Hero() {
  return (
    <div className="w-full h-full grid gap-2 items-center landscape:flex landscape:flex-row lg:flex">
      <div className="bg-elements w-full h-full lg:rounded-r-4xl flex justify-center items-center rounded-b-4xl lg:rounded-l-none">
        <h1 className="text-white font-bold text-2xl">ANDRES MARTINEZ</h1>
      </div>

      <div className="w-full h-full p-2">
        <div className="w-full h-full border border-gray-300 rounded-2xl p-2 flex justify-center items-center">
          <div className="grid grid-cols-5 grid-rows-6 gap-4 w-full h-full lg:p-10">
            <div className="col-span-3 row-span-3 rounded-2xl p-2 bg-elements4">1</div>
            <div className="col-span-2 row-span-3 col-start-4 rounded-2xl p-2 bg-elements4">2</div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-4 rounded-2xl p-2 bg-elements4">
              3
            </div>
            <div className="col-span-2 row-span-3 col-start-1 row-start-4 rounded-2xl p-2 bg-elements4">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
