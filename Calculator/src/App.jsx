import { useState } from "react";
function App() {
  return (
    <div className="font-pobg-linear-45 from-[#0a0a0a] to-[#3a4452] h-screen flex justify-center items-center flex-col">
      <calculator className=" p-6 border-1 border-white shadow-[10px_15px_25px_rgba(113,115,119,0.25)] rounded-2xl bg-transparent">
        <input
          className="text-white w-full p-5 rounded-xl border-1"
          type="text"
          placeholder="0"
        />

        <div className="mt-2">
          <button>AC</button>
          <button>DEL</button>
          <button>%</button>
          <button>/</button>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
          </div>

          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>

          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>

          <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </calculator>
    </div>
  );
}

export default App;
