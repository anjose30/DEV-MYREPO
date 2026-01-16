export default function Info() {
  return (
    <div className="w-full h-full  flex items-center justify-center py-22 xl:py-35 xl:px-10">
      <div className="grid md:grid-cols-3 md:grid-rows-3 gap-4 w-full h-full p-4">
        <div className="md:col-span-2 md:row-span-2 col-start-1 bg-white rounded-2xl p-3 shadow-md">
          sobre mi y mis conocimienrtos y experiencia
        </div>
        <div className="md:row-span-2 md:col-start-3 bg-white rounded-2xl p-3 shadow-md">descargar cv</div>
        <div className="md:col-span-3 md:row-span-2 col-start-1 row-start-3 bg-white rounded-2xl p-3 shadow-md">
          lista de proyectops con su respecticvo modal
        </div>
      </div>
    </div>
  );
}