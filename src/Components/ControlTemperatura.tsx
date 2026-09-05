import { useContador } from "../hooks/useContador";

export const ControlTemperatura = () => {
  const { contador, aumentarValor } = useContador();

  const mensaje = () => {
    if (contador >= 10 && contador <= 17){
        return "Ambiente frío";
    }

    if (contador >= 18 && contador <= 24){
        return "Temperatura agradable";
    } 

    if (contador >= 25 && contador <= 30){
        return "Ambiente caliente";
    } 
  };

  // Cálculo del porcentaje para el indicador de la barra.
  const minTemp = 10;
  const maxTemp = 30;
  const porcentaje = Math.min(
    Math.max(((contador - minTemp) / (maxTemp - minTemp)) * 100, 0),
    100
  );

  return (
    <div className="mx-auto my-8 w-[min(92%,440px)] rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl shadow-slate-200/60">
      <h1 className="mb-6 text-2xl font-extrabold tracking-wide text-[#0B2545]">
        CONTROL DE TEMPERATURA
      </h1>

      <p className="text-base font-medium text-slate-500">Temperatura actual</p>

      {/* Bloque de Temperatura con Icono */}
      <div className="my-2 flex items-center justify-center gap-3">
        <span className="text-6xl font-bold text-[#FF6B00]">
          🌡️ {contador} °C
        </span>
      </div>

      <br />
      <p className="mt-4 text-lg font-medium text-slate-700">{mensaje()}</p>

      {/* Barra de Rango Visual */}
      <div className="my-6 px-2">
        <div className="relative flex items-center">
          {/* Fondo Gradiente */}
          <div className="h-2.5 w-full rounded-full bg-linear-to-r from-[#007BFF] via-[#28A745] via-50% to-[#FF6B00]" />

          {/* Indicador / Círculo Móvil */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
            style={{ left: `${porcentaje}%` }}>
            <div className="h-6 w-6 rounded-full border-[3px] border-[#28A745] bg-white shadow-md" />
          
          </div>
        </div>

        {/* Etiquetas de grados de la barra */}
        <div className="mt-2 flex justify-between text-sm font-semibold text-slate-600">
          <span>10 °C</span>
          <span className="text-slate-800">{contador} °C</span>
          <span>30 °C</span>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        <button
          className="flex-1 rounded-2xl bg-[#1884FF] py-4 text-3xl font-bold text-white shadow-md shadow-blue-200 transition-transform active:scale-95 hover:bg-[#0073F0]"
          onClick={() => aumentarValor(-1)}>
          −1 °C
        </button>

        <button
          className="flex-1 rounded-2xl bg-[#FF7A00] py-4 text-3xl font-bold text-white shadow-md shadow-orange-200 transition-transform active:scale-95 hover:bg-[#E66E00]"
          onClick={() => aumentarValor(1)}>
          +1 °C
        </button>

      </div>

      <p className="text-sm font-medium text-slate-400">
        Rango permitido: 10 °C a 30 °C
      </p>

    </div>
  );
};