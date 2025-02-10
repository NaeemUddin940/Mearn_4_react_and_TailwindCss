function App() {
  let string = "";
  const buttons = document.querySelectorAll("button");
  const input = document.querySelector("input");
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          let value = button.innerText;
  
          if (value === "=") {
              try {
                  string = Function(`return ${string}`)(); // Safer than eval()
              } catch {
                  string = "Error"; // Handle invalid input 
              }
          } else if (value === "AC") {
              string = ""; // Clear input
          } else if(value == "DEL"){
              string = string.substring(0, string.length-1)
          } else {
              string += value; // Add clicked button's value
          }
          input.value = string; // Update input field
      });
  });
  
  return (
    <div className="font-[poppines] bg-linear-45 from-[#0a0a0a] to-[#3a4452] h-screen flex justify-center items-center flex-col">
      <calculator className="text-center p-6 border-1 border-white shadow-[10px_15px_25px_rgba(113,115,119,0.25)] rounded-2xl bg-transparent">
        <input
          className="text-[30px] placeholder:text-white border-none text-right w-full p-5 rounded-xl border-1" type="text" placeholder="0"
        />

        <div className="mt-2">
          <button>AC</button>
          <button>DEL</button>
          <button>%</button>
          <button className="text-blue">/</button>
          <div>
            
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="text-green-400">*</button>
          </div>

          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="text-green-400">-</button>
          </div>

          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            {/* color change hocche nah kno */}
            <button className="text-green-400">+</button>
          </div>

          <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button className="bg-[#fb7c14] ">=</button>
          </div>
        </div>
      </calculator>
    </div>
  );
}

export default App;
