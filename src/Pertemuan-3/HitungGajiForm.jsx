import { useState } from "react";
import InputGaji from "./components/InputGaji";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");

  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <InputGaji
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan Gaji Anda"
          onChange={(e) => setGaji(Number(e.target.value))}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b class="text-red-500">11%</b>
          </label>
        </div>

        {!gaji ? (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">
              Silahkan Inputkan gaji anda ya, JANGAN NGUTANG
            </p>
          </div>
        ) : !isNaN(gaji) && gaji !== "" ? (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">
              Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
            </p>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-yellow-500 text-yellow-700">
            <p className="font-semibold">Eh, gaji anda 2M ya (MAAF, MAKASIH)</p>
          </div>
        )}
      </div>
    </div>
  );
}
